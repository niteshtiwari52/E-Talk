import React from "react";

const Profile = () => {
  return (
    <div className="profile-tab dynamic-sidebar">
      <div className="relative chat-menu flex flex-wrap items-center justify-between w-full ">
        <div>
          <h2>Profile</h2>
          <p>Personal Information</p>
        </div>
        <div className="icon text-right"></div>
      </div>
      <div className="details h-full">
       <div className="p-4">
       <div className="flex items-center flex-col">
        <div className="user-profile-img">
          <img
            src="https://themes.pixelstrap.com/chitchat/assets/images/avtar/2.jpg"
            alt="profile"
          />
        </div>
        <div className="description">
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        </div>
        <div className="flex items-start flex-col">
        <div className="title">Contact info</div>
        <div>Email Address</div>
        <div>Location</div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Profile;
