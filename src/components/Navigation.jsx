import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

const NavItem = styled.li`
  font-size: 24px;
  width: 4em;
  height: 3.5em;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.fg};
  border-bottom-width: 0;
  transition: all 500ms;
  pointer-events: auto;

  a {
    display: block;
    height: 100%;
    width: 100%;
    color: ${({ theme }) => theme.accentTertiary};

    span {
      position: absolute;
      transition: all 1s;
      transform: translate(-50%, 100%);
    }
  }
`;

const NavMenu = styled.nav`
  font-family: serif;
  position: absolute;
  display: flex;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  opacity: 1;
  pointer-events: none;

  ul {
    list-style: none;
    display: inherit;
    margin: 0;
    padding: 0;
  }

  ${NavItem} {
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

  &.appear ${NavItem} {
    opacity: 0;
    transform: translateY(100%);
  }

  &.minimized ${NavItem} {
    opacity: 0.3;
    transform: translateY(60%);

    :hover {
      opacity: 1;
    }

    a span {
      transform: translate(-50%, 0%);
    }
  }

  &.minimized.appear ${NavItem} {
    opacity: 0;
    transform: translateY(100%);

    :hover {
      opacity: 1;
    }

    a span {
      transform: translate(-50%, 0%);
    }
  }
`;

const Navigation = ({ minimized }) => (
  <CSSTransition appear in timeout={0}>
    <NavMenu id="nav" className={minimized ? 'minimized' : ''}>
      <ul>
        <NavItem>
          <Link to="/about">
            <span>About</span>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/history">
            <span>History</span>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/links">
            <span>Links</span>
          </Link>
        </NavItem>
      </ul>
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
