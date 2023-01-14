import React, { useState } from "react";
import styled from "styled-components";

const Contacts = () => {

  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

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
      <div className="details">
        <div className="mt-3">
          <div className="flex items-center">
            {/* search bar */}
          <div className="flex items-center">
            <div className="flex border border-purple-200 rounded">
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Enter Email or Name"
                    value={search}
                    onChange={handleChange}
                />
                <button className="px-4 text-white bg-purple-600 border-l rounded " onClick={handleClick}>
                    Get User
                </button>
            </div>
        </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
 animation: fadeInLeft 1s;
`;

export default Contacts;
