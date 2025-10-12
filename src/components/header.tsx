import { Link } from "react-router-dom";

import { useState } from "react";
import { useMediaQuery } from "../hooks";
import { FaBars, FaTimes } from "react-icons/fa";
import { Transition } from "@headlessui/react";
import { DICE, STAR, DARK_NAME } from "../assets";
import { useDispatch, useSelector } from "react-redux";
import { selectDarkMode, setDarkMode } from "../state/slices/globalReducer";
import clsx from "clsx";
function Header() {
  const darkmode = useSelector(selectDarkMode);
  const dispatch = useDispatch();
  const mobile = useMediaQuery("(max-width: 640px)");
  const [open, setOpen] = useState(false);

  const handleScrollToElem = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {mobile ? (
        <div
          className={`w-full top-0 z-50 flex items-center justify-between p-5 transition-colors duration-300 `}
        >
          <Link to={"/"}>
            {/* <img
              src={darkmode ? LIGHT_LOGO : SPARK_LABS}
              className="w-[113.62px] h-[42px]"
              alt=""
            /> */}
          </Link>
          <div onClick={() => setOpen((prev) => !prev)}>
            {open ? (
              <FaTimes color={darkmode ? "white" : "black"} />
            ) : (
              <FaBars color={darkmode ? "white" : "black"} />
            )}
          </div>
          <Transition
            show={open}
            enter="transform transition-transform ease-out duration-300"
            enterFrom="-translate-y-full"
            enterTo="-translate-y-0"
            leave="transform transition-transform ease-in duration-200"
            leaveFrom="-translate-y-0"
            leaveTo="-translate-y-full"
          >
            <div
              className={`absolute bg-black/80 w-full h-[250px] flex items-start flex-col top-20 z-50 shadow-2xl left-0 p-5 gap-y-3`}
            >
              <div
                className={`flex items-start flex-col space-y-5 
                   text-white transition-colors duration-300 font-normal text-[16px]`}
              >
                <Link
                  to={"/"}
                  onClick={() => {
                    handleScrollToElem("projects");
                    setOpen(false);
                  }}
                  className="cursor-pointer"
                >
                  Projects
                </Link>
                <Link
                  to={"/models"}
                  onClick={() => setOpen(false)}
                  className="cursor-pointer"
                >
                  Models, Pricing and Solution
                </Link>
                <Link
                  to={"/contact"}
                  onClick={() => setOpen(false)}
                  className="cursor-pointer"
                >
                  Contact Us
                </Link>
                <Link
                  to={"/"}
                  onClick={() => setOpen(false)}
                  className="cursor-pointer"
                >
                  Book a call
                </Link>
              </div>
              <button
                onClick={() => {
                  if (darkmode) {
                    dispatch(setDarkMode(false));
                  } else {
                    dispatch(setDarkMode(true));
                  }
                }}
                className={clsx(
                  "w-16 h-8 rounded-full flex items-center px-1 lg:hidden transition-colors duration-300",
                  darkmode
                    ? "bg-black justify-end"
                    : "bg-white justify-start border"
                )}
              >
                <div
                  className={clsx(
                    "w-6 h-6 rounded-full transition-all duration-300",
                    darkmode ? "bg-white" : "bg-black"
                  )}
                />
              </button>
            </div>
          </Transition>
        </div>
      ) : (
        <>
          {/* Closed Navigation Bar */}
          <div
            className={clsx(
              "w-[60vw] px-10 py-3 left-1/5 shadow-lg z-50 top-5 rounded-xl bg-white font-inter fixed flex items-center justify-between transition-all duration-300",
              open && "opacity-0 scale-95"
            )}
          >
            <img src={STAR} className="w-[20px] h-[20px]" alt="" />
            <div className="flex items-center justify-between w-[25vw]">
              <span className="text-[16px] font-medium text-[#2E2E2E]">
                About{" "}
              </span>
              <span className="text-[16px] font-medium text-[#2E2E2E]">
                Service
              </span>
              <Link
                to="/projects"
                className="text-[16px] font-medium text-[#2E2E2E]"
              >
                Projects
              </Link>
            </div>
            <img
              src={DICE}
              className="w-[20px] h-[20px] cursor-pointer transition-transform duration-300 hover:rotate-90"
              alt=""
              onClick={() => setOpen(true)}
            />
          </div>

          {/* Animated Overlay */}
          <Transition
            show={open}
            enter="transition-all duration-500 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition-all duration-300 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="fixed inset-0 z-50 bg-blue-50/30 backdrop-blur-sm">
              {/* Glassmorphism Overlay */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="w-full max-w-4xl h-[80vh] bg-white/20 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl relative overflow-hidden">
                  {/* Background Blur Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5"></div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-between p-12">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <img
                          src={DARK_NAME}
                          className="h-8"
                          alt="Bright Emmanuel"
                        />
                        <span className="text-xs text-gray-600">*</span>
                      </div>
                      <img
                        src={DICE}
                        className="w-[20px] h-[20px] cursor-pointer transition-transform duration-300 hover:rotate-90"
                        alt=""
                        onClick={() => setOpen(false)}
                      />
                    </div>

                    {/* Main Navigation Links */}
                    <div className="flex-1 flex items-center">
                      <div className="space-y-2  mt-10">
                        <Transition
                          show={open}
                          enter="transition-all duration-700 ease-out delay-200"
                          enterFrom="opacity-0 translate-x-8"
                          enterTo="opacity-100 translate-x-0"
                        >
                          <Link
                            to="/"
                            className="block text-[31px] tracking-tighter font-semibold text-[#2E2E2E] hover:text-gray-600 transition-colors duration-300"
                            onClick={() => setOpen(false)}
                          >
                            ABOUT
                          </Link>
                        </Transition>

                        <Transition
                          show={open}
                          enter="transition-all duration-700 ease-out delay-300"
                          enterFrom="opacity-0 translate-x-8"
                          enterTo="opacity-100 translate-x-0"
                        >
                          <Link
                            to="/projects"
                            className="block text-[31px] tracking-tighter font-semibold text-[#2E2E2E] hover:text-gray-600 transition-colors duration-300"
                            onClick={() => setOpen(false)}
                          >
                            PROJECTS
                          </Link>
                        </Transition>

                        <Transition
                          show={open}
                          enter="transition-all duration-700 ease-out delay-400"
                          enterFrom="opacity-0 translate-x-8"
                          enterTo="opacity-100 translate-x-0"
                        >
                          <Link
                            to="/contact"
                            className="block text-[31px] tracking-tighter font-semibold text-[#2E2E2E] hover:text-gray-600 transition-colors duration-300"
                            onClick={() => setOpen(false)}
                          >
                            CONTACT
                          </Link>
                        </Transition>

                        <Transition
                          show={open}
                          enter="transition-all duration-700 ease-out delay-500"
                          enterFrom="opacity-0 translate-x-8"
                          enterTo="opacity-100 translate-x-0"
                        >
                          <Link
                            to="/"
                            className="block text-[31px] tracking-tighter font-semibold text-[#2E2E2E] hover:text-gray-600 transition-colors duration-300"
                            onClick={() => setOpen(false)}
                          >
                            WORK WITH ME
                          </Link>
                        </Transition>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center mt-10 justify-between">
                      <div className="flex items-center justify-between w-[70%]">
                        <Transition
                          show={open}
                          enter="transition-all duration-700 ease-out delay-600"
                          enterFrom="opacity-0 translate-y-4"
                          enterTo="opacity-100 translate-y-0"
                        >
                          <a
                            href="#"
                            className="text-xl font-medium text-[#999999] hover:text-gray-800 transition-colors duration-300"
                          >
                            INSTAGRAM
                          </a>
                        </Transition>

                        <Transition
                          show={open}
                          enter="transition-all duration-700 ease-out delay-700"
                          enterFrom="opacity-0 translate-y-4"
                          enterTo="opacity-100 translate-y-0"
                        >
                          <a
                            href="#"
                            className="text-xl font-medium text-[#999999] hover:text-gray-800 transition-colors duration-300"
                          >
                            TIKTOK
                          </a>
                        </Transition>

                        <Transition
                          show={open}
                          enter="transition-all duration-700 ease-out delay-800"
                          enterFrom="opacity-0 translate-y-4"
                          enterTo="opacity-100 translate-y-0"
                        >
                          <a
                            href="#"
                            className="text-xl font-medium text-[#999999] hover:text-gray-800 transition-colors duration-300"
                          >
                            FACEBOOK
                          </a>
                        </Transition>
                      </div>

                      <Transition
                        show={open}
                        enter="transition-all duration-700 ease-out delay-900"
                        enterFrom="opacity-0 translate-y-4"
                        enterTo="opacity-100 translate-y-0"
                      >
                        <div className="text-xl font-medium text-[#999999]">
                          {new Date().toLocaleTimeString("en-US", {
                            hour12: false,
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit",
                          })}{" "}
                          NY
                        </div>
                      </Transition>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </>
      )}
    </>
  );
}

export default Header;
