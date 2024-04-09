import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import SignUpPage from './components/SignUpPage';

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
        </Routes>
      </Router>
    </>
  );
}

export default App;
