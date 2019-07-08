import React, { useEffect } from 'react';
import styled from 'styled-components';
import anime from 'animejs';
import { Link } from 'react-router-dom';

const NavMenu = styled.nav`
  font-family: serif;
  position: absolute;
  display: flex;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);

  a {
    font-size: 24px;
    width: 3.5em;
    height: 3.5em;
    transform: translateY(100%);
    border: 1px solid white;
    text-align: center;
    text-decoration: none;
    color: white;
  }
`;

const Navigation = (props) => {
  useEffect(() => {
    anime({
      targets: '#nav a',
      translateY: ['100%', '0%'],
      easing: 'easeOutQuint',
      delay: anime.stagger(150),
    });
  }, []);
  return (
    <NavMenu id="nav">
      <Link to="/info">Info</Link>
      <Link to="/history">History</Link>
      <Link to="/contact">Contact</Link>
    </NavMenu>
  );
};

Navigation.propTypes = {};

export default Navigation;
