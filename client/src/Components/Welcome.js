import React from "react";
import Contact from "./Contact";
import Features from "./Features";
import Team from "./Team";
import Footer from "./Footer";

import Header from "./Header";
import HeroSection from "./HeroSection";
import Technologies from "./Technologies";
import ScrollButton from "./ScrollButton";



const Welcome = () => {
   
  return (
    <>
        <Header />
        <HeroSection />
        <Features  />
        <Technologies/>
        <Team />
        <Contact />
        <ScrollButton />
        <Footer />
    </>
  );
};

export default Welcome;

