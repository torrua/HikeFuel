import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { useTranslation } from 'react-i18next';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.js';

import MainPage from './pages/MainPage.jsx'
import UserPage from './pages/UserPage.jsx';
import SignUpPage from './pages/SignUpPage/SignUpPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import Navigation from './pages/Navigation.jsx';
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
            <Route 
              path="/private" 
              element={(
                <RequireAuth>
                  <UserPage />
                </RequireAuth>
              )} 
            />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
