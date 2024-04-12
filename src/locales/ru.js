const signUpPage = {
  header: 'Регистрация',
  userName: 'Имя пользователя',
  userNameRequired: 'Пожалуйста, укажите имя пользователя',
  userNameMin: 'От 3-х до 20-и символов',
  password: 'Пароль',
  passwordRequired: 'Пожалуйста, укажите пароль',
  passwordMin: 'Не менее {{signs}} символов',
  confirmPassword: 'Подтвердите пароль',
  confirmPasswordError: 'Пожалуйста, подтвердите пароль',
  equalRequired: 'Пароли должны совпадать',
  signUpButton: 'Зарегистрироваться',
  formSignUpError: 'Такой пользователь уже существует',
};

const loginPage = {
  header: 'Войти',
  nic: 'Ваш ник',
  nicRequired: 'Пожалуйста, укажите ник',
  password: 'Пароль',
  passwordRequired: 'Пожалуйста, укажите пароль',
  passwordMin: 'Не менее {{signs}} символов',
  formLoginError: 'Неверные имя пользователя или пароль',
  loginButton: 'Войти',
  noAccount: 'Нет аккаунта?',
  signUpLink: 'Регистрация',
};

const notFoundPage = {
  errorMessage: 'Страница не найдена',
  errorNumber: '(ошибка 404)',
  advice: `Но вы можете перейти${' '}`,
  adviceLink: 'на главную страницу',
};

const navigation = {
  toMain: 'На главную',
  login: 'Войти',
  signup: 'Зарегистрироваться',
};

const footer = {
  buttonENG: 'ENG',
  buttonRU: 'RU',
};

const ru = {
  translation: {
    pageInfo: 'Hike Fuel в работе',
    navigation,
    footer,
    signUpPage,
    loginPage,
    notFoundPage,
  },
};

export default ru;