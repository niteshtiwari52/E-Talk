import React from "react";
import ChatMenu from "./ChatMenu";
import ChatWindow from "./ChatWindow";
import SideMenu from "./SideMenu";
import UserList from "./UserList";

const Chat = () => {
  return (
    <>
      <div className="flex justify-between w-full">
        <SideMenu />
        {/* <UserList /> */}
        <ChatMenu /> {/*this contain all the user list */}
        <ChatWindow /> {/** This contain our chat window. */}
      </div>
    </>
  );
};

export default Chat;
