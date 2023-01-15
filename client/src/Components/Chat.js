import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import ChatMenu from "./ChatMenu";
import ChatWindow from "./ChatWindow";
import SideMenu from "./SideMenu";

const Chat = () => {
  return (
    <>
      <Wrapper className="flex justify-start w-full">
       <SideMenu  />
       <ChatMenu  />
       <ChatWindow />

       
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
     overflow: hidden;
     height: 100vh;
`

export default Chat;
