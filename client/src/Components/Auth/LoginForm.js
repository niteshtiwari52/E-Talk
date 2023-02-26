import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Social from "../../Styles/Social";
import { Button } from "../../Styles/Button";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// Redux
import { signIn } from "../../Redux/Reducer/Auth/auth.action";
import { ToastContainer, toast } from "react-toastify";
import ShowPasswordToggle from "../ShowPasswordToggle";

const LoginForm = () => {
  const [Icon, InputType] = ShowPasswordToggle();
  const user = useSelector((globalState) => globalState.user.userDetails);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (userData.email && userData.password) {
      dispatch(signIn(userData));

      toast.success("login Sucessfully");
      navigate("/verification");

      // dispatch(getMySelf());
      setUserData({ email: "", password: "" });
    } else {
      toast.error("Please Fill the Data", {
        autoClose: 1000,
      });
    }
  };

  return (
    <>
      <div className=" auth-page-content col-span-2 flex flex-col justify-center items-center ">
        <div className="xl:min-w-[450px] px-8">
          <div className="mb-8"></div>
          <div className="mb-8">
            <h3 className="mb-1 text-center">Welcome back !</h3>
            <p className="text-center">Sign in to continue...</p>
          </div>
          <div className=" p-8 card">
            {/* <form> */}
            <div className="form-container vertical mb-2">
              <div className="form-item vertical">
                <label className="form-label mb-2">User Name or Email</label>
                <div>
                  <input
                    className="input input-md h-11"
                    type="email"
                    name="email"
                    autoComplete="off"
                    placeholder="user name or email"
                    value={userData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-item vertical">
                <div className="mb-2 flex justify-between">
                  <label className="form-label">Password</label>
                  <span>
                    <NavLink className=" hover:underline" to="/forgot-password">
                      Forgot Password?
                    </NavLink>
                  </span>
                </div>
                <div className="">
                  <span className="input-wrapper ">
                    <input
                      className="input input-md h-11"
                      type={InputType}
                      name="password"
                      autoComplete="off"
                      placeholder="Password"
                      value={userData.password}
                      onChange={handleChange}
                      style={{ paddingRight: "2.25rem" }}
                    />
                    {Icon}
                  </span>
                </div>
              </div>
              <div className=" mb-6">
                <label className="checkbox-label mb-0">
                  <input
                    className="checkbox"
                    type="checkbox"
                    name=""
                    value=""
                  />
                  <span className="ml-2">Remember Me</span>
                </label>
              </div>
              <Button
                className="button bg-green-600 hover:bg-green-500 active:bg-green-700 text-white radius-round h-11 px-8 py-2 w-full"
                onClick={handleLogin}
              >
                Log In
              </Button>
              <Social />
            </div>
            {/* </form> */}
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default LoginForm;
