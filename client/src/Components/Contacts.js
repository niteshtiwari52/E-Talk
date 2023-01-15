import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch , useSelector } from "react-redux"; 
import { createChat, fetchUser } from "../Redux/Reducer/Chat/chat.action";

const Contacts = () => {

  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const dispatch = useDispatch() ;
  
  const result = useSelector((globalState) => globalState.chat.newUser);
  // console.log(result)
  useEffect(() => {
    setSearchResult(result);
    // console.log(searchResult)
  
   
  }, [result])
  

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

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
      <div className="details">
        <div className="mt-3">
          <div className="flex flex-col items-center">
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
          {/* user list */}
          <div className="mt-3">
          <div className="flex flex-col">
            <p className=" text-center">List of User</p>
            {searchResult.length !==0 ? (
              searchResult.map((item)=> (
                <div className="p-4 m-2 border-2 border-solid border-red-500" key={item._id} onClick={()=>createNewChat(item)}>{item.name}</div>

              ))
            ) : (
             ""
            ) }
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
