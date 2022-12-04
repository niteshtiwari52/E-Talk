import React from 'react';
import { NavLink } from "react-router-dom";
import Social from "../Styles/Social";
import { Button } from "../Styles/Button";

const LoginForm = () => {
  return (
    <div className="auth-page-content col-span-2 flex flex-col justify-center items-center bg-white">
          <div className="xl:min-w-[450px] px-8">
            <div className="mb-8"></div>
            <div className="mb-8">
              <h3 className="mb-1 text-center">Welcome back !</h3>
              <p className="text-center">Sign in to continue...</p>
            </div>
            <div className='bg-white p-8 card'>
              <form action="#">
                <div className="form-container vertical mb-2">
                  <div className="form-item vertical">
                    <label className="form-label mb-2">User Name</label>
                    <div className="">
                      <input
                        className="input input-md h-11 focus:ring-green-600 focus-within:ring-green-600 focus-within:border-green-600 focus:border-green-600"
                        type="text"
                        name="userName"
                        autocomplete="off"
                        placeholder="User Name"
                        value=""
                      />
                    </div>
                  </div>
                  <div className="form-item vertical">
                   <div className='mb-2 flex justify-between'> 
                   <label className="form-label">Password</label>
                    <span>
                   <NavLink
                      className="text-gray-600 hover:underline"
                      to="/forgot-password"
                    >
                      Forgot Password?
                    </NavLink>
                    </span>
                   </div>
                    <div className="">
                      <span className="input-wrapper ">
                        <input
                          className="input input-md h-11 focus:ring-green-600 focus-within:ring-green-600 focus-within:border-green-600 focus:border-green-600"
                          type="password"
                          name="password"
                          autocomplete="off"
                          placeholder="Password"
                          value=""
                          style={{ paddingRight: "2.25rem" }}
                        />
                        <div className="input-suffix-end">
                          <span className="cursor-pointer text-xl">
                            <svg
                              stroke="currentColor"
                              fill="none"
                              stroke-width="0"
                              viewBox="0 0 24 24"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                              ></path>
                            </svg>
                          </span>
                        </div>
                      </span>
                    </div>
                  </div>
                  <div className=" mb-6">
                    <label className="checkbox-label mb-0">
                      <input
                        className="checkbox text-green-600"
                        type="checkbox"
                        name=""
                        value=""
                      />
                      <span className="ml-2">Remember Me</span>
                    </label>
                   
                  </div>
                  <Button
                    className="button bg-green-600 hover:bg-green-500 active:bg-green-700 text-white radius-round h-11 px-8 py-2 w-full"
                    type="submit"
                  >
                    Log In
                  </Button>
                  <Social/>
                </div>
              </form>
            
            </div>
          </div>
        </div>
  )
}

export default LoginForm