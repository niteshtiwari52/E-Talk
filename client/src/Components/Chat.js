import React from "react";
import ChatMenu from "./ChatMenu";
import ChatWindow from "./ChatWindow";
import SideMenu from "./SideMenu";

const Chat = () => {
  return (
    <>
      <div className="flex ">
        <div className=" w-1/12 border-2 border-red-500">
          <SideMenu />
        </div>
        <div className=" w-2/6 border-2 border-blue-500 px-8 pt-10 bg-white">
          <ChatMenu />
        </div>
        <div className="flex-auto w-64 border-2 border-green-500">
          <ChatWindow />
        </div>
      </div>
    </>
  );
};

export default Chat;
