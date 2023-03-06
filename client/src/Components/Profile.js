import React from "react";
import styled from "styled-components";
import { MdOutlineEmail } from "react-icons/md";
import { FcAbout, FcContacts } from "react-icons/fc";
import { AiFillContacts, AiFillInfoCircle, AiTwotoneMail } from "react-icons/ai";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((globalState) => globalState.user.userDetails);
  console.log(user);
  return (
    <Wrapper className="profile-tab dynamic-sidebar">
      <div className="relative chat-menu flex flex-wrap items-center justify-between w-full ">
        <div>
          <h2>Profile</h2>
          <p>Personal Information</p>
        </div>
        <div className="icon text-right"></div>
      </div>
      <div className="user-details h-full">
        <div className="details p-4">
          <div className="intro flex items-center flex-col py-3">
            <div className="user-profile-img rounded-full overflow-hidden">
              <img src={user.pic} alt={user.name} />
            </div>
            <div className="user-name py-4 text-center w-full">
              <h5 className="text-xl font-medium">{user.name}</h5>
            </div>
          </div>
          <div className="intro mt-3 flex items-start flex-col p-4 rounded">
            <div className="flex justify-between w-full mt-2">
              <div className="grid place-items-center text-gray-500 text-3xl">
                <AiFillInfoCircle color="#1ca9fe" />
              </div>
              <div className="w-4/5">
                <span className="text-gray-500">About</span>
                <p className="w-full break-words">{user.about}</p>
              </div>
            </div>
            {/* contact */}
            <div className="flex justify-between w-full mt-2">
              <div className="grid place-items-center text-gray-500 text-3xl">
                <AiFillContacts color="#1ca9fe" />
              </div>
              <div className="w-4/5">
                <span className="text-gray-500">Mobile</span>
                <p className="w-full break-words">{user.contact}</p>
              </div>
            </div>

            <div className="flex justify-between w-full mt-2">
              <div className="grid place-items-center text-gray-500 text-3xl">
                <AiTwotoneMail color="#1ca9fe" />
              </div>
              <div className="w-4/5">
                <span className="text-gray-500">Email Address</span>
                <p className="w-full break-words">{user.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  animation: fadeInLeft 1s;
  .user-profile-img {
    width: 150px;
    height: 150px;
    img {
      min-width: 100%;
    }
  }
  .intro {
    border-bottom: 1px solid rgba(${({ theme }) => theme.colors.border});
    background-color: ${({ theme }) => theme.colors.bg.primary};
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .details {
      margin: 10px 50px 0px 50px;
    }
    .intro {
      padding: 3rem;
    }
  }
`;
export default Profile;
