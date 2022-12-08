import React, { useState } from "react";
import styled from "styled-components";

const UserList = () => {
  const userList = [
    {
      id: 1,
      src: "https://themes.pixelstrap.com/chitchat/assets/images/avtar/2.jpg",
      name: "Nitesh Tiwari",
      message:
        "Hello kabnuiewhiuebwfui tak yejmoepwijowei  kopewjopcomplete ho jayega ? ",
    },
    {
      id: 2,
      src: "https://themes.pixelstrap.com/chitchat/assets/images/avtar/2.jpg",
      name: "Narendra ",
      message: "Hello kab tak yejmoepwijowei  kopewjopcomplete ho jayega ? ",
    },
    {
      id: 3,
      src: "https://themes.pixelstrap.com/chitchat/assets/images/avtar/2.jpg",
      name: "Rituresh",
      message: "Hello kab tak yejmoepwijowei  kopewjopcomplete ho jayega ? ",
    },
    {
      id: 1,
      src: "https://themes.pixelstrap.com/chitchat/assets/images/avtar/2.jpg",
      name: "Nitesh Tiwari",
      message: "Hello kab tak yejmoepwijowei  kopewjopcomplete ho jayega ? ",
    },
    {
      id: 2,
      src: "https://themes.pixelstrap.com/chitchat/assets/images/avtar/2.jpg",
      name: "Narendra ",
      message: "Hello kab tak yejmoepwijowei  kopewjopcomplete ho jayega ? ",
    },
    {
      id: 3,
      src: "https://themes.pixelstrap.com/chitchat/assets/images/avtar/2.jpg",
      name: "Rituresh",
      message: "Hello kab tak yejmoepwijowei  kopewjopcomplete ho jayega ? ",
    },
    {
      id: 1,
      src: "https://themes.pixelstrap.com/chitchat/assets/images/avtar/2.jpg",
      name: "Nitesh Tiwari",
      message:
        "Hello kabnuiewhiuebwfui tak yejmoepwijowei  kopewjopcomplete ho jayega ? ",
    },
    {
      id: 2,
      src: "https://themes.pixelstrap.com/chitchat/assets/images/avtar/2.jpg",
      name: "Narendra ",
      message: "Hello kab tak yejmoepwijowei  kopewjopcomplete ho jayega ? ",
    },
    {
      id: 3,
      src: "https://themes.pixelstrap.com/chitchat/assets/images/avtar/2.jpg",
      name: "Rituresh",
      message: "Hello kab tak yejmoepwijowei  kopewjopcomplete ho jayega ? ",
    },
    {
      id: 1,
      src: "https://themes.pixelstrap.com/chitchat/assets/images/avtar/2.jpg",
      name: "Nitesh Tiwari",
      message: "Hello kab tak yejmoepwijowei  kopewjopcomplete ho jayega ? ",
    },
    {
      id: 2,
      src: "https://themes.pixelstrap.com/chitchat/assets/images/avtar/2.jpg",
      name: "Narendra ",
      message: "Hello kab tak yejmoepwijowei  kopewjopcomplete ho jayega ? ",
    },
    {
      id: 3,
      src: "https://themes.pixelstrap.com/chitchat/assets/images/avtar/2.jpg",
      name: "Rituresh",
      message: "Hello kab tak yejmoepwijowei  kopewjopcomplete ho jayega ? ",
    },
  ];

  return (
    // <Wrapper>
    <>
      <ul className="h-full max-h-screen w-72 overflow-x-hidden overflow-y-scroll sm:w-full">
        <div className="px-2 mt-4">
          {userList.map((userList) => (
            <li className="my-4 ">
              <div className="flex items-center gap-3">
                <img
                  className=" w-15 h-15 rounded-full"
                  src={userList.src}
                  alt="user_logo"
                />
                <div className=" w-3/4">
                  <h2 className=" m-0 text-base">{userList.name}</h2>
                  <p className=" text-xs truncate whitespace-nowrap overflow-hidden">
                    {userList.message}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </div>
      </ul>
    </>
    // </Wrapper>
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

export default UserList;
