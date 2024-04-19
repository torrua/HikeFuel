import { useTranslation } from 'react-i18next';

const UserPage = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'userPage' });

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

export default UserPage;

// i should understand how to create dinamic Url for this page
// add a button 'log out'
