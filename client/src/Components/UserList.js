import React from "react";
import styled from "styled-components";

const UserList = () => {
  return <Wrapper>
  UserList
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nisi quod dignissimos aperiam id autem perspiciatis rem eos? Temporibus libero non vero sit optio odio molestiae voluptatum error accusamus inventore.
  </Wrapper>;
};
const Wrapper = styled.section`
  padding: 1.5rem 1.5rem;
  position: relative;
  max-width: 20%;
  height: 100vh;
  min-width: 20%;
  z-index: 9;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 1.5rem 1.5rem;
    margin-top: 80px;
    position: relative;
    max-width: 100vw;
    min-width: 100vw;
  }
`

export default UserList;
