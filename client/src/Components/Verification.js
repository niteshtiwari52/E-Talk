import React, { useEffect, useState, Fragment } from "react";
import { GoUnverified, GoVerified, GoMailRead, GoMail } from "react-icons/go";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Dialog, Transition } from "@headlessui/react";

import { useNavigate } from "react-router-dom";
import { getMySelf } from "../Redux/Reducer/User/user.action";
import { userVerification } from "../Redux/Reducer/Auth/auth.action";

const Verification = () => {
  const [status, setStatus] = useState(true);
  let [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(
    "Your Email is not Verified. A verification link has been sent to your Email. Check your Email to verify your Account"
  );
  const [userData, setUserData] = useState({
    email: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function closeModal() {
    setUserData({
      email: "",
    });
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  useEffect(() => {
    if (localStorage.ETalkUser) {
      dispatch(getMySelf());

      // dispatch(fetchChats());
    }
    // eslint-disable-next-line
  }, [localStorage]);
  const user = useSelector((globalState) => globalState.user.userDetails);
  const result = useSelector((globalState) => globalState.auth.message);

  useEffect(() => {
    if (user) {
      setStatus(user.is_verified);
      // console.log(user.email);
      // dispatch(userVerification(user));
    }
  }, [user]);

  useEffect(() => {
    if (status) {
      navigate("/");
    }
  }, [status]);

  useEffect(() => {
    if (result) {
      setMessage(result);
    }
  }, [result]);

  const handleChange = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sendMail = () => {
    if (userData.email === null || userData.email === "") {
      alert("please enter a valid email");
      return;
    }
    // alert(userData.email);
    dispatch(userVerification(userData));
    // const infoMessage = `A verification mail is resend to your email ${userData.email} . Kindly Check your Spam or Junk Folder.`;

    setIsOpen(false);
    setUserData({
      email: "",
    });
  };

  return (
    <>
      <div className="m-4 p-4 h-full flex flex-col items-center justify-center">
        {status ? (
          <>
            <div className="flex flex-col items-center justify-center w-2/4 ">
              <GoMailRead className="w-3/4 h-3/4 red" color="#8af859" />
              <p className="text-2xl text-gray-900 dark:text-white my-2">
                Your Email is Verified Now.
              </p>
            </div>
            <h1></h1>
          </>
        ) : (
          <>
            <div className="flex flex-col items-center justify-center w-3/4">
              <GoMail className="w-2/4 h-2/4 red" color="#faab07" />

              <p className="text-2xl text-gray-900 dark:text-white my-2 px-2 mx-auto align-middle">
                {message}
              </p>
              <p className="text-2xl text-gray-900 dark:text-white my-2 px-2 mx-auto align-middle">
                OR
              </p>
              {/* <p className="text-2xl text-gray-900 dark:text-white my-2 px-2 mx-auto align-middle">
                Verification Link
              </p> */}
              <span
                className="text-2xl cursor-pointer text-blue-500 dark:text-white my-2 px-2 mx-auto align-middle"
                onClick={() => openModal()}
              >
                Resend
              </span>
            </div>
            <Transition className="box" appear show={isOpen} as={Fragment}>
              <Dialog
                as="div"
                className="dialog-box relative z-10"
                onClose={closeModal}
              >
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

                <div className="dialog-wrapper fixed inset-0 overflow-y-auto">
                  <div className="dialog-container flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="dialog-panel w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                          as="h3"
                          className="text-lg text-center font-medium leading-6 text-gray-900"
                        >
                          Resend Verification Mail
                        </Dialog.Title>

                        {/* Resend verification mail  */}

                        <div className="mt-4">
                          <div>
                            <div className="mb-6">
                              <label
                                htmlFor="base-input"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                Enter your Email
                              </label>
                              <input
                                type="email"
                                id="base-input"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="e.g. test@gmail.com"
                                value={userData.email}
                                name="email"
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="modal-footer flex justify-end mt-3">
                          <button
                            type="button"
                            className="close-btn mr-4 inline-flex justify-center rounded-md border border-transparent  px-4 py-2 text-sm font-medium text-cyan-500  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeModal}
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            className="btn bg-cyan-500 rounded px-4"
                            // disabled
                            onClick={() => sendMail()}
                          >
                            Send
                          </button>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </>
        )}
      </div>
    </>
  );
};

export default Verification;
