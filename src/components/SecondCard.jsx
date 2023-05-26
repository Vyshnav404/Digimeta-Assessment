import React from "react";
import { AiFillStar } from "react-icons/ai";
function SecondCard({theme}) {
  return (
    <div>
      <div className={`flex justify-center items-center p-28  ${theme ? "white":'bg-violet-50 '}`}>
        <div className="flex flex-col justify-center items-center text-center w-[750px]">
          <p className="text-blue-500 font-medium tracking-widest my-4">
            WORLD-className INSTRUCTORS
          </p>
          <h2 className="font-bold text-4xl ">
            Courses Taught by Industry Experts
          </h2>
          <p className="text-gray-700 text-[18px] font-medium my-3">
            CENTA teachers are icons, experts, and industry rock stars excited
            to share their experience, wisdom, and trusted tools with you.
          </p>
        </div>
      </div>
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-y-5  lg:grid-cols-3 xl:grid-cols-4 md:px-24 gap-x-5 ${theme ? "white":'bg-violet-50 '}`}>
        <div className="border hover:shadow-lg rounded-md  border-gray-300">
          <img
            className="rounded-t-lg w-full "
            src="https://mycenta-dev.netlify.app/images/instructor/instructor-img-1.jpg"
            alt=""
          />
          <div className="flex mx-5 flex-col">
            <h3 className="font-bold text-xl  mt-5">Mary Robert</h3>
            <p className="text-gray-600">Professional Web Developer</p>
            <div className="flex  justify-between my-4 items-center">
             <span className="flex justify-center items-center "><AiFillStar className="text-orange-400" size={12} /><small className="ms-1 text-orange-300"> 4.5</small></span>
              <small>9999.2 students</small>
              <small>6 course</small>
            </div>
          </div>
        </div>
        <div className=" border hover:shadow-lg rounded-md  border-gray-300">
          <img
            className="rounded-t-lg w-full "
            src="https://mycenta-dev.netlify.app/images/instructor/instructor-img-2.jpg"
            alt=""
          />
          <div className="flex mx-5 flex-col">
            <h3 className="font-bold text-xl mt-5">Mary Robert</h3>
            <p className="text-gray-600">Professional Web Developer</p>
            <div className="flex justify-between my-4 ">
            <span className="flex justify-center items-center "><AiFillStar className="text-orange-400" size={12} /><small className="ms-1 text-orange-300"> 4.5</small></span>

              <small>9999.2 students</small>
              <small>6 course</small>
            </div>
          </div>
        </div>
        <div className=" border hover:shadow-lg rounded-md  border-gray-300">
          <img
            className="rounded-t-lg w-full"
            src="https://mycenta-dev.netlify.app/images/instructor/instructor-img-3.jpg"
            alt=""
          />
          <div className="flex mx-5 flex-col">
            <h3 className="font-bold text-xl mt-5">Mary Robert</h3>
            <p className="text-gray-600">Professional Web Developer</p>
            <div className="flex justify-between my-4 ">
            <span className="flex justify-center items-center "><AiFillStar className="text-orange-400" size={12} /><small className="ms-1 text-orange-300"> 4.5</small></span>

              <small>9999.2 students</small>
              <small>6 course</small>
            </div>
          </div>
        </div>
        <div className=" border hover:shadow-lg rounded-md  border-gray-300">
          <img
            className="rounded-t-lg  w-full"
            src="https://mycenta-dev.netlify.app/images/instructor/instructor-img-1.jpg"
            alt=""
          />
          <div className="flex mx-5 flex-col">
            <h3 className="font-bold text-xl mt-5">Mary Robert</h3>
            <p className="text-gray-600">Professional Web Developer</p>
            <div className="flex justify-between my-4 ">
            <span className="flex justify-center items-center "><AiFillStar className="text-orange-400" size={12} /><small className="ms-1 text-orange-300"> 4.5</small></span>

              <small>9999.2 students</small>
              <small>6 course</small>
            </div>
          </div>
        </div>
      </div>
      <div className={` ${theme ? "white":'bg-violet-50 '} flex justify-center p-10`}>
        <button className="bg-blue-400 rounded-md text-white py-2 px-4 font-medium">
          See All Products
        </button>
      </div>

      <div className=" bg-violet-50px-10 md:px-20 xl:px-48 pt-28 pb-16">
        <div className="flex">
          <div style={{ boxSizing: " border-box" }} className="  me-5 flex">
            <span
              style={{
                width: "3.5rem",
                height: "3.5rem",
                position: "relative",
                diplay: "inline-block",
              }}
              className="hover:absolute hover:z-10"
            >
              <img
                className="rounded-full border border-white"
                style={{idth:"3.5rem" , height:"3.5rem"}}                src="https://mycenta-dev.netlify.app/images/avatar/avatar-1.jpg"
                alt=""
              />
            </span>
            <span
              style={{
                width: "3.5rem",
                height: "3.5rem",
                position: "relative",
                diplay: "inline-block",
              }}
              className="-left-4 hover:z-10"
            >
              <img
                className="rounded-full border-2"
                style={{idth:"3.5rem" , height:"3.5rem"}}                src="	https://mycenta-dev.netlify.app/images/avatar/avatar-2.jpg"
                alt=""
              />
            </span>
            <span
              style={{
                width: "3.5rem",
                height: "3.5rem",
                position: "relative",
                diplay: "inline-block",
              }}
              className="-left-9 hover:z-10"
            >
              <img
                className="rounded-full border-2"
                style={{idth:"3.5rem" , height:"3.5rem"}}                src="https://mycenta-dev.netlify.app/images/avatar/avatar-3.jpg"
                alt=""
              />
            </span>
            <span
              style={{
                width: "3.5rem",
                height: "3.5rem",
                position: "relative",
                diplay: "inline-block",
              }}
              className="-left-14 hover:z-10"
            >
              <img
                className="rounded-full border-2"
                style={{idth:"3.5rem" , height:"3.5rem"}}
                src="	https://mycenta-dev.netlify.app/images/avatar/avatar-4.jpg"
                alt=""
              />
            </span>
            <span
              style={{
                width: "3.5rem",
                height: "3.5rem",
                position: "relative",
                diplay: "inline-block",
              }}
              className="-left-20 hover:z-10"
            >
              <div className="w-14 bg-red-500 h-14 flex justify-center items-center  border-2  rounded-full  text-white font-bold">
                1M+
              </div>
            </span>
          </div>
        </div>
        <div className="grid grid-cols-5">
          <div className= " col-span-5 md:col-span-2 my-8">
            <h1 className="font-bold text-6xl">Become an Instructor</h1>
          </div>
          <div className="col-span-5 md:col-span-3">
            <p className="text-[18px]">
              Top instructors from around the world teach thousands of teachers
              on CENTA. We provide the tools and skills to teach what you love
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 mt-12">
          <div>
            <h3 className="text-xl font-medium mb-3">Earn money</h3>
            <p className="text-[16  px]">
              Earn money every time a teacher purchases your course.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-3">Inspire teachers</h3>
            <p className="text-[16  px]">
              Help people learn new skills, advance their careers, and explore
              their hobbies by sharing your knowledge..
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-3">Join our community</h3>
            <p className="text-[16  px]">
              Take advantage of our active community of instructors to help you
              through your course creation process.
            </p>
          </div>
        </div>
        <button className="bg-blue-400 text-white  py-1 px-3 rounded-md hover:bg-blue-600 mt-8">
          Start Teaching Today
        </button>
      </div>
      <hr />
      <div className="">
        <div className="flex flex-col justify-center items-center pt-16">
          <h4 className="text-blue-500 font-medium tracking-widest my-5">
            TESTIMONIALS
          </h4>
          <h1 className="font-bold text-4xl">
            Don’t just take our word for it.
          </h1>
          <h4 className="text-xl text-gray-600 font-medium mt-3">
            12+ million people are already learning on Geeks
          </h4>
        </div>
        <div className="p-8 md:p-28 flex gap-4 overflow-x-auto">
  


           <div className="border  rounded-sm md:p-8  ">
          <div className="flex">
          <AiFillStar color="orange" size={12}/>
           <AiFillStar color="orange" size={12}/>
           <AiFillStar color="orange" size={12}/>
           <AiFillStar color="orange" size={12}/>
           <AiFillStar color="orange" size={12}/>
          </div>
            <p className="text-xl mb-8 ">
              "Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only fiv"
            </p>
            <hr />
            <div className="flex">
              <img
                src="https://mycenta-dev.netlify.app/images/avatar/avatar-6.jpg"
                className="w-10 h-10 rounded-full"
                alt=""
              />
              <div className="ms-3">
                <h4 className="font-medium">Barry Watson</h4>
                <small>web developer</small>
              </div>
            </div>
          </div>
          <div className="border    rounded-sm md:p-8  ">
          <div className="flex">
          <AiFillStar color="orange" size={12}/>
           <AiFillStar color="orange" size={12}/>
           <AiFillStar color="orange" size={12}/>
           <AiFillStar color="orange" size={12}/>
           <AiFillStar color="orange" size={12}/>
          </div>
            <p className="text-xl mb-8 ">
              "Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only fiv"
            </p>
            <hr />
            <div className="flex">
              <img
                src="https://mycenta-dev.netlify.app/images/avatar/avatar-6.jpg"
                className="w-10 h-10 rounded-full"
                alt=""
              />
              <div className="ms-3">
                <h4 className="font-medium">Barry Watson</h4>
                <small>web developer</small>
              </div>
            </div>
          </div>
          <div className="border   rounded-sm md:p-8  ">
          <div className="flex">
          <AiFillStar color="orange" size={12}/>
           <AiFillStar color="orange" size={12}/>
           <AiFillStar color="orange" size={12}/>
           <AiFillStar color="orange" size={12}/>
           <AiFillStar color="orange" size={12}/>
          </div>
            <p className="text-xl mb-8 ">
              "Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only fiv"
            </p>
            <hr />
            <div className="flex">
              <img
                src="https://mycenta-dev.netlify.app/images/avatar/avatar-6.jpg"
                className="w-10 h-10 rounded-full"
                alt=""
              />
              <div className="ms-3">
                <h4 className="font-medium">Barry Watson</h4>
                <small>web developer</small>
              </div>
            </div>
          </div>
       
         </div>
      </div>
    </div>
  );
}

export default SecondCard;
