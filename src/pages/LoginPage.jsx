// import { useContext } from 'react';
import { useRef, useEffect } from 'react';
import { Link, /* useNavigate */ } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import cn from 'classnames';

const ErrorBlock = () => {
  // const { statusState } = useContext(StatusContext);
  const { t } = useTranslation('translation', { keyPrefix: 'loginPage' });
  
  const classError = cn('mt-0', 'text-danger', {
    'd-none': /* authorization */ true,
    'd-block': /* !authorization */ false,
  });

  return <div className={classError}>{t('formLoginError')}</div>;
};

const LoginPage = () => {
  // const { setActive, accessYes, accessNo } = useContext(StatusContext);
  // const navigate = useNavigate();
  const { t } = useTranslation('translation', { keyPrefix: 'loginPage' });
  const inputRef = useRef();

  const LoginSchema = yup.object().shape({
    username: yup.string().trim().required(t('nicRequired')),
    password: yup
      .string()
      .required(t('passwordRequired'))
      .min(8, t('passwordMin', { signs: 8 })),
  });

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <Formik
        validationSchema={LoginSchema}
        initialValues={{ username: '', password: '' }}
        onSubmit={(values, { resetForm }) => {
          axios
            .post('', values)
            .then((response) => {
              // check authorization
              Object.assign(localStorage, response.data);
              // don't forget keep userID to localStorage ot to context?
             })
            // .then(() => navigate('/:userId'))
            .catch(() => {
              // 
            });
          resetForm();
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <div className="container mt-5">
            <div className="row justify-content-center align-content-center h-100">
              <h1 className="col-12 text-center text-primary">{t('header')}</h1>
              <Form className="col-12 col-md-6 mt-3">
                <div className="form-floating mb-3">
                  <Field
                    className="form-control"
                    name="username"
                    type="text"
                    placeholder={t('nic')}
                    id="username"
                    required
                    innerRef={inputRef}
                  />
                  {errors.username && touched.username ? (
                    <div className="text-danger">{errors.username}</div>
                  ) : null}
                  <label htmlFor="username">{t('nic')}</label>
                </div>

                <div className="form-floating">
                  <Field
                    name="password"
                    type="password"
                    placeholder={t('password')}
                    id="password"
                    required
                    className="form-control"
                  />
                  {errors.password && touched.password ? (
                    <div className="text-danger">{errors.password}</div>
                  ) : null}
                  <label htmlFor="password">{t('password')}</label>
                </div>
                <ErrorBlock />

                <button
                  type="submit"
                  className="w-100 mt-3 mb-3 btn btn-primary"
                  disabled={isSubmitting}
                >
                  {t('loginButton')}
                </button>
              </Form>

              <div className="row justify-content-center mb-3">
                <span className="col-auto">{t('noAccount')}</span>
                <Link to="/signup" className="col-auto">
                  <span>{t('signUpLink')}</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default LoginPage;