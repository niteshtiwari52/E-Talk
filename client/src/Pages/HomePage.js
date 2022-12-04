import React from "react";
import DefaultLayoutHoc from "../Layout/DefaultLayout";

const HomePage = () => {
  return (
    <>
      <h1 className=" text-center text-4xl mt-20 align-middle">
        WelCome to E-Talk !
      </h1>
    </>
  );
};

export default DefaultLayoutHoc(HomePage);
