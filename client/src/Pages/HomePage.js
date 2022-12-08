import React from "react";
import Chat from "../components/Chat";
import Welcome from "../components/Welcome";
import DefaultLayoutHoc from "../Layout/DefaultLayout";

const HomePage = () => {
  const user = {
    name: "Nitesh",
  };
  return (
    <>
      {user?.name ? (
        <>
          <Chat />
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
