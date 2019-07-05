import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BigLogoContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 6rem;
  background: linear-gradient(#ed0da9, #e8eef2, #acfcd9);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-stroke-color: blue;
`;

const BigLogoPart = styled.div``;

const BigLogo = props => {
  return (
    <BigLogoContainer>
      <BigLogoPart>Daryl</BigLogoPart>
      <BigLogoPart>Brendt</BigLogoPart>
      <BigLogoPart>Napp</BigLogoPart>
    </BigLogoContainer>
  );
};

BigLogo.propTypes = {};

export default BigLogo;
