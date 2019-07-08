import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BigLogoContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 96px;
  background: ${({ theme }) => `linear-gradient(${theme.accentPrimary}, ${theme.fg}, ${theme.accentTertiary})`};
  color: #00072d;
  -webkit-background-clip: text;
  -webkit-text-stroke: 4px transparent;

  ${({ aside }) => aside
    && `
    top: 0;
    left: 0;
    transform: translate(0, 0);
    font-size: 24px;
    -webkit-text-stroke: 3px transparent;
  `}
`;

const BigLogoPart = styled.div``;

const BigLogo = props => (
  <Link to="/">
    <BigLogoContainer id="logo" {...props}>
      <BigLogoPart>Daryl</BigLogoPart>
      <BigLogoPart>Brendt</BigLogoPart>
      <BigLogoPart>Napp</BigLogoPart>
    </BigLogoContainer>
  </Link>
);

BigLogo.propTypes = {
  aside: PropTypes.bool,
};

BigLogo.defaultProps = {
  aside: false,
};

export default BigLogo;
