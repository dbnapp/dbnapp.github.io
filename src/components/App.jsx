import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Logo from './Logo';
import Navigation from './Navigation';
import AboutPage from './AboutPage';
import HistoryPage from './HistoryPage';
import LinksPage from './LinksPage';

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

  a {
    text-decoration: none;
  }
`;

const Scrollable = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const MainContainer = styled.main`
  position: relative;
  padding: 20em 0;
`;

const OpacityGradient = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: ${({ theme }) => `linear-gradient(transparent 70%, ${theme.bg})`};
`;

const App = ({ match: { params } }) => (
  <AppContainer>
    <Scrollable id="scroll-container">
      <MainContainer>
        <TransitionGroup appear component={null}>
          {params.filter === 'about' && (
            <CSSTransition timeout={{ enter: 1000, exit: 500 }} unmountOnExit>
              <AboutPage />
            </CSSTransition>
          )}

          {params.filter === 'history' && (
            <CSSTransition timeout={{ enter: 1000, exit: 500 }} unmountOnExit>
              <HistoryPage />
            </CSSTransition>
          )}

          {params.filter === 'links' && (
            <CSSTransition timeout={{ enter: 1000, exit: 500 }} unmountOnExit>
              <LinksPage />
            </CSSTransition>
          )}
        </TransitionGroup>
      </MainContainer>
    </Scrollable>
    <OpacityGradient />
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
