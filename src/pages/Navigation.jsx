import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Button, ButtonGroup, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import AuthContext from '../context';


// import AuthButtons from './parts/AuthButtonth';

const Navigation = () => {
  const { t, i18n } = useTranslation('translation', { keyPrefix: 'navigation' });
  const { loggedIn, logOut } = useContext(AuthContext);

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
          </Nav>
          <Nav className="gap-2 ms-md-auto">
            <ButtonGroup>
            {
              loggedIn
              ? <Button variant="outline-secondary" onClick={logOut()}>{t('logout')}</Button>
              : <Button variant="outline-secondary" as={Link} to="/login">{t('login')}</Button>
            }
            {
              !loggedIn
              ? <Button variant="outline-secondary" as={Link} to="/signup">{t('signup')}</Button>
              : null
            }
            </ButtonGroup>
            <ButtonGroup size="sm">
              <Button variant="outline-secondary" onClick={setEng} active={i18n.language === 'en' ? true : false}>{t('buttonENG')}</ Button>
              <Button variant="outline-secondary" onClick={setRu} active={i18n.language === 'ru' ? true : false}>{t('buttonRU')}</ Button>
            </ButtonGroup>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
