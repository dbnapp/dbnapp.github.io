import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
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

  background: #00072d;
  color: white;
  font-family: sans-serif;
`;

const App = () => {
  return (
    <AppContainer>
      <BigLogo />
      <Navigation />
    </AppContainer>
  );
};

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
