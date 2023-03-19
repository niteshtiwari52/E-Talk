import React, { Suspense, useEffect, useState } from "react";

import DefaultLayoutHoc from "../Layout/DefaultLayout";
// redux
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMySelf } from "../Redux/Reducer/User/user.action";
import { fetchChats } from "../Redux/Reducer/Chat/chat.action";
import Loading from "../Components/Loading";
import { clearAuthStore } from "../Redux/Reducer/Auth/auth.action";
const Welcome = React.lazy(() => import("../Components/Welcome"));
const Chat = React.lazy(() => import("../Components/Chat"));

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
    } else {
      dispatch(clearAuthStore());
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
        <Suspense fallback={<><Loading /></>}>
          <Chat />
        </Suspense>
      ) : (
        <Suspense fallback={<><Loading /></>}>
          <Welcome />
        </Suspense>
      )}
    </>
  );
};
export default DefaultLayoutHoc(HomePage);
