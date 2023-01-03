import React from "react";
import { BiSearch } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";

const Searchbar = ({ State, setState }) => {
  // const [state, setstate] = useState(false);

  const handleChange = () => {
    setState((prev) => !prev);
  };

  return (
    <>
      {State ? (
        <>
          <div className="input-group flex w-full justify-between bg-gray-100 overflow-hidden">
            <div className=" relative">
              <BiSearch
                className=" absolute top-6 left-1"
                size={20}
                onClick={handleChange}
              />
            </div>
            <input
              type="text"
              className="pl-9 px-5 py-5 bg-gray-100 w-full focus:text-gray-700 focus:outline-none"
              placeholder="Search..."
            />
            <div className=" flex items-center  p-2 cursor-pointer ">
              <RxCross1 size={20} onClick={handleChange} />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="bg-slate-100 hover:bg-slate-200 p-2 rounded-full flex justify-center items-center h-10 w-10 cursor-pointer">
            <BiSearch size={20} onClick={handleChange} />
          </div>
        </>
      )}
    </>
  );
};

export default Searchbar;
