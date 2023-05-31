import React, { useState } from "react";
import { BsChevronDown, BsSearch } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { TbSquareRoundedLetterR } from "react-icons/tb";

function Navbar({ setTheme, theme }) {
  let [open, setOpen] = useState(false);
  let [openJobs, setOpenJobs] = useState(false);
  // const [teaching, setTeaching] = useState(false);
  const [future, setFuture] = useState(false);
  const [explore, setExplore] = useState(false);
  const [teaching, setTeaching] = useState(false);
  const [dropdownContentHover, setDropdownContentHover] = useState(false);

  // const theme = "bg-slate-800";

  const themeChanger = () => {
    console.log("hello world");
    if (theme == "white") {
      setTheme("bg-slate-800");
    } else {
      setTheme("white");
    }
  };

  return (
    <div className="md:flex justify-around p-3 border-b-2 px-20 dark:text-white ">
      <div className="lg:flex justify-between gap-x-4">
        <div className="flex justify-between">
          <img
            src="https://mycenta-dev.netlify.app/images/brand/logo/logo.png"
            alt=""
          />
          <button
            className={`border-b-2 flex md:hidden items-center  ${
              theme === "bg-slate-800"
                ? "bg-slate-800 text-white "
                : "bg-white text-black"
            } justify-center`}
          >
            mega menu <BsChevronDown className="mt-1 ms-" size={14} />
          </button>
        </div>
        <div className="lg:flex items-center hidden ">
        <div>
      <button
        onMouseEnter={() => setExplore(true)}
        onMouseLeave={() => setExplore(false)}
        id="dropdownDelayButton"
        data-dropdown-toggle="dropdownDelay"
        data-dropdown-delay="500"
        data-dropdown-trigger="hover"
        className="border-b-2 md:border-0 bg-blue-400 hover:bg-blue-500 font-medium rounded-lg text-sm px-4 py-2.5 text-center justify-between md:justify-start inline-flex items-center text-white w-full"
        type="button"
      >
        Explore
        <svg
          className="w-4 h-4 ml-2 text-black"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div
        id="dropdownDelay"
        className={`z-10 absolute shadow-lg ${
          theme === "bg-slate-800" ? "bg-gray-500 " : "bg-white"
        } ${explore || dropdownContentHover ? "" : "hidden"} divide-y divide-gray-100 rounded-lg shadow w-[300px]`}
        onMouseEnter={() => setDropdownContentHover(true)}
        onMouseLeave={() => setDropdownContentHover(false)}
      >
       <div
                className={` ${
                  theme === "bg-slate-800"
                    ? "bg-gray-500 text-white "
                    : "bg-white text-black"
                } w-[860px]  `}
              >
                <div className="px-14 ">
                  <h2 className="font-medium pt-6">Learn with Centa</h2>
                  <p>
                    Self paced courses | Expert Masterclasses | Live Training |
                    Webinars
                  </p>
                </div>
                <div className="flex">
                  <ul
                    className="pb-20 pt-10 p-10  text-sm text-gray-700 dark:text-gray-200 w-[300px] shadow-b-lg  shadow-l-lg "
                    aria-labelledby="dropdownDelayButton"
                  >
                    <li className="border-b-2">
                      <a
                        href="#"
                        className={`block px-4 py-1 hover:bg-gray-100  ${
                          theme === "bg-slate-800"
                            ? "text-white "
                            : "text-black"
                        }`}
                      >
                        TEACHING PROFESSIONALS'OLYMPIAD
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className={`block px-4 py-1 hover:bg-gray-100  ${
                          theme === "bg-slate-800"
                            ? "text-white "
                            : "text-black"
                        }`}
                      >
                        About Teaching Professionals'Olympiad
                      </a>
                    </li>
                    <li>
                      <span
                        href="#"
                        className={`block px-4 py-1 hover:bg-gray-100  ${
                          theme === "bg-slate-800"
                            ? "text-white "
                            : "text-black"
                        }`}
                      >
                        Get your CENTA
                        <TbSquareRoundedLetterR /> TQ Score
                      </span>
                    </li>
                    <li>
                      <a
                        href="#"
                        className={`block px-4 py-1 hover:bg-gray-100  ${
                          theme === "bg-slate-800"
                            ? "text-white "
                            : "text-black"
                        }`}
                      >
                        What's happening LIVE?
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className={`block px-4 py-1 hover:bg-gray-100  ${
                          theme === "bg-slate-800"
                            ? "text-white "
                            : "text-black"
                        }`}
                      >
                        Syllabus
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className={`block px-4 py-1 hover:bg-gray-100  ${
                          theme === "bg-slate-800"
                            ? "text-white "
                            : "text-black"
                        }`}
                      >
                        Focused Preparation Materials
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className={`block px-4 py-1 hover:bg-gray-100  ${
                          theme === "bg-slate-800"
                            ? "text-white "
                            : "text-black"
                        }`}
                      >
                        Curious Corner
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className={`block px-4 py-1 hover:bg-gray-100  ${
                          theme === "bg-slate-800"
                            ? "text-white "
                            : "text-black"
                        }`}
                      >
                        Past Events
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className={`block px-4 py-1 hover:bg-gray-100  ${
                          theme === "bg-slate-800"
                            ? "text-white "
                            : "text-black"
                        }`}
                      >
                        Register now
                      </a>
                    </li>
                  </ul>
                  <ul
                    className={`pb-20 pt-10 text-sm p-10 text-gray-700 ${
                      theme === "bg-slate-800" ? "bg-gray-500 " : "bg-white"
                    }  dark:text-gray-200 w-[400px] shadow-b-lg shadow-r-lg `}
                    aria-labelledby="dropdownDelayButton"
                  >
                    <li className="border-b-2">
                      <a
                        href="#"
                        className={`block px-4 py-1 hover:bg-gray-100  ${
                          theme === "bg-slate-800"
                            ? "text-white "
                            : "text-black"
                        }`}
                      >
                        TEACHING PROFESSIONALS'OLYMPIAD
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className={`block px-4 py-1 hover:bg-gray-100  ${
                          theme === "bg-slate-800"
                            ? "text-white "
                            : "text-black"
                        }`}
                      >
                        About Teaching Professionals'Olympiad
                      </a>
                    </li>
                    <li>
                      <span
                        href="#"
                        className={`block px-4 py-1 hover:bg-gray-100  ${
                          theme === "bg-slate-800"
                            ? "text-white "
                            : "text-black"
                        }`}
                      >
                        Get your CENTA
                        <TbSquareRoundedLetterR /> TQ Score
                      </span>
                    </li>
                    <li>
                      <a
                        href="#"
                        className={`block px-4 py-1 hover:bg-gray-100  ${
                          theme === "bg-slate-800"
                            ? "text-white "
                            : "text-black"
                        }`}
                      >
                        What's happening LIVE?
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className={`block px-4 py-1 hover:bg-gray-100  ${
                          theme === "bg-slate-800"
                            ? "text-white "
                            : "text-black"
                        }`}
                      >
                        Syllabus
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className={`block px-4 py-1 hover:bg-gray-100  ${
                          theme === "bg-slate-800"
                            ? "text-white "
                            : "text-black"
                        }`}
                      >
                        Focused Preparation Materials
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className={`block px-4 py-1 hover:bg-gray-100  ${
                          theme === "bg-slate-800"
                            ? "text-white "
                            : "text-black"
                        }`}
                      >
                        Curious Corner
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className={`block px-4 py-1 hover:bg-gray-100  ${
                          theme === "bg-slate-800"
                            ? "text-white "
                            : "text-black"
                        }`}
                      >
                        Past Events
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className={`block px-4 py-1 hover:bg-gray-100  ${
                          theme === "bg-slate-800"
                            ? "text-white "
                            : "text-black"
                        }`}
                      >
                        Register now
                      </a>
                    </li>
                  </ul>
                  <ul
                    className={`pb-20 pt-10 shadow-b-lg p-10 text-sm text-gray-700 dark:text-gray-200 w-[400px] shadow-b-lg shadow-r-lg ${
                      theme === "bg-slate-800" ? "bg-gray-500 " : "bg-white"
                    } `}
                    aria-labelledby="dropdownDelayButton"
                  >
                    <li className="border-b-2">
                      <a
                        href="#"
                        className={`block px-4 py-1 hover:bg-gray-100  ${
                          theme === "bg-slate-800"
                            ? "text-white "
                            : "text-black"
                        }`}
                      >
                        TEACHING PROFESSIONALS'OLYMPIAD
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className={`block px-4 py-1 hover:bg-gray-100  ${
                          theme === "bg-slate-800"
                            ? "text-white "
                            : "text-black"
                        }`}
                      >
                        About Teaching Professionals'Olympiad
                      </a>
                    </li>
                    <li>
                      <span
                        href="#"
                        className={`block px-4 py-1 hover:bg-gray-100  ${
                          theme === "bg-slate-800"
                            ? "text-white "
                            : "text-black"
                        }`}
                      >
                        Get your CENTA
                        <TbSquareRoundedLetterR /> TQ Score
                      </span>
                    </li>
                    <li>
                      <a
                        href="#"
                        className={`block px-4 py-1 hover:bg-gray-100  ${
                          theme === "bg-slate-800"
                            ? "text-white "
                            : "text-black"
                        }`}
                      >
                        What's happening LIVE?
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className={`block px-4 py-1 hover:bg-gray-100  ${
                          theme === "bg-slate-800"
                            ? "text-white "
                            : "text-black"
                        }`}
                      >
                        Syllabus
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className={`block px-4 py-1 hover:bg-gray-100  ${
                          theme === "bg-slate-800"
                            ? "text-white "
                            : "text-black"
                        }`}
                      >
                        Focused Preparation Materials
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className={`block px-4 py-1 hover:bg-gray-100  ${
                          theme === "bg-slate-800"
                            ? "text-white "
                            : "text-black"
                        }`}
                      >
                        Curious Corner
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className={`block px-4 py-1 hover:bg-gray-100  ${
                          theme === "bg-slate-800"
                            ? "text-white "
                            : "text-black"
                        }`}
                      >
                        Past Events
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className={`block px-4 py-1 hover:bg-gray-100  ${
                          theme === "bg-slate-800"
                            ? "text-white "
                            : "text-black"
                        }`}
                      >
                        Register now
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
      </div>
    </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="relative mt-6 md:mt-0">
            <input
              className="border border-gray-400 rounded-md pl-8 p-2"
              type="text"
              placeholder="Search Courses"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <BsSearch className="text-gray-400" />
            </div>
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="md:hidden py-2 mb-5 left-0 mt-2 md:mt-0"
          >
            {!open ? (
              <AiOutlineMenu
                size={34}
                className="border  absolute  border-blue-300 rounded-md text-blue-400 p-1"
              />
            ) : (
              <MdOutlineClose
                size={34}
                className="border   absolute right-4 border-blue-300 rounded-md text-blue-400 p-1"
              />
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <ul
          className={`md:flex gap-x-5  w-full   duration-500 ease-in-out  ${
            open ? "" : "hidden "
          }`}
        >
          <div>
            <button
              onMouseEnter={() => setOpenJobs(true)}
              onMouseLeave={() => setOpenJobs(false)}
              id="dropdownDelayButton"
              data-dropdown-toggle="dropdownDelay"
              data-dropdown-delay="500"
              data-dropdown-trigger="hover"
              className={`font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center justify-between md:justify-start ${
                theme === "bg-slate-800" ? "text-white" : "text-black"
              } border-b-2 md:border-0 w-full`}
              type="button"
            >
              Jobs{" "}
              <svg
                className="w-4 h-4 ml-2"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              id="dropdownDelay"
              className={`z-10 absolute ${
                theme === "bg-slate-800" ? "bg-gray-500 " : "bg-white"
              } ${
                openJobs ? "" : "hidden"
              } divide-y divide-gray-100 rounded-lg shadow w-44`}
              onMouseEnter={() => setOpenJobs(true)}
              onMouseLeave={() => setOpenJobs(false)}
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDelayButton"
              >
                <li>
                  <a
                    href="#"
                    className={`block px-4 py-2 hover:bg-gray-100 ${
                      theme === "bg-slate-800" ? "text-white" : "text-black"
                    }`}
                  >
                    JOBS
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`block px-4 py-2 hover:bg-gray-100 ${
                      theme === "bg-slate-800" ? "text-white" : "text-black"
                    }`}
                  >
                    Find a new career
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`block px-4 py-2 hover:bg-gray-100 ${
                      theme === "bg-slate-800" ? "text-white" : "text-black"
                    }`}
                  >
                    Search for Jobs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`block px-4 py-2 hover:bg-gray-100 ${
                      theme === "bg-slate-800" ? "text-white" : "text-black"
                    }`}
                  >
                    Post a Job
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <button
              onMouseEnter={() => setTeaching(true)}
              onMouseLeave={() => setTeaching(false)}
              id="dropdownDelayButton"
              data-dropdown-toggle="dropdownDelay"
              data-dropdown-delay="500"
              data-dropdown-trigger="hover"
              className={`border-b-2 md:border-0 font-medium rounded-lg text-sm px-4 py-2.5 text-center justify-between md:justify-start inline-flex items-center ${
                theme === "bg-slate-800" ? "text-white" : "text-black"
              } w-full`}
              type="button"
            >
              Teaching Professionals'Olympiad{" "}
              <svg
                className="w-4 h-4 ml-2"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              id="dropdownDelay"
              className={`z-10 absolute ${
                theme === "bg-slate-800" ? "bg-gray-500" : "bg-white"
              } ${
                teaching ? "" : "hidden"
              } divide-y divide-gray-100 rounded-lg shadow w-[400px]`}
              onMouseEnter={() => setTeaching(true)}
              onMouseLeave={() => setTeaching(false)}
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200 w-[400px] shadow-lg"
                aria-labelledby="dropdownDelayButton"
              >
                <li className="">
                  <a
                    href="#"
                    className={`block px-4 py-1 hover:bg-gray-100 ${
                      theme === "bg-slate-800" ? "text-white" : "text-black"
                    }`}
                  >
                    TEACHING PROFESSIONALS'OLYMPIAD
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`block px-4 py-1 hover:bg-gray-100  ${
                      theme === "bg-slate-800" ? "text-white " : "text-black"
                    }`}
                  >
                    About Teaching Professionals'Olympiad
                  </a>
                </li>
                <li>
                  <span
                    href="#"
                    className={`block px-4 py-1 hover:bg-gray-100 flex  ${
                      theme === "bg-slate-800" ? "text-white " : "text-black"
                    }`}
                  >
                    Get your CENTA
                    <TbSquareRoundedLetterR /> TQ Score
                  </span>
                </li>
                <li>
                  <a
                    href="#"
                    className={`block px-4 py-1 hover:bg-gray-100  ${
                      theme === "bg-slate-800" ? "text-white " : "text-black"
                    }`}
                  >
                    What's happening LIVE?
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`block px-4 py-1 hover:bg-gray-100  ${
                      theme === "bg-slate-800" ? "text-white " : "text-black"
                    }`}
                  >
                    Syllabus
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`block px-4 py-1 hover:bg-gray-100  ${
                      theme === "bg-slate-800" ? "text-white " : "text-black"
                    }`}
                  >
                    Focused Preparation Materials
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`block px-4 py-1 hover:bg-gray-100  ${
                      theme === "bg-slate-800" ? "text-white " : "text-black"
                    }`}
                  >
                    Curious Corner
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`block px-4 py-1 hover:bg-gray-100  ${
                      theme === "bg-slate-800" ? "text-white " : "text-black"
                    }`}
                  >
                    Past Events
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`block px-4 py-1 hover:bg-gray-100  ${
                      theme === "bg-slate-800" ? "text-white " : "text-black"
                    }`}
                  >
                    Register now
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <button
              onMouseEnter={() => setFuture(true)}
              onMouseLeave={() => setFuture(false)}
              id="dropdownDelayButton"
              data-dropdown-toggle="dropdownDelay"
              data-dropdown-delay="500"
              data-dropdown-trigger="hover"
              className={`border-b-2 md:border-0 font-medium rounded-lg text-sm px-4 py-2.5 text-center justify-between md:justify-start inline-flex items-center ${
                theme === "bg-slate-800" ? "text-white" : "text-black"
              } w-full`}
              type="button"
            >
              The Future of Teaching{" "}
              <svg
                className="w-4 h-4 ml-2"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              id="dropdownDelay"
              className={`z-10 absolute ${
                theme === "bg-slate-800" ? "bg-gray-500" : "bg-white"
              } ${
                future ? "" : "hidden"
              } divide-y divide-gray-100 rounded-lg shadow w-68`}
              onMouseEnter={() => setFuture(true)}
              onMouseLeave={() => setFuture(false)}
            >
              <ul
                className="py-2 text-sm w-[280px] shadow-lg dark:text-gray-200"
                aria-labelledby="dropdownDelayButton"
              >
                <li>
                  <a
                    href="#"
                    className={`block px-4 py-2 hover:bg-gray-100 flex-nowrap ${
                      theme === "bg-slate-800" ? "text-white" : "text-black"
                    }`}
                  >
                    THE FUTURE OF TEACHING
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`block px-4 py-2 hover:bg-gray-100 ${
                      theme === "bg-slate-800" ? "text-white" : "text-black"
                    }`}
                  >
                    About the Global Initiative
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`block px-4 py-2 hover:bg-gray-100 ${
                      theme === "bg-slate-800" ? "text-white" : "text-black"
                    }`}
                  >
                    Conversations with Global Leaders
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`block px-4 py-2 hover:bg-gray-100 ${
                      theme === "bg-slate-800" ? "text-white" : "text-black"
                    }`}
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`block px-4 py-2 hover:bg-gray-100 ${
                      theme === "bg-slate-800" ? "text-white" : "text-black"
                    }`}
                  >
                    Join the Initiative
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`block px-4 py-2 hover:bg-gray-100 flex ${
                      theme === "bg-slate-800" ? "text-white" : "text-black"
                    }`}
                  >
                    CENTA
                    <TbSquareRoundedLetterR /> ambassadors
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </ul>
      </div>
      <div className={`  md:flex hidden   items-center gap-x-7`}>
        <img
          onClick={themeChanger}
          className="cursor-pointer"
          src="https://mycenta-dev.netlify.app/images/svg/sun.svg"
          alt=""
        />
        <button
          className={`border border-black rounded-md p-2 ${
            theme === "bg-slate-800" ? "text-white " : "text-black"
          }`}
        >
          Sign In
        </button>
      </div>
      <div
        onClick={themeChanger}
        className={` ${
          open ? "flex" : "hidden"
        } md:hidden items-center gap-x-7`}
      >
        <img src="https://mycenta-dev.netlify.app/images/svg/sun.svg" alt="" />
        <button
          className={`border border-black rounded-md p-2 ${
            theme === "bg-slate-800" ? "text-white " : "text-black"
          }`}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Navbar;