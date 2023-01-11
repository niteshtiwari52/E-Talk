import React from "react";

const Favourite = () => {
  return (
    <div className="favourite-tab dynamic-sidebar">
      <div className="relative chat-menu flex flex-wrap items-center justify-between w-full ">
        <div>
          <h2>Favourites</h2>
        </div>
        <div className="icon text-right"></div>
      </div>
      <div className="details"></div>
    </div>
  );
};

export default Favourite;
