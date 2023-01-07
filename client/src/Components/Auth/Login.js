import React from "react";
import styled from "styled-components";
import LoginForm from "./LoginForm";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <Wrapper className="login-page-bg">
      <div className="h-full flex justify-center items-center">
        <div className="py-6">
          <div className="px-8 flex flex-col justify-center items-center">
            <div className="logo" style={{ width: "auto" }}>
              <img src="/images/logo.png" alt="E-Talk logo" />
            </div>
            <LoginForm />
            <div className="mt-6 text-center">
              <p>
                <span>Don't have an account yet? </span>
                <NavLink
                  className="text-green-500 font-bold  hover:underline"
                  to="/auth/signup"
                >
                  Sign up
                </NavLink>
              </p>
              <p>© 2022 E-Talk created with ❤️ </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  width: 100vw;
  height: auto;
  background-color: #f7f7ff;
  .logo {
    img {
      height: 50px;
    }
  }

  .auth-page-content {
    border-radius: 16px;
    margin: 24px 0;
  }
  .signin-other-title {
    position: relative;
    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      left: 0;
      right: 0;
      top: 15px;
    }
    .title {
      display: inline-block;
      position: relative;
      z-index: 9;
      padding: 2px 16px;
    }
  }
`;

export default Login;
