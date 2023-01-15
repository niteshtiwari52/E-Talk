import React, { useState } from "react";
import styled from "styled-components";
import Searchbar from "./Searchbar";
import UserList from "./UserList";

import Group from "./modal/Group";


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

        <div className="flex justify-center items-center">
        <Searchbar State={SearchOpen} setState={setSearchOpen} />


        <Group />

        </div>
      </div>

      {/* User list  */}
      <UserList />
      
    </Wrapper>
  );
};
const Wrapper = styled.div`
  animation: fadeInLeft 1s;
  .group-icon{
    &:hover {
      background-color: ${({ theme }) => theme.colors.bg.secondary};
    }
  }
`;
export default Default;
