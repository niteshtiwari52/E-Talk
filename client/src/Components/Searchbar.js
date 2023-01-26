import React from "react";
import { BiSearch } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";

const Searchbar = ({ State, setState }) => {


  const handleChange = () => {
    setState((prev) => !prev);
  };

  return (
    <>
      {State ? (
        <>
          <div className="input-group flex w-full justify-between overflow-hidden">
            <div className=" relative">
              <BiSearch
                className="icon absolute top-6 left-1"
                size={20}
              />
            </div>
            <input
              type="text"
              className="w-3/4 pl-9 px-5 py-5 focus:outline-none"
              placeholder="Search..."
            />
            <div className="flex items-center p-2 cursor-pointer ">
              <RxCross1 className="icon" onClick={handleChange} />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="search-icon p-2 rounded-full flex justify-center items-center cursor-pointer">
            <BiSearch className="icon" onClick={handleChange} />
          </div>
        </>
      )}
    </>
  );
};

export default Searchbar;


