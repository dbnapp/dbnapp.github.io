import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import BigLogo from './components/BigLogo';
import Navigation from './components/Navigation';
import AboutPage from './components/AboutPage';
import HistoryPage from './components/HistoryPage';
import ContactPage from './components/ContactPage';

const mainTheme = {
  bg: '#00072d',
  bgTransparent: '#00072db3',
  fg: '#e8eef2',
  accentPrimary: '#ed0da9',
  accentSecondary: '#8226af',
  accentTertiary: '#acfcd9',
};

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

const Overcast = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.bgTransparent};
`;

const MainContainer = styled.main`
  position: relative;
  padding: 20em 0;
`;

const App = ({ match: { params } }) => (
  <AppContainer>
    <BigLogo aside={params.filter !== undefined} />

    <Navigation />

    {params.filter !== undefined && <Overcast />}

    {params.filter !== undefined && (
      <Scrollable>
        <MainContainer>
          {params.filter === 'about' && <AboutPage />}
          {params.filter === 'history' && <HistoryPage />}
          {params.filter === 'contact' && <ContactPage />}
        </MainContainer>
      </Scrollable>
    )}
  </AppContainer>
);

App.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};

ReactDOM.render(
  <Router>
    <ThemeProvider theme={mainTheme}>
      <Route path="/:filter?" component={App} />
    </ThemeProvider>
  </Router>,
  document.getElementById('app'),
);
