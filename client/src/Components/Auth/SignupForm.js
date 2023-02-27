import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../../Styles/Button";
import Social from "../../Styles/Social";
import { AiFillEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Redux
import { signUp } from "../../Redux/Reducer/Auth/auth.action";
import { getMySelf } from "../../Redux/Reducer/User/user.action";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showconfirmPassword, setShowconfirmPassword] = useState(false);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // console.log(userData)

  const handleChange = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (
      userData.email &&
      userData.password &&
      userData.name &&
      userData.confirmPassword
    ) {
      dispatch(signUp(userData));
      navigate("/verification");
    } else {
      toast.error("Please Fill the Data", {
        autoClose: 1000,
      });
    }
    // dispatch(getMySelf());
  };

  return (
    <div className="auth-page-content col-span-2 flex flex-col justify-center items-center">
      <div className="xl:min-w-[450px] px-8">
        <div className="mb-8"></div>
        <div className="mb-8">
          <h3 className="mb-1 text-center">Sign up</h3>
          <p className="text-center">Get your free E-Talk account now..</p>
        </div>
        <div className=" px-8 pb-8 card">
          {/* <form action="#"> */}
          <div className="form-container vertical">
            <div className="form-item vertical">
              <label className="form-label mb-2">Name</label>
              <div className="">
                <input
                  className="input input-md h-11"
                  type="text"
                  name="name"
                  autoComplete="off"
                  placeholder="Enter your Name"
                  required
                  value={userData.name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-item vertical">
              <label className="form-label mb-2">Email</label>
              <div className="">
                <input
                  className="input input-md h-11"
                  type="email"
                  name="email"
                  autoComplete="off"
                  placeholder="Email"
                  required
                  value={userData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-item vertical">
              <label className="form-label mb-2">Password</label>
              <div className="input-suffix-left">
                <span className="input-wrapper ">
                  <input
                    className="input input-md h-11"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    autoComplete="off"
                    placeholder="Password"
                    value={userData.password}
                    onChange={handleChange}
                    style={{ paddingRight: "2.25rem" }}
                  />
                  <div className="input-suffix-end flex justify-center items-center h-full">
                    <span className="cursor-pointer text-xl mb-0">
                      {showPassword ? (
                        <AiFillEye
                          className="eye-icon-fill"
                          onClick={() => setShowPassword(false)}
                        />
                      ) : (
                        <AiOutlineEyeInvisible
                          className="eye-icon-line"
                          onClick={() => setShowPassword(true)}
                        />
                      )}
                    </span>
                  </div>
                </span>
              </div>
            </div>
            <div className="form-item vertical">
              <label className="form-label mb-2">Confirm Password</label>
              <div className="">
                <span className="input-wrapper ">
                  <input
                    className="input input-md h-11"
                    type={showconfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    autoComplete="off"
                    placeholder="Confirm Password"
                    value={userData.confirmPassword}
                    onChange={handleChange}
                    style={{ paddingRight: "2.25rem" }}
                  />
                  <div className="input-suffix-end flex justify-center items-center h-full">
                    <span className="cursor-pointer text-xl mb-0">
                      {showconfirmPassword ? (
                        <AiFillEye
                          className="eye-icon-fill"
                          onClick={() => setShowconfirmPassword(false)}
                        />
                      ) : (
                        <AiOutlineEyeInvisible
                          className="eye-icon-line"
                          onClick={() => setShowconfirmPassword(true)}
                        />
                      )}
                    </span>
                  </div>
                </span>
              </div>
            </div>
            <Button
              className="button bg-green-600 hover:bg-green-500 active:bg-green-700 text-white radius-round h-11 px-8 py-2 w-full"
              onClick={() => handleSignUp()}
            >
              Register
            </Button>
            <Social />
          </div>
          {/* </form> */}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignupForm;
