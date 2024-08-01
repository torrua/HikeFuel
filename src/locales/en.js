const mainPage = {
  pageInfo: 'Hike Fuel is on process',
};

const userPage = {
  pageInfo: 'Page is on process',
};

const signUpPage = {
  header: 'Sign up',
  userName: 'Username (Nickname)',
  userNameRequired: 'Specify your username (nickname), please',
  userNameMin: 'The name must contain at least 3 characters',
  firstName: 'Name',
  firstNameRequired: 'Specify your name, please',
  lastName: 'Last name',
  lastNameRequired: 'Specify your last name, please',
  email: 'E-mail',
  emailInvalid: 'Invalid e-mail',
  emailRequired: 'Specify your e-mail, please',
  password: 'Password',
  passwordRequired: 'Specify your password, please',
  passwordMin: 'Password must consist of at least {{signs}} characters',
  confirmPassword: 'Confirm password',
  confirmPasswordError: 'Confirm your password, please',
  equalRequired: 'Passwords must match',
  signUpButton: 'Sign up',
  userExistsError: 'Such user already exists',
  unexpectedError: 'Error. Failed to submit data',
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
  brand: 'HikeFuel',
  toMain: 'Main',
  login: 'LogIn',
  logout: 'LogOut',
  signup: 'SignUp',
  buttonENG: 'EN',
  buttonRU: 'RU',
};

const en = {
  translation: {
    mainPage,
    userPage,
    signUpPage,
    loginPage,
    notFoundPage,
    navigation,
  },
};

export default en;
