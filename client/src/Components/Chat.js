import React from "react";
import ChatWindow from "./ChatWindow";
import SideMenu from "./SideMenu";
import UserList from "./UserList";

const Chat = () => {
  return (
    <>
      <div className="flex justify-between w-full">
        <SideMenu />
        <UserList />
        <ChatWindow />
      </div>
    </>
  );
};

export default Chat;
