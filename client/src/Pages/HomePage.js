import React, { useEffect } from "react";
import Chat from "../Components/Chat";
import Welcome from "../Components/Welcome";
import DefaultLayoutHoc from "../Layout/DefaultLayout";

// redux
import { useDispatch} from "react-redux"
import { signIn } from "../Redux/Reducer/Auth/auth.action";

const HomePage = () => {
  const user = {
    // name: "Nitesh",
  };

  const dispatch = useDispatch();

  useEffect(() => {
  
  }, [])
  
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
