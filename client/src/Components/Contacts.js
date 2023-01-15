import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {Button} from "../Styles/Button"
import {useDispatch , useSelector} from "react-redux"
import { createChat, fetchUser } from "../Redux/Reducer/Chat/chat.action";

const Contacts = () => {
  const dispatch = useDispatch();


  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const result = useSelector((globalState) => globalState.chat.newUser)

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
   setSearchResult(result)
  
   
  }, [result])
  

  const handleClick = () => {
    if(!search){
      alert("Please Enter valid Email or Name");
      return;
    }
    dispatch(fetchUser(search));    
  }
  const createNewChat = (item) => {
    dispatch(createChat(item._id));
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
        {/* searched user rendering */}
        {(searchResult.length !== 0) ? (
          searchResult.map((item) => (
            <div className="border-2 border-red-500 m-3 p-2" onClick={createNewChat(item)} >{item.name}</div>
          ))
        ) : ("")}
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
