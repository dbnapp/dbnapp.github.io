import React from 'react';
import styled, { keyframes } from 'styled-components';

const ContactSection = styled.section`
  opacity: 0;
  padding: 0 10%;
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
  font-size: 32px;
  animation: ${freakOut} 1s ease infinite;
  color: ${({ theme }) => theme.accentTertiary};
`;

const ContactPage = () => (
  <ContactSection>
    <h1>If you&apos;d like to reach me you can send me an email at</h1>
    <p>
      <SuperLink href="mailto:dbnapp@gmail.com">dbnapp@gmail.com</SuperLink>
    </p>
  </ContactSection>
);

ContactPage.propTypes = {};

ContactPage.defaultProps = {};

export default ContactPage;
