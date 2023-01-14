import React from "react";
import styled from "styled-components";

const Contacts = () => {
  return (
    <Wrapper className="contacts-tab dynamic-sidebar">
      <div className="relative chat-menu flex flex-wrap items-center justify-between w-full ">
        <div>
          <h2>Contacts</h2>
          <p>Start talking now</p>
        </div>
        <div className="icon text-right"></div>
      </div>
      <div className="details">
        <div className="mt-3">
          <div className="flex items-center"></div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
 animation: fadeInLeft 1s;
`;

export default Contacts;
