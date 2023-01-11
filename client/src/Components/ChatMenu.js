import React from "react";
import styled from "styled-components";
import Profile from "./Profile";
import Favourite from "./Favourite";
import Contacts from "./Contacts"
import Setting from "./Setting";
import Default from "./Default";
import { useSelector } from "react-redux";

const ChatMenu = () => {
  const tabIndex = useSelector((state)=> state.tabReducer);
  console.log(tabIndex)
  return (
    <Wrapper className="chat-menu-section ">
   
    <div className="tab-content">
      <div className={tabIndex === 1 ? "tab-pane active" : "tab-pane "}>
        <Profile />
      </div>
      <div className={tabIndex === 2 ? "tab-pane active" : "tab-pane "}>
      <Favourite />
      </div>
      <div className={tabIndex === 3 ||  tabIndex === 0 ? "tab-pane active" : "tab-pane"}>
      <Default />
      </div>
      <div className={tabIndex === 4 ? "tab-pane active" : "tab-pane "}>
        <Contacts/>
      </div>
      <div className={tabIndex === 5 ? "tab-pane active" : "tab-pane "}>
        <Setting/>
      </div>
    </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  max-width: 20rem;
  height: 100vh;
  min-width: 20rem;
  z-index: 9;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.bg.primary};
  animation: fadeInLeft 1s;
  /* overflow-x: hidden;
  overflow-y: scroll; */
  .tab-pane{
    display: none;
  }
  .tab-pane.active{
    display: block;
  }

  .chat-menu {
    padding: 1rem 1rem;
    background-color: ${({ theme }) => theme.colors.bg.primary};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    border-right: 1px solid ${({ theme }) => theme.colors.border};
    input {
      color: ${({ theme }) => theme.colors.heading};
      background-color: ${({ theme }) => theme.colors.bg.primary};
      &:hover {
        background-color: ${({ theme }) => theme.colors.bg.primary};
      }
    }
    .icon {
      color: ${({ theme }) => theme.colors.heading};
    }

    .search-icon {
      background-color: ${({ theme }) => theme.colors.bg.primary};
      /* background-color: rgb(241, 245, 249); */
      &:hover {
        background-color: ${({ theme }) => theme.colors.bg.primary};
        /* background-color: rgb(226, 232, 240); */
      }
    }
    @keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translate3d(-70%, 0, 0);
  }

  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 1.5rem 0;
    margin-top: 60px;
    position: relative;
    max-width: 100vw;
    min-width: 100vw;

    .chat-menu {
      padding: 2rem 1.5rem;
      border-right: none
    }
    input {
      font-size: 1.5rem;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.bg.primary};
      &:hover {
        background-color: ${({ theme }) => theme.colors.bg.primary};
      }
    }
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
`;

export default ChatMenu;
