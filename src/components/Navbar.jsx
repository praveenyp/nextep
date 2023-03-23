import React, { useState } from "react";
import Logo from "../assets/Nextep logo.png";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-gradient-to-r from-black to-black sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to={"/"}>
                  <img
                    className="md:h-20 h-16 md:w-40 w-32 cursor-pointer"
                    src={Logo}
                    alt="Workflow"
                  />
                </Link>
              </div>
              <div className="hidden md:block ml-10 items-center">
                <div className="ml-0 flex items-baseline space-x-2 pb-3 text-black gap-10">
                  <Link
                    to="/"
                    className=" hover:font-extrabold  rounded-md text-md font-medium text-gray-200 active:text-blue-500"
                  >
                    Home
                  </Link>

                  <Link
                    to="/about"
                    className=" hover:font-extrabold  rounded-md text-md font-medium text-gray-200 active:text-blue-500"
                  >
                    About
                  </Link>
                  <Link
                    to="/solutions"
                    className=" hover:font-extrabold  rounded-md text-md font-medium text-gray-200 active:text-blue-500"
                  >
                    Solutions
                  </Link>

                  <Link
                    to="/products"
                    className=" hover:font-extrabold  rounded-md text-md font-medium text-gray-200 active:text-blue-500"
                  >
                    Products
                  </Link>

                  <Link
                    to="/career"
                    className=" hover:font-extrabold  rounded-md text-md font-medium text-gray-200 active:text-blue-500"
                  >
                    Career
                  </Link>

                  {/* <a
                    href="/"
                    className="text-gray-300  py-0 rounded-md text-sm font-medium"
                  > */}
                  <span className="flex flex-row items-center justify-between gap-10 pl-[200px]">
                    <a href="tel:08029064414">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-8 h-8 text-white dark:text-white pt-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                    </a>
                    <Link to="/contact">
                      <div className="pt-3">
                        <button className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 text-black uppercase">
                          Contact Us
                        </button>
                      </div>
                    </Link>
                  </span>
                  {/* </a> */}
                </div>
              </div>
            </div>
            <div className=" flex md:hidden">
              <div className=" flex flex-row items-center justify-between gap-5 mr-9">
                <a href="tel:08029064414">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-8 h-8 text-white dark:text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </a>
              </div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="text-black px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center justify-center gap-5"
              >
                <Link
                  to="/"
                  className=" hover:font-extrabold  rounded-md text-md font-medium text-white"
                >
                  Home
                </Link>

                <Link
                  to="/about"
                  className=" hover:font-extrabold  rounded-md text-md font-medium text-white"
                >
                  About
                </Link>
                <Link
                  to="/solutions"
                  className=" hover:font-extrabold  rounded-md text-md font-medium text-white"
                >
                  Solutions
                </Link>
                <Link
                  to="/products"
                  className=" hover:font-extrabold  rounded-md text-md font-medium text-white"
                >
                  Products
                </Link>

                <Link
                  to="/career"
                  className=" hover:font-extrabold  rounded-md text-md font-medium text-white"
                >
                  Career
                </Link>

                <a
                  href="#enquiry"
                  className="block px-3 py-2 rounded-md text-base font-medium"
                >
                  <div className="pt-3">
                    <button className=" bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 text-black uppercase">
                      <Link to="/contact">Contact Us</Link>
                    </button>
                  </div>
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </>
  );
};

export default Navbar;
