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
      <div className=" bg-slate-100 p-2 rounded-full hover:bg-slate-200">
        {searchOpen ? (
          <>
            <BiSearch size={20} onClick={handleChange} />
          </>
        ) : (
          <>
            <RxCross1 size={20} onClick={handleChange} />
          </>
        )}
      </div>
    </>
  );
};

export default Searchbar;
