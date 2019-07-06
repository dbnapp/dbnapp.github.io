import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NavMenu = styled.nav`
  position: absolute;
  display: flex;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
`;

const NavItem = styled.a`
  width: 5em;
  height: 5em;
  border: 1px solid white;
  text-align: center;
`;

const Navigation = props => {
  return (
    <NavMenu>
      <NavItem>About</NavItem>
      <NavItem>Events</NavItem>
      <NavItem>Contact</NavItem>
    </NavMenu>
  );
};

Navigation.propTypes = {};

export default Navigation;
