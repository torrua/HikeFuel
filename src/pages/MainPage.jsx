import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'mainPage' });

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center mt-5 mb-5">
          <div className="col-12 mb-3 h2 text-center text-primary">
            {t('pageInfo')}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
