import React, { useState } from "react";
import styled from "styled-components";
import Searchbar from "./Searchbar";
import UserList from "./UserList";
import { BiSearch } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";

const ChatMenu = () => {
  const [SearchOpen, setSearchOpen] = useState(false);

  const handleChange = () => {
    setSearchOpen((prev) => !prev);
  };
  return (
    <Wrapper className="chat-menu-section bg-white">
      <div className="chat-menu flex flex-wrap items-center justify-between w-full ">
        {SearchOpen ? (
          <> </>
        ) : (
          <>
            <div>
              <h1 className=" text-2xl m-0">Chat</h1>
              <p className=" text-gray-400 ">Start New Conversation</p>
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
  padding: 1.5rem 0;
  position: relative;
  max-width: 20rem;
  height: 100vh;
  min-width: 20rem;
  z-index: 9;
  overflow: hidden;
  /* overflow-x: hidden;
  overflow-y: scroll; */
  .chat-menu {
    padding: 0rem 1.5rem 1rem;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 1.5rem 0;
    margin-top: 70px;
    position: relative;
    max-width: 100vw;
    min-width: 100vw;
    .chat-menu {
      padding: 0 2rem 1rem;
      box-shadow: 0 10px 10px rgb(15 34 58 / 12%);
    }
  }
`;

export default ChatMenu;
