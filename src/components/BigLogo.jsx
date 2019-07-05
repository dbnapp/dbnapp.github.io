import React, { useEffect } from 'react';
import styled from 'styled-components';
import anime from 'animejs';

const BigLogoContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 96px;
  background: linear-gradient(#ed0da9, #e8eef2, #acfcd9);
  color: #00072d;
  -webkit-background-clip: text;
  -webkit-text-stroke: 4px transparent;
`;

const BigLogoPart = styled.div``;

const BigLogo = props => {
  useEffect(() => {
    anime({
      targets: '.logo div',
    });
  }, []);

  return (
    <BigLogoContainer className="logo">
      <BigLogoPart>Daryl</BigLogoPart>
      <BigLogoPart>Brendt</BigLogoPart>
      <BigLogoPart>Napp</BigLogoPart>
    </BigLogoContainer>
  );
};

BigLogo.propTypes = {};

export default BigLogo;
