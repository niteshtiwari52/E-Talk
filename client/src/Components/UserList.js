import React from "react";
import styled from "styled-components";

const UserList = () => {
  const userList = [
    {
      id: 1,
      src: "https://themes.pixelstrap.com/chitchat/assets/images/avtar/2.jpg",
      name: "Nitesh Tiwari",
      message: " hello ",
    },
    {
      id: 2,
      src: "https://themes.pixelstrap.com/chitchat/assets/images/avtar/2.jpg",
      name: "Narendra ",
      message: "kya haal hai ? ",
    },
    {
      id: 3,
      src: "https://themes.pixelstrap.com/chitchat/assets/images/avtar/2.jpg",
      name: "Rituresh",
      message: "Good mornign ",
    },
  ];

  const handleUser = (index) => {
    console.log(index);
  };

  return (
    // <Wrapper>
    <Wrapper>
      <ul className="chat-main h-full overflow-x-hidden overflow-y-scroll">
        <div className="mt-4 ">
          {userList.map((userList, index) => (
            <li
              key={index}
              className={index === 2 ? "active px-5 py-2" : "px-5 py-2"}
              
            >
              <div className="chat-box flex items-center" >
                <div className="profile">
                  <img
                    className=" w-15 h-15 rounded-full"
                    src={userList.src}
                    alt="user_logo"
                  />
                </div>
                <div className="details w-3/4">
                  <h2 className="md:w-32 w-full m-0 truncate text-base">
                    {userList.name}
                  </h2>
                  <p className=" text-xs truncate whitespace-nowrap overflow-hidden">
                    {userList.message}
                  </p>
                </div>
                <div className="data-status">
                  <p>18/12/22</p>
                  <p className="status">Seen</p>
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
    height: calc(100vh + 150px);
    li.active {
      background-color: #eff7fe;
      border-left: 4px solid #1c9dea;
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
      p {
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
        }
      }

      .data-status {
        position: absolute;
        right: 0;
        text-align: right;
        h2,
        p {
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
