import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
// import { useTranslation } from 'react-i18next';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.js';

import MainPage from './pages/MainPage.jsx'
import UserPage from './pages/UserPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import Navigation from './pages/Components/Navigation.jsx';
import AuthProvider from './context/AuthProvider.jsx';
import RequireAuth from './hooks/requireAuth.jsx';
import store from './slices/index.js';

const App = () => {
  return (
    <>
      <AuthProvider>
        <Router>
          <Provider store={store}>
            <Navigation />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="*" element={<NotFoundPage />} />
              <Route 
                path="/private" 
                element={(
                  <RequireAuth>
                    <UserPage />
                  </RequireAuth>
                )} 
              />
            </Routes>
          </Provider>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
