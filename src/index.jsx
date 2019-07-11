import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './components/App';

const mainTheme = {
  bg: '#00072d',
  bgTransparent: '#00072db3',
  fg: '#e8eef2',
  accentPrimary: '#ed0da9',
  accentSecondary: '#8226af',
  accentTertiary: '#acfcd9',
};

ReactDOM.render(
  <Router>
    <ThemeProvider theme={mainTheme}>
      <Route path="/:filter?" component={App} basename={process.env.PUBLIC_URL} />
    </ThemeProvider>
  </Router>,
  document.getElementById('app'),
);
