import React, { useEffect } from "react";
import Chat from "../Components/Chat";
import Welcome from "../Components/Welcome";
import DefaultLayoutHoc from "../Layout/DefaultLayout";
// toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// redux
import {useSelector,  useDispatch} from "react-redux"
import { signIn } from "../Redux/Reducer/Auth/auth.action";
import { getMySelf } from "../Redux/Reducer/User/user.action";

const HomePage = () => {

  
  
  const user = useSelector((globalState) =>  globalState.user.userDetails );
  
 
  const dispatch = useDispatch();
  
  
  return (
    <>
      {user?.name ? (
        <>
          <Chat  />
          {/* <ToastContainer /> */}
        </>
      ) : (
        <>
          <Welcome />
          {/* <ToastContainer /> */}
        </>
      )}
    </>
  );
};

export default DefaultLayoutHoc(HomePage);
