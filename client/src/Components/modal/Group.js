import React from 'react'
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {BiGroup} from "react-icons/bi";

const Group = () => {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }
  return (
    <> <div className='group-icon rounded-full p-2 ' onClick={()=> openModal() }>
        <BiGroup className='icon text-2xl cursor-pointer'/>
    </div>
     <Transition appear show={isOpen} as={Fragment}>
    <Dialog as="div" className="relative z-10" onClose={closeModal}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />
      </Transition.Child>

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                Create New Group
              </Dialog.Title>
              <form action="">
              <div className="mt-2">

                <div className='flex flex-col mb-4'>
                    <label htmlFor="addgroupname-input">Group Name</label>
                    <input id='addgroupname-input' className='addgroupname-input' type="text" placeholder='Enter Group Name' />
                </div>

                <div className='flex flex-col mb-3'>
                <label htmlFor="addgroupdescription-input" className="form-label">Description</label>
                <textarea className="form-control" id="addgroupdescription-input" rows="3" placeholder="Enter Description"></textarea>
                </div>

                <div className='flex flex-col mb-4'>
                <label className="form-label">Group Members</label>
                </div>

                

              </div>
              </form>

              <div className='modal-footer flex justify-end mt-3'>
                <button
                  type="button"
                  className="inline-flex justify-center rounded-md border border-transparent  px-4 py-2 text-sm font-medium text-cyan-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  onClick={closeModal}>
                  Close
                </button>
                <button type='button' className='btn bg-cyan-500 rounded px-4' disabled>Create Group</button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>
    </>
   
  )
}

export default Group