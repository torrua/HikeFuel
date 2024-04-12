import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'navigation' });

    return (
    <>
      <Navbar className="justify-content-center" bg="light" expand="lg">
        <Nav>
          <Nav.Link as={Link} to="*">{t('toMain')}</Nav.Link>
          <Nav.Link as={Link} to="/login">{t('login')}</Nav.Link>
          <Nav.Link as={Link} to="/signup">{t('signup')}</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default Navigation;
