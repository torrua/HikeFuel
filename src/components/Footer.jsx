import React from 'react';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const FooterPage = () => {
  const { t, i18n } = useTranslation('translation', { keyPrefix: 'footer' });

  const setEng = (event) => {
    event.preventDefault();
    return i18n.changeLanguage('en');
  };

  const setRu = (event) => {
    event.preventDefault();
    return i18n.changeLanguage('ru');
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 btn-group gap-2" role="group">
          <Button className="btn-primary" onClick={setEng} active={i18n.language === 'en' ? true : false}>{t('buttonENG')}</ Button>
          <Button className="btn-primary" onClick={setRu} active={i18n.language === 'ru' ? true : false}>{t('buttonRU')}</ Button>
        </div>
      </ div>
    </ div>
  );
};

export default FooterPage;