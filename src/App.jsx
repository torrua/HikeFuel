import { useTranslation } from 'react-i18next';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

const App = () => {
  const { t } = useTranslation();
  return (
    <div className="App">
      <div className="m-3 fs-1 fst-italic">{t('pageInfo')}</div>
    </div>
  );
}

export default App;
