import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
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
        <TransitionGroup appear>
          {params.filter === 'about' && (
            <CSSTransition timeout={{ enter: 500, exit: 1000 }} unmountOnExit>
              <AboutPage />
            </CSSTransition>
          )}

          {params.filter === 'history' && (
            <CSSTransition timeout={{ enter: 500, exit: 1000 }} unmountOnExit>
              <HistoryPage />
            </CSSTransition>
          )}

          {params.filter === 'contact' && (
            <CSSTransition timeout={{ enter: 500, exit: 1000 }} unmountOnExit>
              <ContactPage />
            </CSSTransition>
          )}
        </TransitionGroup>
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