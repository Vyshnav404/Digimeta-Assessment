import React, { useState } from "react";
import { BsChevronDown, BsSearch } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { TbSquareRoundedLetterR} from "react-icons/tb";

function Navbar({setTheme,theme}) {
  let [open, setOpen] = useState(false);
  let [openJobs, setOpenJobs] = useState(false);
  const [teaching , setTeaching] = useState(false)
  const [future,setFuture] = useState(false)
  const [explore,setExplore] = useState(false)
const themeChanger = () =>{
  console.log("hello world")
  if(theme=="white"){
  setTheme("bg-slate-800")
  }else{
    setTheme("white")
  }
}


  return (
    <div className="md:flex justify-around p-3 border-b-2 px-20 dark:text-white ">
      <div className="lg:flex justify-between gap-x-4">
       <div className="flex justify-between">
        
        <img
          src="https://mycenta-dev.netlify.app/images/brand/logo/logo.png"
          alt=""
        />
        <button className="border-b-2 flex md:hidden items-center justify-center">mega menu <BsChevronDown className="mt-1 ms-" size={14}/></button>
        </div> 
        <div className="lg:flex items-center hidden ">
        <div >

<button onMouseOver={()=>setExplore(!explore)}  onMouseOverCapture={()=>setExplore(false)} id="dropdownDelayButton" data-dropdown-toggle="dropdownDelay" data-dropdown-delay="500" data-dropdown-trigger="hover" className="border-b-2 md:border-0  bg-blue-400 hover:bg-blue-500  font-medium rounded-lg text-sm px-4 py-2.5 text-center justify-between md:justify-start inline-flex items-center text-white   w-full" type="button">Explore<svg className="w-4 h-4 ml-2 text-black" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
<div id="dropdownDelay" className={`z-10  absolute  ${theme  === "bg-slate-800" ? "bg-gray-500 " : "bg-white" } ${explore ? "" : "hidden"} divide-y divide-gray-100 rounded-lg shadow w-[300px]`}>


  <div className="flex justify-between">


  <ul className="py-20 p-10  text-sm text-gray-700 dark:text-gray-200 w-[400px] shadow-b-lg  shadow-l-lg " aria-labelledby="dropdownDelayButton">
<li className="">
  <a href="#" className={`block px-4 py-1 hover:bg-gray-100  ${theme  === "bg-slate-800" ?  "text-white " : "text-black"}`}>TEACHING PROFESSIONALS'OLYMPIAD</a>
</li>
<li>
  <a href="#" className={`block px-4 py-1 hover:bg-gray-100  ${theme  === "bg-slate-800" ?  "text-white " : "text-black"}`} >About Teaching Professionals'Olympiad</a>
</li>
<li>
  <span href="#" className={`block px-4 py-1 hover:bg-gray-100  ${theme  === "bg-slate-800" ?  "text-white " : "text-black"}`}>Get your CENTA<TbSquareRoundedLetterR/>  TQ Score</span>
</li>
<li>
  <a href="#" className={`block px-4 py-1 hover:bg-gray-100  ${theme  === "bg-slate-800" ?  "text-white " : "text-black"}`} >What's happening LIVE?</a>
</li>
<li>
  <a href="#" className={`block px-4 py-1 hover:bg-gray-100  ${theme  === "bg-slate-800" ?  "text-white " : "text-black"}`} >Syllabus</a>
</li>
<li>
  <a href="#" className={`block px-4 py-1 hover:bg-gray-100  ${theme  === "bg-slate-800" ?  "text-white " : "text-black"}`} >Focused Preparation Materials</a>
</li>
<li>
  <a href="#" className={`block px-4 py-1 hover:bg-gray-100  ${theme  === "bg-slate-800" ?  "text-white " : "text-black"}`} >Curious Corner</a>
</li>
<li>
  <a href="#" className={`block px-4 py-1 hover:bg-gray-100  ${theme  === "bg-slate-800" ?  "text-white " : "text-black"}`} >Past Events</a>
</li>
<li>
  <a href="#" className={`block px-4 py-1 hover:bg-gray-100  ${theme  === "bg-slate-800" ?  "text-white " : "text-black"}`} >Register now</a>
</li>
</ul>
  <ul className={`py-20 text-sm p-10 text-gray-700 ${theme  === "bg-slate-800" ? "bg-gray-500 " : "bg-white" } dark:text-gray-200 w-[400px] shadow-b-lg shadow-r-lg `} aria-labelledby="dropdownDelayButton">
<li className="">
  <a href="#" className={`block px-4 py-1 hover:bg-gray-100  ${theme  === "bg-slate-800" ?  "text-white " : "text-black"}`} >TEACHING PROFESSIONALS'OLYMPIAD</a>
</li>
<li>
  <a href="#" className={`block px-4 py-1 hover:bg-gray-100  ${theme  === "bg-slate-800" ?  "text-white " : "text-black"}`} >About Teaching Professionals'Olympiad</a>
</li>
<li>
  <span href="#" className={`block px-4 py-1 hover:bg-gray-100  ${theme  === "bg-slate-800" ?  "text-white " : "text-black"}`}>Get your CENTA<TbSquareRoundedLetterR/>  TQ Score</span>
</li>
<li>
  <a href="#" className={`block px-4 py-1 hover:bg-gray-100  ${theme  === "bg-slate-800" ?  "text-white " : "text-black"}`} >What's happening LIVE?</a>
</li>
<li>
  <a href="#" className={`block px-4 py-1 hover:bg-gray-100  ${theme  === "bg-slate-800" ?  "text-white " : "text-black"}`} >Syllabus</a>
</li>
<li>
  <a href="#" className={`block px-4 py-1 hover:bg-gray-100  ${theme  === "bg-slate-800" ?  "text-white " : "text-black"}`} >Focused Preparation Materials</a>
</li>
<li>
  <a href="#" className={`block px-4 py-1 hover:bg-gray-100  ${theme  === "bg-slate-800" ?  "text-white " : "text-black"}`} >Curious Corner</a>
</li>
<li>
  <a href="#" className={`block px-4 py-1 hover:bg-gray-100  ${theme  === "bg-slate-800" ?  "text-white " : "text-black"}`} >Past Events</a>
</li>
<li>
  <a href="#" className={`block px-4 py-1 hover:bg-gray-100  ${theme  === "bg-slate-800" ?  "text-white " : "text-black"}`} >Register now</a>
</li>
</ul>
  <ul className={`py-20 shadow-b-lg p-10 text-sm text-gray-700 dark:text-gray-200 w-[400px] shadow-b-lg shadow-r-lg ${theme  === "bg-slate-800" ? "bg-gray-500 " : "bg-white" } `} aria-labelledby="dropdownDelayButton">
<li className="">
  <a href="#" className={`block px-4 py-1 hover:bg-gray-100  ${theme  === "bg-slate-800" ?  "text-white " : "text-black"}`} >TEACHING PROFESSIONALS'OLYMPIAD</a>
</li>
<li>
  <a href="#" className={`block px-4 py-1 hover:bg-gray-100  ${theme  === "bg-slate-800" ?  "text-white " : "text-black"}`} >About Teaching Professionals'Olympiad</a>
</li>
<li>
  <span href="#" className={`block px-4 py-1 hover:bg-gray-100  ${theme  === "bg-slate-800" ?  "text-white " : "text-black"}`}>Get your CENTA<TbSquareRoundedLetterR/>  TQ Score</span>
</li>
<li>
  <a href="#" className={`block px-4 py-1 hover:bg-gray-100  ${theme  === "bg-slate-800" ?  "text-white " : "text-black"}`} >What's happening LIVE?</a>
</li>
<li>
  <a href="#" className={`block px-4 py-1 hover:bg-gray-100  ${theme  === "bg-slate-800" ?  "text-white " : "text-black"}`} >Syllabus</a>
</li>
<li>
  <a href="#" className={`block px-4 py-1 hover:bg-gray-100  ${theme  === "bg-slate-800" ?  "text-white " : "text-black"}`} >Focused Preparation Materials</a>
</li>
<li>
  <a href="#" className={`block px-4 py-1 hover:bg-gray-100  ${theme  === "bg-slate-800" ?  "text-white " : "text-black"}`} >Curious Corner</a>
</li>
<li>
  <a href="#" className={`block px-4 py-1 hover:bg-gray-100  ${theme  === "bg-slate-800" ?  "text-white " : "text-black"}`} >Past Events</a>
</li>
<li>
  <a href="#" className={`block px-4 py-1 hover:bg-gray-100  ${theme  === "bg-slate-800" ?  "text-white " : "text-black"}`} >Register now</a>
</li>
</ul>
</div>
</div>
</div>
        </div>
        <div className="flex items-center">
          <div className="relative">
            <input
              className="border border-gray-400 rounded-md pl-8 p-2"
              type="text"
              placeholder="Search Courses"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <BsSearch className="text-gray-400" />
            </div>
          </div>

          <div onClick={() => setOpen(!open)} className="md:hidden mb-5">
            {!open ? (
              <AiOutlineMenu
                size={34}
                className="border mx-2 absolute right-4 border-blue-300 rounded-md text-blue-400 p-1"
              />
            ) : (
              <MdOutlineClose
                size={34}
                className="border mx-2 absolute right-4 border-blue-300 rounded-md text-blue-400 p-1"
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

<button onMouseOver={()=>setOpenJobs(!openJobs)}  onMouseOverCapture={()=>setOpenJobs(false)} id="dropdownDelayButton" data-dropdown-toggle="dropdownDelay" data-dropdown-delay="500" data-dropdown-trigger="hover" className={`  font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center justify-between md:justify-start  ${theme ==="bg-slate-800"  ? "text-white" :"text-black"}  border-b-2 md:border-0  w-full` }type="button">Jobs <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
<div id="dropdownDelay" className={`z-10  absolute  ${theme  === "bg-slate-800" ? "bg-gray-500 " : "bg-white" } ${openJobs ? "" : "hidden"}  divide-y divide-gray-100 rounded-lg shadow w-44 `}>
<ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
<li>
  <a href="#" className={`block px-4 py-2 hover:bg-gray-100  ${theme  === "bg-slate-800" ?  "text-white " : "text-black"}`}>JOBS</a>
</li>
<li>
  <a href="#" className={`block px-4 py-2 hover:bg-gray-100  ${theme  === "bg-slate-800" ?  "text-white " : "text-black"}`}>Find a new career</a>
</li>
<li>
  <a href="#" className={`block px-4 py-2 hover:bg-gray-100  ${theme  === "bg-slate-800" ?  "text-white " : "text-black"}`}>Search for Jobs</a>
</li>
<li>
  <a href="#" className={`block px-4 py-2 hover:bg-gray-100  ${theme  === "bg-slate-800" ?  "text-white " : "text-black"}`}>Post a Job</a>
</li>
</ul>
</div>
</div>
       
<div >

<button onMouseOver={()=>setTeaching(!teaching)}  onMouseOverCapture={()=>setTeaching(false)} id="dropdownDelayButton" data-dropdown-toggle="dropdownDelay" data-dropdown-delay="500" data-dropdown-trigger="hover" className={`border-b-2 md:border-0    font-medium rounded-lg text-sm px-4 py-2.5 text-center justify-between md:justify-start inline-flex items-center  ${theme ==="bg-slate-800"  ? "text-white" :"text-black"}     w-full`} type="button">Teaching Professionals'Olympiad <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
<div id="dropdownDelay" className={`z-10  absolute   ${theme  === "bg-slate-800" ? "bg-gray-500 " : "bg-white" }  ${teaching ? "" : "hidden"} divide-y divide-gray-100 rounded-lg shadow w-[300px]`}>
<ul className="py-2 text-sm text-gray-700 dark:text-gray-200 w-[400px] shadow-lg " aria-labelledby="dropdownDelayButton">
<li className="">
  <a href="#" className={`block px-4 py-1 hover:bg-gray-100  ${theme  === "bg-slate-800" ?  "text-white " : "text-black"}`}>TEACHING PROFESSIONALS'OLYMPIAD</a>
</li>
<li>
  <a href="#" className={`block px-4 py-1 hover:bg-gray-100  ${theme  === "bg-slate-800" ?  "text-white " : "text-black"}`}>About Teaching Professionals'Olympiad</a>
</li>
<li>
  <span href="#" className={`block px-4 py-1 hover:bg-gray-100  ${theme  === "bg-slate-800" ?  "text-white " : "text-black"}`}>Get your CENTA<TbSquareRoundedLetterR/>  TQ Score</span>
</li>
<li>
  <a href="#" className={`block px-4 py-1 hover:bg-gray-100  ${theme  === "bg-slate-800" ?  "text-white " : "text-black"}`}>What's happening LIVE?</a>
</li>
<li>
  <a href="#" className={`block px-4 py-1 hover:bg-gray-100  ${theme  === "bg-slate-800" ?  "text-white " : "text-black"}`}>Syllabus</a>
</li>
<li>
  <a href="#" className={`block px-4 py-1 hover:bg-gray-100  ${theme  === "bg-slate-800" ?  "text-white " : "text-black"}`}>Focused Preparation Materials</a>
</li>
<li>
  <a href="#" className={`block px-4 py-1 hover:bg-gray-100  ${theme  === "bg-slate-800" ?  "text-white " : "text-black"}`}>Curious Corner</a>
</li>
<li>
  <a href="#" className={`block px-4 py-1 hover:bg-gray-100  ${theme  === "bg-slate-800" ?  "text-white " : "text-black"}`}>Past Events</a>
</li>
<li>
  <a href="#" className={`block px-4 py-1 hover:bg-gray-100  ${theme  === "bg-slate-800" ?  "text-white " : "text-black"}`}>Register now</a>
</li>
</ul>
</div>
</div>
<div>

<button onMouseOver={()=>setFuture(!future)} onMouseOverCapture={()=>setFuture(false)} id="dropdownDelayButton" data-dropdown-toggle="dropdownDelay" data-dropdown-delay="500" data-dropdown-trigger="hover" className={  ` border-b-2 md:border-0   font-medium rounded-lg text-sm px-4 py-2.5 text-center  justify-between md:justify-start inline-flex items-center ${theme ==="bg-slate-800"  ? "text-white" :"text-black"}   w-full`} type="button">The Future of Teaching <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
<div id="dropdownDelay" className={`z-10  absolute  ${theme  === "bg-slate-800" ? "bg-gray-500 " : "bg-white" } ${future ? "" : "hidden"} divide-y divide-gray-100 rounded-lg shadow w-44 `}>
<ul className="py-2 text-sm  dark:text-gray-200" aria-labelledby="dropdownDelayButton">
<li>
  <a href="#" className={`block px-4 py-2  hover:bg-gray-100  ${theme  === "bg-slate-800" ?  "text-white " : "text-black"}`}>THE FUTURE OF TEACHING</a>
</li>
<li>
  <a href="#" className={`block px-4 py-2  hover:bg-gray-100  ${theme  === "bg-slate-800" ?  "text-white " : "text-black"}`}>About the Global Initiative</a>
</li>
<li>
  <a href="#" className={`block px-4 py-2  hover:bg-gray-100  ${theme  === "bg-slate-800" ?  "text-white " : "text-black"}`}>Conversations with Global Leaders</a>
</li>
<li>
  <a href="#" className={`block px-4 py-2  hover:bg-gray-100  ${theme  === "bg-slate-800" ?  "text-white " : "text-black"}`}>Events</a>
</li>
<li>
  <a href="#" className={`block px-4 py-2  hover:bg-gray-100  ${theme  === "bg-slate-800" ?  "text-white " : "text-black"}`}>Join the Initiative</a>
</li>
<li>
  <a href="#" className={`block px-4 py-2  hover:bg-gray-100  ${theme  === "bg-slate-800" ?  "text-white " : "text-black"}`}>CENTA<TbSquareRoundedLetterR/>  ambassodors</a>
</li>
</ul>
</div>
</div>
        </ul>
      </div>
      <div className={`  md:flex hidden   items-center gap-x-7`}>
        <img onClick={themeChanger} className="cursor-pointer" src="https://mycenta-dev.netlify.app/images/svg/sun.svg" alt="" />
        <button className="border border-black rounded-md p-2">Sign In</button>
      </div>
      <div onClick={themeChanger} className={` ${open ? "flex" : "hidden"} md:hidden items-center gap-x-7`}>
        <img src="https://mycenta-dev.netlify.app/images/svg/sun.svg" alt="" />
        <button className="border border-black rounded-md p-2">Sign In</button>
      </div>
    </div>
  );
}

export default Navbar;
