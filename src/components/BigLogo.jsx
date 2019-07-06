import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BigLogoContainer = styled.div`
  position: absolute;
  top: ${({ shrink }) => (shrink ? 0 : '50%')};
  left: ${({ shrink }) => (shrink ? 0 : '50%')};
  transform: translate(-50%, -50%);

  font-size: 96px;
  background: linear-gradient(#ed0da9, #e8eef2, #acfcd9);
  color: #00072d;
  -webkit-background-clip: text;
  -webkit-text-stroke: 4px transparent;
`;

const BigLogoPart = styled.div``;

const BigLogo = props => {
  return (
    <BigLogoContainer id="logo" {...props}>
      <BigLogoPart>Daryl</BigLogoPart>
      <BigLogoPart>Brendt</BigLogoPart>
      <BigLogoPart>Napp</BigLogoPart>
    </BigLogoContainer>
  );
};

BigLogo.propTypes = {
  shrink: PropTypes.bool,
};

export default BigLogo;
