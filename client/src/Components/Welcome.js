import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Contact from "../Pages/Contact";
import Features from "../Pages/Features";
import Team from "../Pages/Team";
import { Button } from "../Styles/Button";
import Footer from "./Footer";
import Header from "./Header";



const Welcome = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <div className="container">
          <div className="grid grid-cols-2 gap-36">
            <div className="hero-section-data flex flex-col justify-center ">
              <p className="text-gray-800 text-xl font-bold">Welcome to</p>
              <h1>E-Talk !</h1>
              <p>
                <span className="highlight text-xl font-bold">Desktop App</span> – Easy to use our chat app, Attractive and clean
                design, with many Features Dark & light, Recent Chat And many
                more.......
              </p>
              <div className="mt-10 w-1/2">
                <NavLink to="/auth">
                  <Button className="button hover:scale-105 text-white radius-round px-8 py-2">
                    Get Started
                  </Button>
                </NavLink>
              </div>
            </div>
            <div className="hero-section-image">
              <figure>
                <img src="./images/bg.png" alt="bg" className="img-style" />
              </figure>
            </div>
          </div>
        </div>
        <Features/>
        <Team/>
        <Contact/>
        <Footer/>
      </Wrapper>
     
    </>
  );
};

const Wrapper = styled.section`
  padding: 0rem 9rem;
  position: relative;
  width: 100vw;
  height: auto;
  background-repeat: no-repeat;
  background: ${({ theme }) => theme.colors.bg.primary};
  /* background-image: url("./images/1.jpg"); */
  
  img {
    min-width: 10rem;
    height: 10rem;
  }
  .hero-section-data {
    margin: 0 2rem;
    .highlight{
      color: #1c77ed
    }
    h1 {
      text-transform: capitalize;
      font-weight: bold;
      
    }
    p {
      margin: 1rem 0;
      color: ${({ theme }) => theme.colors.heading};
    }
    .button {
      width: 50%;
      border-radius: 20px;
      background: ${({ theme }) => theme.colors.gradient};
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    .img-style {
      width: 100%;
      height: auto;
    }
  }
  figure {
    position: relative;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0rem 2rem;
    .hero-section-data{
      margin-top: 85px;
    }
    .hero-section-image{
      visibility: hidden;
    }
    .container{
      padding: 1rem
    }
  }
`;

export default Welcome;
