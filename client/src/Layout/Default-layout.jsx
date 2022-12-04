import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const DefaultLayoutHoc =
  (Component) =>
  ({ ...props }) => {
    return (
      <>            
        <Navbar />
        <Component {...props} />
        <Footer/>
      </>
    );
  };

export default DefaultLayoutHoc;
