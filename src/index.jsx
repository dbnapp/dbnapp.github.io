import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { reducer } from './store/reducer';
import styled from 'styled-components';
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

const App = ({ match: { params } }) => {
  return (
    <AppContainer>
      <BigLogo shrink={params.filter !== undefined} />
      <Navigation />
    </AppContainer>
  );
};

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/:filter?" component={App} />
    </Router>
  </Provider>,
  document.getElementById('app')
);
