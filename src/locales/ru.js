const mainPage = {
  pageInfo: 'HikeFuel в работе',
};

const userPage = {
  pageInfo: 'Страница в работе',
};

const signUpPage = {
  header: 'Создать аккаунт',
  userName: 'Имя пользователя (никнейм)',
  userNameRequired: 'Пожалуйста, укажите имя пользователя (никнейм)',
  userNameMin: 'Имя должно содержать не менее 3-х символов',
  firstName: 'Ваше имя',
  firstNameRequired: 'Пожалуйста, укажите имя',
  lastName: 'Ваша фамилия',
  lastNameRequired: 'Пожалуйста, укажите фамилию',
  email: 'Электронная почта',
  emailInvalid: 'Некорректный e-mail',
  emailRequired: 'Пожалуйста, укажите электронную почту',
  password: 'Пароль',
  passwordRequired: 'Пожалуйста, укажите пароль',
  passwordMin: 'Не менее {{signs}} символов',
  confirmPassword: 'Подтвердите пароль',
  confirmPasswordError: 'Пожалуйста, подтвердите пароль',
  equalRequired: 'Пароли должны совпадать',
  signUpButton: 'Создать',
  userExistsError: 'Такой пользователь уже существует',
  unexpectedError: 'Ошибка. Не удалось передать данные',
};

const loginPage = {
  header: 'Войти',
  nic: 'Имя пользователя (никнейм)',
  nicRequired: 'Пожалуйста, укажите имя пользователя (никнейм)',
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