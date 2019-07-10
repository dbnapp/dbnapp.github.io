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
  }
  60%{
    left: 10px;
    transform: translate(0, 0);
  }
  100% {
    top: 10px;
    left: 10px;
    transform: translate(0, 0);
  }
`;
const shrinkSVG = keyframes`
  0%{
    height: 300px;
  }
  50%{
    height: 300px;
  }
  60%{
    height: 100px;
    opacity: 1;
  }
  100%{
    height: 100px;
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
  animation: ${flyIn} 1.5s ease forwards;

  svg {
    height: 300px;
  }

  #gradient {
    stop:nth-child(1) {
      stop-color: ${({ theme }) => theme.accentPrimary};
    }
    stop:nth-child(2) {
      stop-color: ${({ theme }) => theme.fg};
    }
    stop:nth-child(3) {
      stop-color: ${({ theme }) => theme.accentTertiary};
    }
  }

  text {
    transition: opacity 500ms;
    fill: transparent;
  }

  tspan {
    font-size: 96px;
    stroke-width: 2px;
    stroke: url(#gradient);
  }

  &.aside {
    animation: ${flyOut} 2.5s ease forwards;

    svg {
      animation: ${shrinkSVG} 2.5s ease forwards;
    }
  }
`;

const Logo = ({ aside }) => (
  <Link to="/">
    <LogoContainer id="logo" className={aside ? 'aside' : ''}>
      <svg viewBox="-10 0 300 300">
        <defs>
          <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="100%">
            <stop offset="0%" />
            <stop offset="50%" />
            <stop offset="100%" />
          </linearGradient>
        </defs>
        <text>
          <tspan x="0" y="80">
            Daryl
          </tspan>
          <tspan x="0" dy="80">
            Brendt
          </tspan>
          <tspan x="0" dy="80">
            Napp
          </tspan>
        </text>
      </svg>
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
