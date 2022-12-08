import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";

const Searchbar = ({ state, setState }) => {
  // const [searchOpen, setSearchOpen] = useState(false);

  const handleChange = () => {
    setState((prev) => !prev);
  };

  return (
    <>
      {/* <BiSearch size={20} onClick={handleChange} /> */}
      <div className=" cursor-pointer bg-slate-100 p-2 rounded-full hover:bg-slate-200">
        {state ? (
          <>
            <BiSearch size={20} onClick={handleChange} />
          </>
        ) : (
          <>
            {/* <RxCross1 size={20} onClick={handleChange} /> */}
            <BiSearch size={20} onClick={handleChange} />
          </>
        )}
      </div>
    </>
  );
};

export default Searchbar;
