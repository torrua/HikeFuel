// import { useContext } from 'react';
import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import cn from 'classnames';

import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';

import { requests, registerPath } from '../../api/requests.js';

// Create a <FormField /> component to increase code reusability
// Add an onBlur event to remove messages after losing focus
// Probably don't need the <ErrorBlock /> component; consider using alerts instead

const ErrorBlock = ({ errorMessage }) => {
  const classError = cn('mt-0', 'text-danger', {
    'd-none': !errorMessage,
    'd-block': !!errorMessage,
  });

  return <div className={classError}>{errorMessage}</div>;
};

const SignUpPage = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'signUpPage' });
  const inputRef = useRef();
  const navigate = useNavigate();

  const LoginSchema = yup.object({
    username: yup
      .string()
      .trim()
      .required(t('userNameRequired'))
      .min(3, t('userNameMin')),
    first_name: yup 
      .string()
      .trim()
      .required(t('firstNameRequired')),
    last_name: yup
      .string()
      .trim()
      .required(t('lastNameRequired')),
    email: yup
      .string()
      .email(t('emailInvalid'))
      .required(t('emailRequired')),
    password: yup
      .string()
      .required(t('passwordRequired'))
      .min(10, t('passwordMin', { signs: 10 })),
    confirmPassword: yup
      .string()
      .required(t('confirmPasswordError'))
      .oneOf([yup.ref('password'), null], t('equalRequired')),
  });

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <Formik
        validationSchema={LoginSchema}

        initialValues={{ 
          username: '',
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}

        onSubmit={async (values, { setSubmitting, setErrors, resetForm }) => {
          const { confirmPassword, ...formValues } = values;
          const { username, first_name, last_name, email, password } = formValues;

          const postValues = { 
            email,
            password,
            is_active: true,
            is_superuser: false,
            is_verified: false,
            first_name,
            last_name,
            username,
          };

          try {
            await requests.post(registerPath, axios, postValues)
              resetForm();
              navigate('/login')
              // send data to state (redux tolkit)
          } catch (error) {
              if (error.response) {
                const statusCode = error.response.status;
                const errorData = error.response.data;
  
                if (statusCode === 400 && errorData.detail === "REGISTER_USER_ALREADY_EXISTS") {
                  setErrors({ username: t('userExistsError')});
                  alert(t('userExistsError'));
                } else if (statusCode === 422 && Array.isArray(errorData.detail)) {
                    const formErrors = {};
                    errorData.detail.forEach(err => {
                      const fieldName = err.loc[1];
                      // How many types of errors are there, and does double validation make sense?
                      formErrors[fieldName] = err.msg;
                    });
                  setErrors(formErrors);
                  const [ message, ] = Object.values(formErrors);
                  alert(message);
                } else {
                    setErrors({ _error: t('unexpectedError') });
                    alert(t('unexpectedError'));
                }
              } else {
                  setErrors({ _error: t('unexpectedError') });
                  alert(t('unexpectedError'));
              }
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <div className="container mt-5">
            <div className="row justify-content-center align-content-center h-100">
              <h1 className="col-12 text-center text-primary">{t('header')}</h1>
              <Form className="col-12 col-md-6 mt-3">
                <div className="form-floating mb-3">
                  <Field
                    id="username"
                    name="username"
                    placeholder={t('userNameMin')}
                    autoComplete="username"
                    type="text"
                    required
                    className="form-control"
                    innerRef={inputRef}
                  />
                  {errors.username && touched.username ? (
                    <div className="text-danger">{errors.username}</div>
                  ) : null}
                  <label htmlFor="username">{t('userName')}</label>
                </div>

                <div className="form-floating mb-3">
                  <Field
                    id="first_name"
                    name="first_name"
                    placeholder={t('firstName')}
                    autoComplete="first_name"
                    type="text"
                    required
                    className="form-control"
                  />
                  {errors.first_name && touched.first_name ? (
                    <div className="text-danger">{errors.first_name}</div>
                  ) : null}
                  <label htmlFor="first_name">{t('firstName')}</label>
                </div>

                <div className="form-floating mb-3">
                  <Field
                    id="last_name"
                    name="last_name"
                    placeholder={t('lastName')}
                    autoComplete="last_name"
                    type="text"
                    required
                    className="form-control"
                  />
                  {errors.last_name && touched.last_name ? (
                    <div className="text-danger">{errors.last_name}</div>
                  ) : null}
                  <label htmlFor="last_name">{t('lastName')}</label>
                </div>

                <div className="form-floating mb-3">
                  <Field
                    id="email"
                    name="email"
                    placeholder={t('email')}
                    autoComplete="email"
                    type="email"
                    required
                    className="form-control"
                  />
                  {errors.email && touched.email ? (
                    <div className="text-danger">{errors.email}</div>
                  ) : null}
                  <label htmlFor="email">{t('email')}</label>
                </div>

                <div className="form-floating mb-3">
                  <Field
                    id="password"
                    name="password"
                    placeholder={t('passwordMin', { signs: 8 })}
                    autoComplete="new-password"
                    type="password"
                    required
                    className="form-control"
                  />
                  {errors.password && touched.password ? (
                    <div className="text-danger">{errors.password}</div>
                  ) : null}
                  <label htmlFor="password">{t('password')}</label>
                </div>

                <div className="form-floating mb-3">
                  <Field
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder={t('equalRequire')}
                    autoComplete="new-password"
                    type="password"
                    required
                    className="form-control"
                  />
                  {errors.confirmPassword && touched.confirmPassword ? (
                    <div className="text-danger">{errors.confirmPassword}</div>
                  ) : null}
                  <label htmlFor="confirmPassword">
                    {t('confirmPassword')}
                  </label>
                </div>

                {errors._error && <ErrorBlock errorMessage={errors._error} />}

                <button
                  type="submit"
                  className="w-100 mt-3 mb-3 btn btn-primary"
                  disabled={isSubmitting}
                >
                  {t('signUpButton')}
                </button>
              </Form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default SignUpPage;
