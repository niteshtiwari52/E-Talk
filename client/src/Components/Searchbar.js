import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";

const Searchbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  const handleChange = () => {
    setSearchOpen((prev) => !prev);
  };

  return (
    <>
        {searchOpen ? (
          <>
            <div className="bg-slate-100 hover:bg-slate-200 p-2 rounded-full flex justify-center items-center h-10 w-10 cursor-pointer" >
            <BiSearch size={20} onClick={handleChange} />
            </div>
          </>
        ) : (
          <div className="input-group flex w-full justify-between bg-gray-100 overflow-hidden">
            <input type="text" className="bg-gray-100 w-full" />
            <div className="bg-slate-100 hover:bg-slate-200  p-2 rounded-full cursor-pointer ">
            <RxCross1 size={20} onClick={handleChange} />
            </div>
          </div>
        )}
    </>
  );
};


export default Searchbar;
