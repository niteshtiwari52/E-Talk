import React from "react";
import styled from "styled-components";

const ChatWindow = () => {
  return (
    <Wrapper>
      <div className="custom-scroll">chat ChatWindow</div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  max-width: 75%;
  height: 100vh;
  min-width: 75%;
  background-color: ${({ theme }) => theme.colors.bgprimary};
  overflow: hidden;
  .custom-scroll {
    width: 100%;
    position: absolute;
    padding: 30px 30px 0;
    height: auto;
    overflow-x: hidden;
    overflow: visible;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: none;
  }
`;

export default ChatWindow;
