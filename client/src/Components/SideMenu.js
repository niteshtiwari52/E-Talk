import React, { Profiler, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { AiOutlineSetting, AiOutlineStar } from "react-icons/ai";
import { RiContactsLine } from "react-icons/ri";
import { BsChatSquareDots } from "react-icons/bs";
import { CgClose, CgMenu } from "react-icons/cg";
import Toggler from "./Toggler";
import {IoLogOutOutline} from "react-icons/io5"
// toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
// redux 
import {useDispatch , useSelector} from "react-redux"
import { signOut } from "../Redux/Reducer/Auth/auth.action";



const SideMenu = () => { 

  
  const [menuIcon, setMenuIcon] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((globalState) =>  globalState.user.userDetails );

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

 const handleProfile =() => {
    // alert("profile click");
    setIsOpen(true)
    
  }

  const handleFavourite = () => {
    alert("Favoorite click ")
  }

  const handleChats = () => {
    alert("Caht click ");

  }
  
  const handleAddContact = () => {
    alert("Add contact ")
  }

  const handleSetting = () => {
    alert("Setting click ")
  }


  const sideIconsList = [
    {
      id : 1, 
      icon : CgProfile,
      title : "Profile",
      navlinkURL: "profile",
      onclickFunction : handleProfile,
    },
    {
      id : 2, 
      icon : AiOutlineStar,
      title : "Favorite",
      navlinkURL: "favourite",
      onclickFunction : handleFavourite
      
    },
    {
      id : 3, 
      icon : BsChatSquareDots,
      title : "Chats",
      navlinkURL: "chats",
      onclickFunction : handleChats
    },
    {
      id : 4, 
      icon : RiContactsLine,
      title : "Add contact"     ,
      navlinkURL: "contact",
      onclickFunction : handleAddContact

    },
    {
      id : 5, 
      icon : AiOutlineSetting,
      title : "setting",
      navlinkURL: "setting",
      onclickFunction : handleSetting
    },
      
    
  ]
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(signOut());
    toast.success('Logout Successful', {
      toastId: 'success1',
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  return (
    <Wrapper>
      <ToastContainer />
      <div
        className={
          menuIcon
            ? " side-menu active flex justify-between"
            : " side-menu flex justify-between"
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
              {sideIconsList.map((items , index) => (
                <li
                key={index}
                className="side-menu-item"
                title={items.title}
                onClick = {items.onclickFunction}
              >
                <div className="nav-link ">
                  <items.icon className="icon" />
                </div>
              </li>
              ))}

              {/* Profile */}
              {/* <li
                className="side-menu-item"
                title="profile"
              >
                <NavLink to="profile" className="nav-link ">
                  <CgProfile className="icon" />
                </NavLink>
              </li> */}

              {/* Favorite */}
              {/* <li
                className="side-menu-item"
                title="Favorite"
              >
                <NavLink to="favorite" className="nav-link">
                  <AiOutlineStar className="icon" />
                </NavLink>
              </li> */}

              {/* chats */}
              {/* <li
                className="side-menu-item"
                title="Chats"
              >
                <NavLink to="/" className="nav-link">
                  <BsChatSquareDots className="icon" />
                </NavLink>
              </li> */}

              {/* contact */}
              {/* <li
                className="side-menu-item"
                title="contact"
              >
                <NavLink to="contact" className="nav-link">
                  <RiContactsLine className="icon" />
                </NavLink>
              </li> */}

              {/* setting */}
              {/* <li
                className="side-menu-item"
                title="setting"
              >
                <NavLink to="setting" className="nav-link">
                  <AiOutlineSetting className="icon" />
                </NavLink>
              </li> */}

              {/* Theme mode */}
              <li
                className="side-menu-item"
                title="Theme Mode"
              >
                <div className="nav-link" >
                  <Toggler/>
                </div>
              </li>

              {/* logout */}
              <li
                className="side-menu-item"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Logout"
                onClick={handleLogout}
              >
                <div to="/" className="nav-link">
                  <IoLogOutOutline className="icon" />
                </div>
              </li>

              {/* <li className="side-menu-item">
                <div className="nav-link">
                  <img
                    src="https://themes.pixelstrap.com/chitchat/assets/images/avtar/2.jpg"
                    alt=""
                    className="profile-user rounded-full"
                  />
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 text-center"
                  >
                    {user.name}
                  </Dialog.Title>
                  <div className="mt-2">
                  <img className="w-20 h-20 rounded-full mx-auto align-center" src={user.pic} alt="Rounded avatar"/>
                    <p className="text-lg text-gray-500 text-center">
                     {user.email}
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex float-right rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .side-menu {
    max-width: 100px;
    height: 100vh;
    min-width: 100px;
    flex-direction: column;
    border-right: 1px solid  ${({ theme }) => theme.colors.border};
    background-color: ${({ theme }) => theme.colors.bg.primary}
  }
  .side-menu-bar{
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
        background-color: ${({ theme }) => theme.colors.btn.light};
        color: ${({ theme }) => theme.colors.cyan};
      }
      .nav-link {
        display: block;
        text-align: center;
        height: 56px;
        line-height: 56px;
        font-size: 2rem;
        margin: 0 auto;
        width: 56px;
        color: ${({ theme }) => theme.colors.text.secondary};
        border-radius: 8px;
        &:hover {
          color: ${({ theme }) => theme.colors.cyan};
        }
        .icon {
          display: inline;
        }
        .profile-user {
          border: 3px solid ${({ theme }) => theme.colors.cyan};
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
      background-color: ${({ theme }) => theme.colors.bg.primary};;
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
      border: ${({ theme }) => theme.colors.heading};
      .mobile-nav-icon {
        font-size: 4.2rem;
        color: ${({ theme }) => theme.colors.heading};
      }
    }
    .active .mobile-navbar .mobile-nav-icon {
      display: none;
      font-size: 4.2rem;
      color: ${({ theme }) => theme.colors.heading};
      z-index: 9999;
    }
    .active .mobile-navbar .close-outline {
      display: inline-block;
    }
  }
`;

export default SideMenu;