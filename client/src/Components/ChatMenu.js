import React from "react";
import styled from "styled-components";
import Searchbar from "./Searchbar";
import UserList from "./UserList";

const ChatMenu = () => {
  return (
    <Wrapper className=" bg-white">
      <div className="flex  justify-between ">
        <div>
          <h1 className=" text-2xl m-0">Chat</h1>
          <p className=" text-gray-400 ">Start New Conversation</p>
        </div>
        <div>
          <Searchbar />
        </div>
      </div>

      {/* User list  */}

      <UserList />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 1.5rem 1.5rem;
  position: relative;
  max-width: 20%;
  height: 100vh;
  min-width: 20%;
  z-index: 9;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 1.5rem 1.5rem;
    margin-top: 80px;
    position: relative;
    max-width: 100vw;
    min-width: 100vw;
  }
`;

export default ChatMenu;
