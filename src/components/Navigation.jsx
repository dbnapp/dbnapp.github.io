import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

const NavMenu = styled.nav`
  font-family: serif;
  position: absolute;
  display: flex;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);

  a {
    font-size: 24px;
    width: 3.5em;
    height: 3.5em;
    line-height: 3.5em;
    text-align: center;
    text-decoration: none;
    border: 1px solid ${({ theme }) => theme.fg};
    border-bottom-width: 0;
    color: ${({ theme }) => theme.accentTertiary};
    transition: all 500ms;

    :nth-of-type(1) {
      transition-delay: 150ms;
    }
    :nth-of-type(2) {
      transition-delay: 300ms;
    }
    :nth-of-type(3) {
      transition-delay: 450ms;
    }
  }

  &.appear a {
    opacity: 0;
    transform: translateY(100%);
  }
  &.appear-done a {
    opacity: 1;
    transform: translateY(0%);
  }

  &.minimized a {
    opacity: 0.3;
    transform: translateY(60%);
    line-height: inherit;

    :hover {
      opacity: 1;
    }
  }
  &.minimized.appear a {
    opacity: 0;
    transform: translateY(100%);
    line-height: inherit;

    :hover {
      opacity: 1;
    }
  }
  &.minimized.appear-done a {
    opacity: 0.3;
    transform: translateY(60%);
    line-height: inherit;

    :hover {
      opacity: 1;
    }
  }
`;

const Navigation = ({ minimized }) => (
  <CSSTransition appear in timeout={0}>
    <NavMenu id="nav" className={minimized ? 'minimized' : ''}>
      <Link to="/about">About</Link>
      <Link to="/history">History</Link>
      <Link to="/contact">Contact</Link>
    </NavMenu>
  </CSSTransition>
);

Navigation.propTypes = {
  minimized: PropTypes.bool,
};

Navigation.defaultProps = {
  minimized: false,
};

export default Navigation;
