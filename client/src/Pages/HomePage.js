import React, { Fragment, useEffect, useState } from "react";
import Chat from "../Components/Chat";
import Welcome from "../Components/Welcome";
import DefaultLayoutHoc from "../Layout/DefaultLayout";

// redux
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMySelf } from "../Redux/Reducer/User/user.action";
import { fetchChats } from "../Redux/Reducer/Chat/chat.action";
import Loading from "../Components/Loading";
import { Dialog, Transition } from "@headlessui/react";
import { clearAuthStore } from "../Redux/Reducer/Auth/auth.action";

const HomePage = () => {
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [status, setStatus] = useState();
  let [isOpen, setIsOpen] = useState(false);
  const user = useSelector((globalState) => globalState.user.userDetails);

  const getUserData = async () => {
    await dispatch(getMySelf());
    await dispatch(fetchChats());
  };

  useEffect(() => {
    if (localStorage.ETalkUser) {
      getUserData();
      setTimeout(() => {
        setloading(false);
      }, 1000);
    } else {
      dispatch(clearAuthStore());
      setTimeout(() => {
        setloading(false);
      }, 1000);
    }

    // eslint-disable-next-line
  }, [localStorage]);

  useEffect(() => {
    if (user) {
      setStatus(user.is_verified);
    }
  }, [user]);
  useEffect(() => {
    if (status === undefined) {
      return;
    }
    if (!status) {
      navigate("/verification");
      // alert("mot verified ");
    } else {
      // alert("verified");
    }
  }, [status]);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          {user?.name ? (
            <>
              <Chat />
            </>
          ) : (
            <>
              <Welcome />
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
                            Information
                          </Dialog.Title>

                          {/* create group form */}

                          <div className="modal-footer flex justify-end mt-3">
                            <button
                              type="button"
                              className="close-btn mr-4 inline-flex justify-center rounded-md border border-transparent  px-4 py-2 text-sm font-medium text-cyan-500  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                              onClick={closeModal}
                            >
                              Cancel
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
        </>
      )}
    </>
  );
};

export default DefaultLayoutHoc(HomePage);
