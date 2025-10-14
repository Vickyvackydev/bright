import { Link } from "react-router-dom";

import { useState } from "react";
//
import { Transition } from "@headlessui/react";
import { DICE, STAR, DARK_NAME } from "../assets";
//
import clsx from "clsx";
function Header() {
  // Removed unused hooks to satisfy linter and simplify component
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Closed Navigation Bar */}
      <div
        className={clsx(
          "fixed top-5 z-50 shadow-lg rounded-xl bg-white font-inter flex items-center justify-between transition-all duration-300",
          "w-[92vw] sm:w-[85vw] md:w-[70vw] lg:w-[60vw]",
          "px-4 sm:px-6 md:px-8 lg:px-10 py-2.5 md:py-3",
          "left-1/2 -translate-x-1/2 md:left-1/5 md:translate-x-0",
          open && "opacity-0 scale-95"
        )}
      >
        <Link to={"/"}>
          <img src={STAR} className="w-[20px] h-[20px]" alt="" />
        </Link>
        <div className="hidden md:flex items-center justify-between w-auto gap-x-10">
          <span className="text-sm md:text-[16px] font-medium text-[#2E2E2E]">
            About{" "}
          </span>
          <span className="text-sm md:text-[16px] font-medium text-[#2E2E2E]">
            Service
          </span>
          <Link
            to="/projects"
            className="text-sm md:text-[16px] font-medium text-[#2E2E2E]"
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
                <div className="flex items-center lg:flex-row flex-col mt-10 justify-between">
                  <div className="flex items-center lg:flex-row flex-col justify-between w-[70%]">
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
  );
}

export default Header;
