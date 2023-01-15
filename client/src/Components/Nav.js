import React, { useState } from 'react';
import { CgClose, CgMenu } from 'react-icons/cg';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../Styles/Button';
import Toggler from './Toggler';

function Nav() {
    const [menuIcon, setMenuIcon] = useState();
  return (
    <Navbar>
    <div className={menuIcon ? "navbar active" : "navbar"}>
      <ul className="navbar-lists flex items-center">
        <li>
          <NavLink
            to="/"
            className="navbar-link "
            onClick={() => setMenuIcon(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/features"
            className="navbar-link "
            onClick={() => setMenuIcon(false)}>
           Features
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/team"
            className="navbar-link "
            onClick={() => setMenuIcon(false)}>
            Team
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="navbar-link "
            onClick={() => setMenuIcon(false)}>
            Contact
          </NavLink>
        </li>
        <li>
            <NavLink    
            to="/auth"
            className="navbar-link">
                <Button className='button'>Login</Button>
            </NavLink>
        </li>
        <li>
            <NavLink
            to="/auth/signup"
            className="navbar-link"
            >
                <Button className='button'>signup</Button>
            </NavLink>
        </li>
        <li className="navbar-link">
          <Toggler/>
        </li>
      </ul>

      {/* two button for open and close of menu */}
      <div className="mobile-navbar-btn">
        <CgMenu
          name="menu-outline"
          className="mobile-nav-icon"
          onClick={() => setMenuIcon(true)}
        />
        <CgClose
          name="close-outline"
          className="mobile-nav-icon close-outline"
          onClick={() => setMenuIcon(false)}
        />
      </div>
    </div>
  </Navbar>
  )
}


  const Navbar = styled.nav`
    .navbar-lists {
      gap: 2.8rem;
      .navbar-link {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 2rem;
        color: ${({ theme }) => theme.colors.text.secondary};
        border-radius: 8px;
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 500;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.heading};
          transition: color 0.3s linear;
        }
        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.cyan};
        }

        .button{
            font-size: 1.1rem;
            width: 100px;
            border-radius: 20px;
            color: ${({ theme }) => theme.colors.heading};
            border: solid 2px  ${({ theme }) => theme.colors.heading};

            &:hover{
                color: ${({ theme }) => theme.colors.cyan};
            border: solid 2px  ${({ theme }) => theme.colors.cyan};
            }
        }
      }
    }
    .mobile-navbar-btn {
      display: none;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }
    .mobile-nav-icon[name="close-outline"] {
      display: none;
    }
    .close-outline {
      display: none;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 9999;
        border: ${({ theme }) => theme.colors.heading};
        .mobile-nav-icon {
          font-size: 4.2rem;
          color: ${({ theme }) => theme.colors.heading};
        }
      }
      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        color: ${({ theme }) => theme.colors.heading};
        z-index: 9999;
      }
      .active .close-outline {
        display: inline-block;
      }
      .navbar-lists {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        /* transform-origin: top; */
        transition: all 0.5s linear;

        .button{
         display: none;
        }
      }
      .active .navbar-lists {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        transform-origin: right;
        transition: all 0.5s linear;
        .navbar-link {
          font-size: 4.2rem;
        }
      }
    }
  `;

export default Nav