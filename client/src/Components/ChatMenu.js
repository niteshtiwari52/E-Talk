import React, { useState } from "react";
import styled from "styled-components";
import Searchbar from "./Searchbar";
import UserList from "./UserList";
import { BiSearch } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";

const ChatMenu = () => {
  const [SearchOpen, setSearchOpen] = useState(false);

  const handleChange = () => {
    setSearchOpen((prev) => !prev);
  };
  return (
    <Wrapper className=" bg-white">
      <div className="hidden md:hidden lg:flex justify-between items-center ">
        {SearchOpen ? (
          <>
            <div class="mb-6 relative ">
              <BiSearch className=" absolute left-0 top-5 ml-2" />
              <RxCross1
                size={18}
                className=" absolute right-0 top-5 mr-2 cursor-pointer"
                onClick={handleChange}
              />

              <input
                type="text"
                id="large-input"
                className="  pl-7 block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
          </>
        ) : (
          <>
            <div>
              <h1 className=" text-2xl m-0">Chat</h1>
              <p className=" text-gray-400 ">Start New Conversation</p>
            </div>
            <div>
              <Searchbar state={SearchOpen} setState={setSearchOpen} />
            </div>
          </>
        )}
      </div>

      {/* User list  */}

      <UserList />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 1.5rem 1.5rem;
  position: relative;
  max-width: 20%;
  height: 100vh;
  min-width: 20%;
  z-index: 9;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 1.5rem 1.5rem;
    margin-top: 80px;
    position: relative;
    max-width: 100vw;
    min-width: 100vw;
  }
`;

export default ChatMenu;
