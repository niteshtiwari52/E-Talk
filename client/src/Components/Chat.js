import React from "react";
import styled from "styled-components";
import ChatMenu from "./ChatMenu";
import ChatWindow from "./ChatWindow";
import SideMenu from "./SideMenu";

const Chat = () => {
  return (
    <>
      <Wrapper className="flex justify-start w-full">
        <SideMenu />
        {/* <UserList /> */}
        <ChatMenu /> {/*this contain all the user list */}
        <ChatWindow /> {/** This contain our chat window. */}
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
     overflow: hidden;
     height: 100vh;
`

export default Chat;
