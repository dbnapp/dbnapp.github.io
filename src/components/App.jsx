import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Logo from './Logo';
import Navigation from './Navigation';
import AboutPage from './AboutPage';
import HistoryPage from './HistoryPage';
import ContactPage from './ContactPage';

const AppContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;

  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.fg};
  font-family: sans-serif;
`;

const Scrollable = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const MainContainer = styled.main`
  position: relative;
  padding: 20em 0;
`;

const App = ({ match: { params } }) => (
  <AppContainer>
    <Scrollable>
      <MainContainer>
        <AboutPage visible={params.filter === 'about'} />
        <HistoryPage visible={params.filter === 'history'} />
        <ContactPage visible={params.filter === 'contact'} />
      </MainContainer>
    </Scrollable>

    <Logo aside={params.filter !== undefined} />
    <Navigation minimized={params.filter !== undefined} />
  </AppContainer>
);

App.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};

export default App;
