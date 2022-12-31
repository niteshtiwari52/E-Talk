import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { AiOutlineSetting, AiOutlineStar } from "react-icons/ai";
import { RiContactsLine, RiMoonLine } from "react-icons/ri";
import { BsChatSquareDots } from "react-icons/bs";
import { CgClose, CgMenu } from "react-icons/cg";

const SideMenu = () => {
  const [menuIcon, setMenuIcon] = useState();
  return (
    <Wrapper>
      <div
        className={
          menuIcon
            ? "bg-white side-menu active flex justify-between"
            : "bg-white side-menu flex justify-between"
        }
      >
        <div className=" mobile-navbar overflow-y-auto">
          <div className="sideMenu-brand-logo mb-5">
            <NavLink to="/" className="logo">
              <span>
                <img src="images/logo2.png" alt="logo" />
              </span>
            </NavLink>
          </div>
          <div className="mobile-sideMenu-btn justify-center items-center">
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

        <div className="side-menu-bar overflow-y-auto">
          <div className="sideMenu-brand-box mb-5">
            <NavLink to="/" className="logo">
              <span>
                <img src="images/logo2.png" alt="logo" />
              </span>
            </NavLink>
          </div>
          <div className="side-menu-list">
            <ul className="flex flex-col justify-between gap-4">
              <li
                className="side-menu-item"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="profile"
              >
                <NavLink to="profile" className="nav-link ">
                  <CgProfile className="icon" />
                </NavLink>
              </li>
              <li
                className="side-menu-item"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Favorite"
              >
                <NavLink to="favorite" className="nav-link">
                  <AiOutlineStar className="icon" />
                </NavLink>
              </li>
              <li
                className="side-menu-item"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Chats"
              >
                <NavLink to="/" className="nav-link">
                  <BsChatSquareDots className="icon" />
                </NavLink>
              </li>
              <li
                className="side-menu-item"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="contact"
              >
                <NavLink to="contact" className="nav-link">
                  <RiContactsLine className="icon" />
                </NavLink>
              </li>
              <li
                className="side-menu-item"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="setting"
              >
                <NavLink to="setting" className="nav-link">
                  <AiOutlineSetting className="icon" />
                </NavLink>
              </li>
              <li
                className="side-menu-item"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Theme Mode"
              >
                <div to="/" className="nav-link">
                  <RiMoonLine className="icon" />
                </div>
              </li>
              <li className="side-menu-item">
                <div className="nav-link">
                  <img
                    src="https://themes.pixelstrap.com/chitchat/assets/images/avtar/2.jpg"
                    alt=""
                    className="profile-user rounded-full"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .side-menu {
    max-width: 100px;
    height: 100vh;
    min-width: 100px;
    flex-direction: column;
    border-right: 1px solid ${({ theme }) => theme.colors.border};
  }
  .side-menu-bar {
    height: 100%;
  }

  .sideMenu-brand-box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;

    .logo {
      img {
        vertical-align: middle;
        height: 50px;
      }
    }
  }

  .side-menu-list {
    .side-menu-item {
      margin: 7px auto;
      cursor: pointer;

      .nav-link.active {
        background-color: #eff1f2;
        color: ${({ theme }) => theme.colors.primary};
      }
      .nav-link {
        display: block;
        text-align: center;
        height: 56px;
        line-height: 56px;
        font-size: 2rem;
        margin: 0 auto;
        width: 56px;
        color: black;
        border-radius: 8px;

        &:hover {
          color: ${({ theme }) => theme.colors.primary};
        }
        .icon {
          display: inline;
        }
        .profile-user {
          border: 3px solid ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }
  .mobile-navbar {
    display: none;
  }
  .mobile-sideMenu-btn {
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
    .side-menu {
      position: absolute;
      top: 0;
      left: 0;
      max-height: 80px;
      max-width: 100vw;
      min-height: 80px;
      z-index: 998;
    }
    .side-menu-bar {
      background-color: white;
      position: absolute;
      top: 0;
      left: 0;
      transform: translateX(-100%);
      transition: all 1s linear;
      z-index: 999;
      max-width: 100px;
      box-shadow: 0 2px 4px rgb(15 34 58 / 12%);
      height: 100vh;
      min-width: 100px;
    }

    .sideMenu-brand-box {
      display: none;
    }

    //mobile-navbar
    .sideMenu-brand-logo {
      display: inline;
      height: auto;

      .logo {
        img {
          vertical-align: middle;
          height: 50px;
        }
      }
    }
    .active .side-menu-bar {
      transform: translateX(0%);
      transform-origin: left;
      transition: all 1s linear;
    }

    .mobile-navbar {
      position: relative;
      width: 100vw;
      height: 80px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 3.2rem;
      z-index: 10;
    }

    .mobile-sideMenu-btn {
      display: inline-block;
      z-index: 9999;
      border: ${({ theme }) => theme.colors.black};
      .mobile-nav-icon {
        font-size: 4.2rem;
        color: ${({ theme }) => theme.colors.black};
      }
    }
    .active .mobile-navbar .mobile-nav-icon {
      display: none;
      font-size: 4.2rem;
      color: ${({ theme }) => theme.colors.black};
      z-index: 9999;
    }
    .active .mobile-navbar .close-outline {
      display: inline-block;
    }
  }
`;

export default SideMenu;
