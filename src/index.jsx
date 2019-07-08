import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import BigLogo from './components/BigLogo';
import Navigation from './components/Navigation';

const AppContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;

  background: #00072d;
  color: white;
  font-family: sans-serif;
`;

const theme = {
  bg: '#00072d',
  fg: '#e8eef2',
  accentPrimary: '#ed0da9',
  accentSecondary: '#8226af',
  accentTertiary: '#acfcd9',
};

const App = ({ match: { params } }) => (
  <AppContainer>
    <BigLogo aside={params.filter !== undefined} />
    <Navigation />
  </AppContainer>
);

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <Route path="/:filter?" component={App} />
    </ThemeProvider>
  </Router>,
  document.getElementById('app'),
);
