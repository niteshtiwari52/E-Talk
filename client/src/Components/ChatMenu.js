import React from "react";
import Searchbar from "./Searchbar";

const ChatMenu = () => {
  return (
    <>
      <div className="flex justify-between">
        <div>
          <h1 className=" text-2xl m-0">Chat</h1>
          <p className=" text-gray-400 ">Start New Conversation</p>
        </div>
        <div>
          <Searchbar />
        </div>
      </div>
    </>
  );
};

export default ChatMenu;
