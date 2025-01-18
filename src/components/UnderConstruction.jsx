import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0.25rem 0;
  background-color: ${({ theme }) => theme.accentPrimary};
  text-align: center;
`;

const UnderConstruction = () => (
  <Container>
    <span role="img" aria-label="warning">⚠️</span>
    {' This site is under construction, please check back soon! '}
    <span role="img" aria-label="construction worker">👷</span>
    <span role="img" aria-label="tools">🛠️</span>
  </Container>
);

export default UnderConstruction;
