import React from 'react';
import {ImBlocked} from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { BiDotsVerticalRounded,} from "react-icons/bi";
import {RiDeleteBin6Line} from "react-icons/ri"

import {Menu} from "@headlessui/react"

const Dropdown = () => {
  return (
    <Menu>
      <Menu.Button className="btn"><BiDotsVerticalRounded /></Menu.Button>
      <Menu.Items className="dropdown-menu absolute py-4 bg-white">
        <Menu.Item>
          {({ active }) => (
            <button
              className={`${active ? 'active bg-gray-100 flex items-center justify-between' : " flex items-center justify-between"}`}>
              <div className="icon-btn btn-outline-primary mr-4">
              <CgProfile className="icon inline" /></div> <h5 className="relative w-full text-left">view contact</h5> 
              </button>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <button
              className={`${active ? 'active bg-gray-100 flex items-center justify-between' : "flex items-center justify-between" }`}
            >
               <div className="icon-btn btn-outline-danger mr-4">
               <RiDeleteBin6Line className="icon inline" /></div> <h5 className="relative w-full text-left">Delete Chat</h5>
            </button>
          )}
        </Menu.Item>
        <Menu.Item>
          {({active})=>(
            <button className={`${active ? 'active bg-gray-100 flex items-center justify-between' : "flex items-center justify-between" }`}> 
            <div className="icon-btn btn-outline-light mr-4">
            <ImBlocked className="icon inline" /></div> <h5 className="relative w-full text-left">Block</h5>
            </button>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
};

export default Dropdown;

                      