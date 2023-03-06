import React, { useState } from "react";
import styled from "styled-components";
import Searchbar from "./Searchbar";
import UserList from "./UserList";

import Group from "./modal/Group";

const Default = () => {
  const [query, setQuary] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  
  return (
    <Wrapper className="default dynamic-sidebar">
      <div className="chat-menu flex flex-wrap items-center justify-between w-full  ">
        {searchOpen ? (
          <> </>
        ) : (
          <>
            <div>
              <h1 className=" text-2xl m-0">Chat</h1>
              <p className=" text-gray-400 mb-0">Start New Conversation</p>
            </div>
          </>
        )}

        <div className={searchOpen ? "flex justify-center items-center w-full" : "flex justify-center items-center" }>
          <Searchbar searchOpen={searchOpen} setSearchOpen={setSearchOpen} setQuary={setQuary}/>
          <Group />
        </div>
      </div>

      {/* User list  */}
      <UserList query={query} searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  animation: fadeInLeft 1s;
  .group-icon {
    &:hover {
      background-color: ${({ theme }) => theme.colors.bg.secondary};
    }
  }
`;
export default Default;
