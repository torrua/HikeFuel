import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Button, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
  const { t, i18n } = useTranslation('translation', { keyPrefix: 'navigation' });

  const setEng = (event) => {
    event.preventDefault();
    return i18n.changeLanguage('en');
  };

  const setRu = (event) => {
    event.preventDefault();
    return i18n.changeLanguage('ru');
  };

  // "ms-md-auto" - positioned on the right for medium-width and larger, 

    return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand>
            HikeFuel
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-md-auto">
            <Nav.Link as={Link} to="/">{t('toMain')}</Nav.Link>
            <Nav.Link as={Link} to="/login">{t('login')}</Nav.Link>
            <Nav.Link as={Link} to="/signup">{t('signup')}</Nav.Link>
          </Nav>
          <Nav className="gap-1 ms-md-auto">
          <Button className="btn-primary" onClick={setEng} active={i18n.language === 'en' ? true : false}>{t('buttonENG')}</ Button>
          <Button className="btn-primary" onClick={setRu} active={i18n.language === 'ru' ? true : false}>{t('buttonRU')}</ Button>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
