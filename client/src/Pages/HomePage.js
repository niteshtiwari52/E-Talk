import React, { useEffect, useState } from "react";
import Chat from "../Components/Chat";
import Welcome from "../Components/Welcome";
import DefaultLayoutHoc from "../Layout/DefaultLayout";

// redux
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMySelf } from "../Redux/Reducer/User/user.action";
import { fetchChats } from "../Redux/Reducer/Chat/chat.action";

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [status, setStatus] = useState();
  const user = useSelector((globalState) => globalState.user.userDetails);

  const getUserData = async () => {
    await dispatch(getMySelf());
    await dispatch(fetchChats());
  };

  useEffect(() => {
    if (localStorage.ETalkUser) {
      getUserData();
      // setloading(false);
    }

    // eslint-disable-next-line
  }, [localStorage]);

  useEffect(() => {
    if (user) {
      setStatus(user.is_verified);
    }
  }, [user]);
  useEffect(() => {
    if (status === undefined) {
      return;
    }
    if (!status) {
      navigate("/verification");
      // alert("mot verified ");
    } else {
      // alert("verified");
    }
  }, [status]);

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
