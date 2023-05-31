import React from 'react';
import { FcCheckmark } from "react-icons/fc";
import { BsPlay } from "react-icons/bs";
import { FiCompass, FiUsers } from "react-icons/fi";
import { SlBadge } from "react-icons/sl";
import { FiHome } from "react-icons/fi";

function Main({theme}) {
  return (
    <>
    <div className="grid grid-cols-5  md:p-24  dark:text-white ">
  
    <div className="lg:col-span-2 col-span-5">
      <div className='flex items-center'>
    <span className='bg-green-200 rounded-full mx-2  h-4 w-4 flex justify-center items-center'>
    <FcCheckmark size={12}/> 
      </span>
       <p className={` my-2   font-medium my-2 ${theme === "bg-slate-800" ? "text-white" : "text-gray-800"} `}> Join a global community of teachers and school leaders.</p>
        </div>
      <h1 className={`text-5xl my-2 font-bold  ${theme === "bg-slate-800" ? "text-white" : "text-gray-800"} `}>Unlock your teaching </h1> <h1 className="text-5xl font-bold "> potential, join us today</h1>
      <p className={` ${theme === "bg-slate-800" ? "text-white" : "text-gray-800"}  my-4 `}>Expand your teaching career with our comprehensive catalog of courses and certifications, designed to help you start, advance and enhance your career.</p>
  
  
    <div className="my-7 flex">
      <div className='flex items-center'>

        <button className="bg-blue-400 rounded text-white font-medium  p-2  ">Join free Now</button>
      </div>
    <div className='flex'>
      <div className='bg-blue-400 border border-blue-200 rounded-full w-8 h-8 m-3 items-center flex justify-center'>
      <BsPlay color='white' size={20}/>
      </div>
    <button className={`${theme  === "bg-slate-800" ?  "text-white " : "text-black"}`}> watch overview</button>
      </div> 
    </div>
    
     <div className="flex  ">
       <img  src="https://mycenta-dev.netlify.app/images/svg/appstore.svg" className="me-4 " alt="" />
       <img src="https://mycenta-dev.netlify.app/images/svg/playstore.svg" alt=""/>
      
     </div>
    </div>
  
  
  
  
  
    <div className="col-span-5 md:col-span-3 mt-10 lg:mt-0 flex justify-center  ">
      <div className=" relative  flex ">
        
        <img src="https://mycenta-dev.netlify.app/images/background/acedamy-img/bg-thumb.svg" alt=""/>
        <img src="https://mycenta-dev.netlify.app/images/background/acedamy-img/girl-image-2.png"  className="absolute  end-0 bottom-0" alt=""/>
         <img src="https://mycenta-dev.netlify.app/images/background/acedamy-img/frame-1.svg"  className="absolute  top-0 start-36 md:start-56 " alt="" />
         <img src="https://mycenta-dev.netlify.app/images/background/acedamy-img/frame-2.svg" className="absolute -start-28  -bottom-12 " alt="" />
       <img src="https://mycenta-dev.netlify.app/images/background/acedamy-img/target.svg" className="absolute bottom-16 -end-4  md:-end-28 " alt=""/>
       <img src="https://mycenta-dev.netlify.app/images/background/acedamy-img/sound.svg" className="absolute top-32 -start-32" alt=""  />
       <img src="https://mycenta-dev.netlify.app/images/background/acedamy-img/trophy.svg" className="absolute top-1 -start-24    " alt="" />
  
      </div>
    </div>
  </div>
  <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  md:border-b-2 md:border-t-2 mx-28 ">
    <div  className="md:border-r-2  border-b-2 flex flex-col items-center     p-16" >
    <SlBadge size={44} className='text-blue-400'/>
    <h1 className='font-medium text-2xl'>31600 +</h1>
    <p>Centa certificate</p>
    </div>
    <div  className="lg:border-r-2 border-b-2 flex flex-col items-center     p-16" >
    <FiUsers size={44} color='orange '/>
    <h1 className='font-medium text-2xl'>1 Million</h1>
    <p>Teachers</p>
    </div>
    <div  className="md:border-r-2 flex flex-col items-center     p-16" >
    <FiHome size={44} className='text-blue-400'/>
    <h1 className='font-medium text-2xl'>31600 +</h1>
    <p>Centa certificate</p>
    </div>
    <div  className=" flex flex-col items-center     p-16" >
    <FiCompass size={44} color='green'/>
    <h1 className='font-medium text-2xl'>31600 +</h1>
    <p>Centa certificate</p>
    </div>

    
  </div>
    </>
  )
}

export default Main