import React from "react";
import Chat from "../Components/Chat";
import Welcome from "../Components/Welcome";
import DefaultLayoutHoc from "../Layout/DefaultLayout";

const HomePage = () => {
  const user = {
    name: "Nitesh",
  };
  return (
    <>
      {user?.name ? (
        <>
          <Chat  />
        </>
      ) : (
        <>
          <Welcome />
        </>
      )}
    </>
  );
};

export default DefaultLayoutHoc(HomePage);
