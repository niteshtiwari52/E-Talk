import React from "react";
import styled from "styled-components";

const Setting = () => {
  return (
    <Wrapper className="setting-tab dynamic-sidebar">
      <div className="relative flex items-center chat-menu flex-wrap justify-between w-full ">
        <div>
          <h2>Setting</h2>
          <p>Personal Information</p>
        </div>
        <div className="icon text-right"></div>
      </div>
      <div className="details"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
 animation: fadeInLeft 1s;
`;

export default Setting;
