import React, { useState } from "react";
import styled from "styled-components";
import {Button} from "../Styles/Button"

const Contacts = () => {

  const [search, setSearch] = useState("");
  // const [searchResult, setSearchResult] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleClick = () => {
    if(!search){
      alert("Please Enter valid Email or Name");
      return;
    }

    


    
  }

  return (
    <Wrapper className="contacts-tab dynamic-sidebar">
      <div className="relative chat-menu flex flex-wrap items-center justify-between w-full ">
        <div>
          <h2>Contacts</h2>
          <p>Start talking now</p>
        </div>
        <div className="icon text-right"></div>
      </div>
      <div className="details p-4">
        <div className="mt-3 flex justify-center items-center">
        <div className="flex justify-around items-center w-1/2">
                <input
                    type="text"
                    className="w-96 px-4 mr-3 py-2 focus:outline-none "
                    placeholder="Enter Email or Name"
                    value={search}
                    onChange={handleChange}
                />
                <Button className="btn p-3 text-white rounded " onClick={handleClick}>
                    Get
                </Button>
            </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
 animation: fadeInLeft 1s;

 input {
    color: ${({ theme }) => theme.colors.heading};
    background-color: ${({ theme }) => theme.colors.bg.primary};
    border-bottom: 1px solid ${({ theme }) => theme.colors.heading};
    &:focus{
      background-color: none;
    }
}
.btn{
  background-color:  ${({ theme }) => theme.colors.cyan};
}

`;

export default Contacts;
