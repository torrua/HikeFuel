const mainPage = {
  pageInfo: 'Hike Fuel в работе',
};

const userPage = {
  pageInfo: 'Страница в работе',
};

const signUpPage = {
  header: 'Создать аккаунт',
  userName: 'Имя пользователя',
  userNameRequired: 'Пожалуйста, укажите имя пользователя',
  userNameMin: 'От 3-х до 20-и символов',
  password: 'Пароль',
  passwordRequired: 'Пожалуйста, укажите пароль',
  passwordMin: 'Не менее {{signs}} символов',
  confirmPassword: 'Подтвердите пароль',
  confirmPasswordError: 'Пожалуйста, подтвердите пароль',
  equalRequired: 'Пароли должны совпадать',
  signUpButton: 'Создать',
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
  signUpLink: 'Создать',
};

const notFoundPage = {
  errorMessage: 'Страница не найдена',
  errorNumber: '(ошибка 404)',
  advice: `Но вы можете перейти${' '}`,
  adviceLink: 'на главную страницу',
};

const navigation = {
  brand: 'HikeFuel',
  toMain: 'Главная',
  login: 'Войти',
  logout: 'Выйти',
  signup: 'Создать',
  buttonENG: 'EN',
  buttonRU: 'RU',
};

const ru = {
  translation: {
    mainPage,
    userPage,
    signUpPage,
    loginPage,
    notFoundPage,
    navigation,
  },
};

export default ru;