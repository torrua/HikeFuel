// import { useContext } from 'react';
import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import cn from 'classnames';

import { Formik, Form } from 'formik';
import * as yup from 'yup';

import { requests, registerPath } from '../api/requests.js';
import FormField from './Components/FormField.jsx';

// Create a <FormField /> component to increase code reusability - done
// Add an onBlur event to remove messages after losing focus - done
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
              // send data to state (to redux tolkit)
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
        {({ errors, isSubmitting }) => (
          <div className="container mt-5">
            <div className="row justify-content-center align-content-center h-100">
              <h1 className="col-12 text-center text-primary">{t('header')}</h1>
              <Form className="col-12 col-md-6 mt-3">
                <FormField
                  id="username"
                  name="username"
                  type="text"
                  label={t('userName')}
                  innerRef={inputRef}
                />

                <FormField
                  id="first_name"
                  name="first_name"
                  type="text"
                  label={t('firstName')}
                />

                <FormField
                  id="last_name"
                  name="last_name"
                  type="text"
                  label={t('lastName')}
                />

                <FormField
                  id="email"
                  name="email"
                  type="email"
                  label={t('email')}
                />

                <FormField
                  id="password"
                  name="password"
                  type="password"
                  label={t('password')}
                />

                <FormField
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  label={t('confirmPassword')}
                />

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
