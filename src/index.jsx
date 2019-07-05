import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import BigLogo from './components/BigLogo';

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
    </AppContainer>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
