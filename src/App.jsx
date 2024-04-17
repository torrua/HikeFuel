import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { useTranslation } from 'react-i18next';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.js';

import MainPage from './components/MainPage.jsx'
import SignUpPage from './components/SignUpPage.jsx';
import LoginPage from './components/LoginPage.jsx';
import NotFoundPage from './components/NotFoundPage.jsx';
import Navigation from './components/Navigation.jsx';
import AuthProvider from './context/AuthProvider.jsx';
import RequireAuth from './hooks/requireAuth.jsx';

const App = () => {
  return (
    <>
      <AuthProvider>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <RequireAuth>
              <Route path="/:userId" element={<></>} />
            </RequireAuth>
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
