import React, { useState } from "react";
import styled from "styled-components";
import Searchbar from "./Searchbar";
import UserList from "./UserList";
const ChatMenu = () => {
  const [SearchOpen, setSearchOpen] = useState(false);

  return (
    <Wrapper className="chat-menu-section">
      <div className="chat-menu flex flex-wrap items-center justify-between w-full  ">
        {SearchOpen ? (
          <> </>
        ) : (
          <>
            <div>
              <h1 className=" text-2xl m-0">Chat</h1>
              <p className=" text-gray-400 mb-0">Start New Conversation</p>
            </div>
          </>
        )}

        <Searchbar State={SearchOpen} setState={setSearchOpen} />
      </div>

      {/* User list  */}
      <UserList />
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
  /* overflow-x: hidden;
  overflow-y: scroll; */
  .chat-menu {
    padding: 1rem 1rem;
    background-color: ${({ theme }) => theme.colors.bg.primary};
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
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 1.5rem 0;
    margin-top: 60px;
    position: relative;
    max-width: 100vw;
    min-width: 100vw;

    .chat-menu {
      padding: 2rem 1.5rem;
      box-shadow: 0 10px 10px rgb(15 34 58 / 12%);
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
