import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const flyOut = keyframes`
  0%{
    top: 50%;
    left: 50%;
  }
  30%{
    top: 50%;
    left: 50%;
  }
  50% {
    top: -40%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 96px;
    opacity: 1;
  }
  75%{
    left: 10px;
    font-size: 24px;
  }
  100% {
    top: 10px;
    left: 10px;
    transform: translate(0, 0);
    font-size: 24px;
    -webkit-text-stroke: 3px transparent;
    opacity: 0.3;
  }
`;

const flyIn = keyframes`
  10%{
    left: 10px;
  }
  30%{
    top: -30%;
    left: 50%;
    opacity: 1;
  }
  60%{
    top: 50%;
    left: 50%;
  }
  100% {
    top: 50%;
    left: 50%;
  }
`;

const LogoContainer = styled.div`
  position: absolute;
  top: -40%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 500ms;
  animation: ${flyIn} 1.5s ease forwards;

  font-size: 96px;
  background: ${({ theme }) => `linear-gradient(${theme.accentPrimary}, ${theme.fg}, ${theme.accentTertiary})`};
  color: ${({ theme }) => theme.bg};
  -webkit-background-clip: text;
  -webkit-text-stroke: 4px transparent;

  &.aside {
    animation: ${flyOut} 2.5s ease forwards;

    :hover {
      opacity: 1;
    }
  }
`;

const Logo = ({ aside }) => (
  <Link to="/">
    <LogoContainer id="logo" className={aside ? 'aside' : ''}>
      <div>Daryl</div>
      <div>Brendt</div>
      <div>Napp</div>
    </LogoContainer>
  </Link>
);

Logo.propTypes = {
  aside: PropTypes.bool,
};

Logo.defaultProps = {
  aside: false,
};

export default Logo;
