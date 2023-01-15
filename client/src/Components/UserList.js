import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const UserList = () => {
  const [userIndex, setUserIndex] = useState("");
  const [userList, setUserList] = useState([]);

  const chat = useSelector((globalState) => globalState.chat.chats);

  // console.log(chat)

  // console.log({...chat})
  // console.log(userList)

  useEffect(() => {
    setUserList(chat);
  }, [chat]);

  // const userList = [
  //   {
  //     id: 1,
  //     src: "https://themes.pixelstrap.com/chitchat/assets/images/avtar/2.jpg",
  //     name: "Nitesh Tiwari",
  //     message: "Hello kabnuiewhiuebwfui tak yejmoepwijowei  kopewjopcomplete ho jayega ? ",
  //     status: "seen",
  //   },
  //   {
  //     id: 2,
  //     src: "https://themes.pixelstrap.com/chitchat/assets/images/avtar/2.jpg",
  //     name: "Narendra ",
  //     message: "Hello kab tak yejmoepwijowei  kopewjopcomplete ho jayega ? ",
  //     status: "Failed",
  //   },
  //   {
  //     id: 3,
  //     src: "https://themes.pixelstrap.com/chitchat/assets/images/avtar/2.jpg",
  //     name: "Rituresh",
  //     message: "Hello kab tak yejmoepwijowei  kopewjopcomplete ho jayega ? ",
  //     status: "seen",
  //   },
  //   {
  //     id: 4,
  //     src: "https://themes.pixelstrap.com/chitchat/assets/images/avtar/2.jpg",
  //     name: "Nitesh Tiwari",
  //     message: "Hello kab tak yejmoepwijowei  kopewjopcomplete ho jayega ? ",
  //     status: "Failed",
  //   },
  //   {
  //     id: 5,
  //     src: "https://themes.pixelstrap.com/chitchat/assets/images/avtar/2.jpg",
  //     name: "Narendra ",
  //     message: "Hello kab tak yejmoepwijowei  kopewjopcomplete ho jayega ? ",
  //     status: "seen",
  //   },
  //   {
  //     id: 6,
  //     src: "https://themes.pixelstrap.com/chitchat/assets/images/avtar/2.jpg",
  //     name: "Rituresh",
  //     message: "Hello kab tak yejmoepwijowei  kopewjopcomplete ho jayega ? ",
  //     status: "seen",
  //   },
  //   {
  //     id: 7,
  //     src: "https://themes.pixelstrap.com/chitchat/assets/images/avtar/2.jpg",
  //     name: "Nitesh Tiwari",
  //     message: "Hello kabnuiewhiuebwfui tak yejmoepwijowei  kopewjopcomplete ho jayega ? ",
  //     status: "seen",
  //   },
  //   {
  //     id: 8,
  //     src: "https://themes.pixelstrap.com/chitchat/assets/images/avtar/2.jpg",
  //     name: "Narendra ",
  //     message: "Hello kab tak yejmoepwijowei  kopewjopcomplete ho jayega ? ",
  //     status: "seen",
  //   },
  //   {
  //     id: 9,
  //     src: "https://themes.pixelstrap.com/chitchat/assets/images/avtar/2.jpg",
  //     name: "Rituresh ",
  //     message: "Hello kab tak yejmoepwijowei  kopewjopcomplete ho jayega ? ",
  //     status: "seen",
  //   },
  //   {
  //     id: 10,
  //     src: "https://themes.pixelstrap.com/chitchat/assets/images/avtar/2.jpg",
  //     name: "Nitesh Tiwari",
  //     message: "Hello kab tak yejmoepwijowei  kopewjopcomplete ho jayega ? ",
  //     status: "seen",
  //   },
  //   {
  //     id: 11,
  //     src: "https://themes.pixelstrap.com/chitchat/assets/images/avtar/2.jpg",
  //     name: "Nitesh Tiwari",
  //     message: "Hello kab tak yejmoepwijowei  kopewjopcomplete ho jayega ? ",
  //     status: "seen",
  //   },

  // ];

  const handleClick = (e, index) => {
    setUserIndex(index);
  };

  return (
    // <Wrapper>
    <Wrapper>
      <ul className="chat-main h-full overflow-x-hidden overflow-y-scroll">
        <div className="my-4">
          {userList.map((userList, index) => (
            <li
              key={index}
              className={index === userIndex ? "active px-2 py-2" : "px-2 py-2"}
            >
              <div
                className="chat-box flex items-center cursor-pointer "
                onClick={(e) => handleClick(e, index)}
              >
                <div className="profile">
                  <img
                    className=" w-15 h-15 rounded-full"
                    src={chat[index].users[0].pic}
                    alt="user_logo"
                  />
                </div>
                <div className="details w-3/4">
                  <h2 className="md:w-32 w-full m-0 truncate text-base">
                    {userList.chatName}
                  </h2>
                  <p className=" text-xs truncate whitespace-nowrap overflow-hidden">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, itaque.
                  </p>
                </div>
                <div className="data-status h-full">
                {
                  chat[index].isGroupChat ? 
                  <div class="flex -space-x-4">
                    <img
                      class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800 hover:z-10"
                      src={chat[index].users[0].pic}
                      alt=""
                    />
                    <img
                      class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800 hover:z-10"
                      src={chat[index].users[1].pic}
                      alt=""
                    />
                    <img
                      class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800 hover:z-10"
                      src={chat[index].users[2].pic}
                      alt=""
                    />
                   {chat[index].users.length > 3 ? <div
                      class="flex items-center justify-center w-8 h-8 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
                    >
                      {chat[index].users.length - 3}
                    </div> : <></>}
                  </div>
                  :  <></>
                }
                  <p>18/12/22</p>
                  {userList.status === "seen" ? (
                    <span className="status text-green-400">
                    {userList.status}
                    </span>
                  ) : (
                    <span className="status text-red-500">
                    {userList.status}
                    </span>
                  )}
                </div>
              </div>
            </li>
          ))}
        </div>
      </ul>
    </Wrapper>
    // </Wrapper>
  );
};
const Wrapper = styled.section`
  position: relative;
  .chat-main {
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.bg.primary};
    li.active {
      background-color: ${({ theme }) => theme.colors.bg.secondary};
      border-left: 4px solid ${({ theme }) => theme.colors.cyan};
      transition: all 0.3s ease;
    }
    .chat-box {
      position: relative;
      h2 {
        overflow: hidden;
        margin: 0;
        padding-top: 8px;
        white-space: nowrap;
      }
      p,
      span {
        font-weight: 600;
        margin: 0;
        padding-top: 8px;
      }
      .profile {
        position: absolute;
        left: 0;
        width: 50px;
        height: 50px;
      }
      .details {
        padding: 12px 12px 12px 60px;
        p {
          overflow: hidden;
          color: ${({ theme }) => theme.colors.text.secondary};
        }
      }
      .data-status {
        position: absolute;
        right: 0;
        text-align: right;
        padding: 12px 0px 12px 0px;
        h2,
        p,
        span {
          font-size: calc(11px + (12 - 11) * ((100vw - 320px) / (1920 - 320)));
        }
        .status {
          padding-top: 8px;
          padding-bottom: 0px;
          letter-spacing: 0.5px;
          font-weight: 600;
        }
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    position: relative;
    max-width: 100vw;
    min-width: 100vw;
    .chat-main {
      width: 100vw;
      height: calc(100vh + 60px);
      li {
        padding: 20px 20px 20px 20px;
        h2 {
          font-size: 1.5rem;
        }
        p {
          font-size: 1rem;
        }
      }
    }
  }
`;

export default UserList;
