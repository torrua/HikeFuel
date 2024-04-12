import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { useTranslation } from 'react-i18next';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.js';

import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';
import NotFoundPage from './components/NotFoundPage';
import Navigation from './components/Navigation';
import FooterPage from './components/Footer';

const App = () => {
  // const { t } = useTranslation();
  
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <FooterPage />
      </Router>
    </>
  );
}

export default App;
