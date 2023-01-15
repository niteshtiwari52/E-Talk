import React,{useState, Fragment} from 'react';
import { MdPhotoCamera } from "react-icons/md";
import { Dialog, Transition } from "@headlessui/react";
import { useSelector } from "react-redux";

function ImageEdit() {
    const user = useSelector((globalState) => globalState.user.userDetails);
    let [isOpen, setIsOpen] = useState(false);
    const [image, setImage] = useState(null);
    console.log(image)

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const imgHandler = (e) =>{
    const file = e.target.files[0];
    if(file && file.type.substring(0,5)==="image"){
      setImage(file);
    }
    else{
      setImage(null);
    }
  }

  return (
    <>
        <div className="relative">
              <div className="user-profile-img rounded-full overflow-hidden">
                <img src={user.pic} alt="profile" />
              </div>
              <div className="profile-user rounded-full">
                <div
                  className="profile-photo-edit p-2 rounded-full"
                  onClick={openModal}
                >
                  <MdPhotoCamera className="icon text-2xl" />
                </div>
              </div>

              <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="dialog-box relative z-10" onClose={closeModal}>
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

                  <div className="dialog-box-wrapper fixed inset-0 overflow-y-auto">
                    <div className="dialog-box-container flex min-h-full items-center justify-center p-4 text-center">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                      >
                        <Dialog.Panel className="dialog-panel w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                          <Dialog.Title
                            as="h3"
                            className="text-lg font-medium leading-6 text-gray-900"
                          >
                            Update Profile
                          </Dialog.Title>
                         <div>
                         <input 
                         id="profile-img-file-input" 
                         type="file" 
                         name="myFile"
                         className="profile-img-file-input hidden" 
                         accept="image/*"  
                         onChange={(e)=>{
                          imgHandler(e)

                         }}/>
                          <label htmlFor="profile-img-file-input" className="profile-photo-edit mt-2">
                            <div className="border-dashed border-2 border-sky-500 w-full h-48 full flex justify-center items-center">
                             <h5 className="text-black">Choose a file</h5>
                            </div>
                          </label>
                         </div>

                         <div>
                          
                         </div>

                          <div className="mt-4">
                            <button
                              type="button"
                              className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                              onClick={closeModal}
                            >
                              Got it, thanks!
                            </button>
                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </Dialog>
              </Transition>


            </div>
    </>
  )
}

export default ImageEdit