import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getSender, getSenderPic } from "../HelperFunction/chat.Helper";
import {
  clearSelectChatAction,
  selectChatAction,
} from "../Redux/Reducer/Chat/chat.action";
import { getAllChats } from "../Redux/Reducer/Message/message.action";

const UserList = () => {
  const dispatch = useDispatch();
  const [selectedChat, setSelectedChat] = useState();
  const [chatList, setchatList] = useState([]);

  const chat = useSelector((globalState) => globalState.chat.chats);
  const loggedUser = useSelector((globalState) => globalState.user.userDetails);

  // console.log(chat)

  // console.log({...chat})
  // console.log(chatList)

  useEffect(() => {
    setchatList(chat);
  }, [chat]);

  useEffect(() => {
    console.log(selectedChat);
    // dispatch(clearSelectChatAction());
    // if (selectedChat ? dispatch(getAllChats(selectedChat._id)) : "")

    dispatch(selectChatAction(selectedChat));
    dispatch(getAllChats(selectedChat));

    // alert(selectedChat._id)
  }, [selectedChat]);

  return (
    // <Wrapper>
    <Wrapper>
      <ul className="chat-main h-full overflow-x-hidden overflow-y-scroll">
        {chatList.length !== 0 ? (
          <div className="my-4">
            {chatList.map((item, index) => (
              <li
                onClick={() => setSelectedChat(item)}
                key={item._id}
                className={
                  selectedChat === item ? "active px-5 py-2" : "px-5 py-2"
                }
              >
                <div className="chat-box flex items-center cursor-pointer">
                  <div className="profile">
                    <img
                      className=" w-12 h-12 rounded-full"
                      // src={chat[index].users[0].pic}
                      src={
                        !item.isGroupChat
                          ? getSenderPic(loggedUser, item.users)
                          : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6wQvepXb0gM_Ft1QUOs6UyYJjPOmA-gq5Yw&usqp=CAU"
                      }
                      alt="user_logo"
                    />
                  </div>
                  <div className="details w-3/4">
                    <h2 className="md:w-32 w-full m-0 truncate text-base">
                      {!item.isGroupChat
                        ? getSender(loggedUser, item.users)
                        : item.chatName}
                    </h2>
                    <p className=" text-xs truncate whitespace-nowrap overflow-hidden">
                      {item.message}
                    </p>
                  </div>
                  <div className="data-status h-full">
                    {chat[index].isGroupChat ? (
                      <div className="flex -space-x-4">
                        <img
                          className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800 hover:z-10"
                          src={chat[index].users[0].pic}
                          alt=""
                        />
                        <img
                          className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800 hover:z-10"
                          src={chat[index].users[1].pic}
                          alt=""
                        />
                        <img
                          className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800 hover:z-10"
                          src={chat[index].users[2].pic}
                          alt=""
                        />
                        {chat[index].users.length > 3 ? (
                          <div className="flex items-center justify-center w-8 h-8 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800">
                            {`+${chat[index].users.length - 3}`}
                          </div>
                        ) : (
                          <></>
                        )}
                      </div>
                    ) : (
                      <></>
                    )}
                    <p>18/12/22</p>
                    {item.status === "seen" ? (
                      <span className="status text-green-400">
                        {item.status}
                      </span>
                    ) : (
                      <span className="status text-red-500">{item.status}</span>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </div>
        ) : (
          <div className="my-4">
            <p className="text-lg text-gray-400 w-full first-letter: mx-auto">
              {" "}
              No Chat availabe
            </p>
          </div>
        )}
      </ul>
    </Wrapper>
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
