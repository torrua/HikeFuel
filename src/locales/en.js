const signUpPage = {
  header: 'Sign up',
  userName: 'Username',
  userNameRequired: 'Specify your username, please',
  userNameMin: 'From 3 to 20 characters',
  password: 'Password',
  passwordRequired: 'Specify your password, please',
  passwordMin: 'Password must consist of at least {{signs}} characters',
  confirmPassword: 'Confirm password',
  confirmPasswordError: 'Confirm your password, please',
  equalRequired: 'Passwords must match',
  signUpButton: 'Sign up',
  formSignUpError: 'Such user already exists',
};

const loginPage = {
  header: 'Log in',
  nic: 'Your nickname',
  nicRequired: 'Specify your nickname, please',
  password: 'Password',
  passwordRequired: 'Specify your password, please',
  passwordMin: 'Password must consist of at least {{signs}} characters',
  formLoginError: 'Incorrect username or password',
  loginButton: 'Log in',
  noAccount: "Don't have an account yet?",
  signUpLink: 'Sign up',
};

const notFoundPage = {
  errorMessage: 'Sorry. Page not found',
  errorNumber: '(Error 404)',
  advice: `But you can visit${' '}`,
  adviceLink: 'main page',
};

const navigation = {
  buttonENG: 'ENG',
  buttonRU: 'RU',
  toMain: 'Main',
  login: 'Log in',
  signup: 'Sign up',
};

const footer = {
  buttonENG: 'ENG',
  buttonRU: 'RU',
};

const en = {
  translation: {
    pageInfo: 'Hike Fuel is on process',
    navigation,
    footer,
    signUpPage,
    loginPage,
    notFoundPage,
  },
};

export default en;