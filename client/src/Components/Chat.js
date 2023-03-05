import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import ChatMenu from "./ChatMenu";
import ChatWindow from "./ChatWindow";
import SideMenu from "./SideMenu";
import { ToastContainer} from "react-toastify";
const Chat = () => {
  return (
    <>
     <ToastContainer />
      <Wrapper className="flex justify-start w-screen">
        <SideMenu />
        <ChatMenu />
        <ChatWindow />
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  overflow: hidden;
  height: 100vh;
`;

export default Chat;
