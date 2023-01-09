import React, { useEffect } from "react";
import Chat from "../Components/Chat";
import Welcome from "../Components/Welcome";
import DefaultLayoutHoc from "../Layout/DefaultLayout";

// redux
import {useSelector,  useDispatch} from "react-redux"
import { signIn } from "../Redux/Reducer/Auth/auth.action";
import { getMySelf } from "../Redux/Reducer/User/user.action";

const HomePage = () => {
  
  
  const user = useSelector((globalState) => globalState.user.userDetails);
  const dispatch = useDispatch();
  
 

  // useEffect(() => {
   
  //   if(localStorage.ETalkUser){

  //     dispatch(getMySelf()); 
  //   }
    
   
 
  // }, []);
  
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
