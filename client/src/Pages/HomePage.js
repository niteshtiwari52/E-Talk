import React from "react";
import Chat from "../Components/Chat";
import Welcome from "../Components/Welcome";
import DefaultLayoutHoc from "../Layout/DefaultLayout";

// redux
import {useSelector} from "react-redux"

const HomePage = () => {

  const user = useSelector((globalState) =>  globalState.user.userDetails );

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
