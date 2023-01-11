import React, { useState } from "react";
import styled from "styled-components";
import Searchbar from "./Searchbar";
import UserList from "./UserList";

const Default = () => {
  const [SearchOpen, setSearchOpen] = useState(false);
  return (
    <Wrapper className="default dynamic-sidebar">
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
const Wrapper = styled.div`
  animation: fadeInLeft 1s;
`;
export default Default;
