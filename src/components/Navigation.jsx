import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const slideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`;

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
    transform: translateY(100%);
    line-height: 3.5em;
    text-align: center;
    text-decoration: none;
    border: 1px solid ${({ theme }) => theme.fg};
    border-bottom-width: 0;
    color: ${({ theme }) => theme.accentTertiary};

    animation: 1s ${slideUp} ease forwards;

    :nth-of-type(1) {
      animation-delay: 150ms;
    }
    :nth-of-type(2) {
      animation-delay: 300ms;
    }
    :nth-of-type(3) {
      animation-delay: 450ms;
    }
  }
`;

const Navigation = () => (
  <NavMenu id="nav">
    <Link to="/about">About</Link>
    <Link to="/history">History</Link>
    <Link to="/contact">Contact</Link>
  </NavMenu>
);

Navigation.propTypes = {};

export default Navigation;
