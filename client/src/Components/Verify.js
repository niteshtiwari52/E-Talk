import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { verifyEmailLink } from "../Redux/Reducer/Auth/auth.action";
import { GoUnverified, GoVerified, GoMailRead, GoMail } from "react-icons/go";
import { getMySelf } from "../Redux/Reducer/User/user.action";

const Verify = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useParams();
  const [userToken, setUserToken] = useState(null);
  const [status, setStatus] = useState(false);
  const [message, setMessage] = useState("We are verifying your Email...");
  const result = useSelector((globalState) => globalState.auth.message);
  const success = useSelector((globalState) => globalState.auth.success);
  // const user = useSelector((globalState) => globalState.user.userDetails);
  useEffect(() => {
    setUserToken(token);
    dispatch(verifyEmailLink(userToken));
    setMessage(result);
    dispatch(getMySelf());
    // if(user){

    //   setStatus(user.is_verified);
    // }
  }, [userToken]);
  // useEffect(() => {
  //   if (user) {
  //     setStatus(user.is_verified);
  //     // setStatus(true);
  //     // console.log(user.email);
  //     // dispatch(userVerification(user));
  //   }
  // }, [user]);
  useEffect(() => {
    if (success) {
      setStatus(success);
      // setStatus(true);
      // console.log(user.email);
      // dispatch(userVerification(user));
    }
  }, [success]);


  const startChatting = () => {
    navigate("/");
  };

  const resendLink = () => {
    navigate("/verification");
  };

  return (
    <>
      <div className="m-4 p-4 h-full flex flex-col items-center justify-center">
        {status ? (
          <>
            <div className="flex flex-col items-center justify-center w-3/4">
              <GoMailRead className="w-2/4 h-2/4 red" color="#8af859" />

              <p className="text-2xl text-gray-900 dark:text-white my-2 px-2 mx-auto align-middle">
                {/* {message} */}
                your Email is verified.
              </p>
              {/* <p className="text-2xl text-gray-900 dark:text-white my-2 px-2 mx-auto align-middle">
                OR
              </p> */}
              {/* <p className="text-2xl text-gray-900 dark:text-white my-2 px-2 mx-auto align-middle">
                Verification Link
              </p> */}
              <div className=" w-2/4 flex item-center justify-center">
                <span
                  className="text-2xl cursor-pointer text-blue-500 dark:text-white my-2 px-2 mx-auto align-middle"
                  onClick={() => startChatting()}
                >
                  Start Chatting
                </span>
                {/* <span
                  className="text-2xl cursor-pointer text-blue-500 dark:text-white my-2 px-2 mx-auto align-middle"
                  onClick={() => chatting()}
                >
                  Chatting
                </span> */}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col items-center justify-center w-3/4">
              <GoMailRead className="w-2/4 h-2/4 red" color="#faab07" />

              <p className="text-2xl text-gray-900 dark:text-white my-2 px-2 mx-auto align-middle">
                {message}
              </p>
              {/* <p className="text-2xl text-gray-900 dark:text-white my-2 px-2 mx-auto align-middle">
                OR
              </p> */}
              {/* <p className="text-2xl text-gray-900 dark:text-white my-2 px-2 mx-auto align-middle">
                Verification Link
              </p> */}
              <span
                className="text-2xl cursor-pointer text-blue-500 dark:text-white my-2 px-2 mx-auto align-middle"
                onClick={() => resendLink()}
              >
                Verification Link Resend
              </span>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Verify;
