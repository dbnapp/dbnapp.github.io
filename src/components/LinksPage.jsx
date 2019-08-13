import React from 'react';
import styled, { keyframes } from 'styled-components';

const LinksSection = styled.section`
  position: absolute;
  opacity: 0;
  padding: 0 10% 20em;
  transition: all 1s;

  &.appear {
    opacity: 0;
    transform: translateY(10%);
  }

  &.enter {
    opacity: 0;
    transform: translateY(10%);
  }

  &.enter-done {
    opacity: 1;
    transform: translateY(0%);
  }

  &.exit {
    opacity: 0;
    transform: translateY(10%);
  }

  &.exit-done {
    opacity: 0;
    transform: translateY(10%);
  }
`;

const freakOut = ({ theme }) => keyframes`
  0%{
    color: ${theme.accentPrimary}
  }
  25%{
    color: ${theme.fg}
  }
  50%{
    color: ${theme.accentSecondary}
  }
  75%{
    color: ${theme.accentTertiary}
  }
  100%{
    color: ${theme.accentPrimary}
  }
`;

const SuperLink = styled.a`
  font-size: 24px;
  animation: ${freakOut} 1s ease infinite;
  color: ${({ theme }) => theme.accentTertiary};
`;

const LinksPage = () => (
  <LinksSection>
    <h1>Here&apos;s my email if you want to talk</h1>
    <p>
      <SuperLink href="mailto:dbnapp@gmail.com">dbnapp@gmail.com</SuperLink>
    </p>
    <h2> or see what else I&apos;m up to</h2>
    <p>
      <SuperLink href="http://github.com/dbnapp/" target="_blank">
        github.com/dbnapp
      </SuperLink>
    </p>
    <p>
      <SuperLink href="https://linkedin.com/in/darylnapp" target="_blank">
        linkedin.com/in/darylnapp
      </SuperLink>
    </p>
  </LinksSection>
);

LinksPage.propTypes = {};

LinksPage.defaultProps = {};

export default LinksPage;
