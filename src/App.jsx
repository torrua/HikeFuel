import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.js';

import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';
import NotFoundPage from './components/NotFoundPage';

const App = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="App">
        <div className="m-3 fs-1 fst-italic">{t('pageInfo')}</div>
      </div>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
