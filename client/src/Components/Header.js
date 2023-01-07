import React from 'react';
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from './Nav';

const Header = () => {
  return (
    <MainHeader className='flex justify-between items-center w-full'>
    <NavLink to="/">
        <div className='hero-section-logo flex justify-center items-center'>
        <img src="./images/logo.png" alt="E-Talk logo"  className='logo'/>
        </div>
    </NavLink>
    <Nav/>
    </MainHeader>
  )
}

const MainHeader = styled.header`
  padding: 0 3.2rem;
  position: relative;
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.bg.white};
  position: relative;
  .hero-section-logo{
    width: 100%
  }
  .logo {
    height: 4rem;
  }
 
`;

export default Header