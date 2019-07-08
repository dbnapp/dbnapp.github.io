import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LogoContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 96px;
  background: ${({ theme }) => `linear-gradient(${theme.accentPrimary}, ${theme.fg}, ${theme.accentTertiary})`};
  color: ${({ theme }) => theme.bg};
  -webkit-background-clip: text;
  -webkit-text-stroke: 4px transparent;

  ${({ aside }) => aside
    && `
    top: 10px;
    left: 10px;
    transform: translate(0, 0);
    font-size: 24px;
    -webkit-text-stroke: 3px transparent;
    opacity: 0.3;
    transition: opacity 500ms;

    :hover {
      opacity: 1;
    }
  `}
`;

const LogoPart = styled.div``;

const Logo = props => (
  <Link to="/">
    <LogoContainer id="logo" {...props}>
      <LogoPart>Daryl</LogoPart>
      <LogoPart>Brendt</LogoPart>
      <LogoPart>Napp</LogoPart>
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
