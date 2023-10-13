import React, { useState } from "react";
import logo from "../images/4603cd85-84f6-47b1-b8ac-22a35ef79874 (1) (1).png";

import {
  MdLocationOn,
  MdMenu,
  MdModeEditOutline,
  MdNotificationsNone,
} from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CgMenuGridR } from "react-icons/cg";

import { AiOutlineDown } from "react-icons/ai";
import IconButton from "@mui/material/IconButton";
import Modal from "./Model";

const Home = () => {
  const [open, setOpen] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const handleModel = () => {
    setShowModal(true)
  };

  const handleClick = (e) => {
    setOpen(true);
  };
  const handleRequestClose = (e) => {
    setOpen(false);
  };
  return (
    <section className="w-screen h-[100vh] relative">
      <div className="flex bg-black/[0.8] sticky z-10">
        <div className="w-[12%] h-[40px] border-r-2 border-gray-400 m-2">
          <img
            src={logo}
            className="h-full w-full object-cover"
            alt="collagedunia logo"
          />
        </div>
        <div className="w-[70%] h-[40px] flex my-1">
          <div className="flex-col">
            <div className="flex items-center text-[11px] mt-2 gap-1 text-orange-400">
              <span>
                <FaGraduationCap />
              </span>
              Select Goal & <MdLocationOn /> City
            </div>
            <div className="flex items-center   gap-1">
              <h3 className="font-bold text-[13px] text-white">Select Goal </h3>
              <AiOutlineDown  color="white" size={15} />
            </div>
          </div>
          <div className="flex bg-white w-[70%] h-full ml-5 items-center p-2 rounded shadow-sm mt-1">
            <CiSearch size={20} />
            <input
              type="text"
              className="w-full h-[100%] focus:outline-none "
              placeholder="Search for Collage Exams and More .."
            />
          </div>
          <div className="flex items-center  gap-2  border-r-2 border-gray-400 mt-1 p-2 px-3 mr-3">
            <MdModeEditOutline size={25} color="white" />
            <div className="flex-col">
              <h3 className="text-[11px] text-white">Write a Review</h3>
              <div className="bg-orange-400 p-1 rounded-sm text-white">
                <h6 className="text-[8px]">Get Up 50%</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[17%] h-[40px] my-1 flex items-center justify-around">
          <div className="flex items-center gap-3 my-2 px-1">
            <div className="rounded-full bg-black/[0.2] mt-2">
              <IconButton className="shadow-md" aria-label="Example">
                <CgMenuGridR size={25} color="white" />
              </IconButton>
            </div>
            <h3 className="text-white text-[16px] font-semibold mt-2">
              Explore
            </h3>
          </div>
          <div className="my-2">
            <div className="rounded-full bg-black/[0.2] mt-2">
              <IconButton className="shadow-md" aria-label="Example">
                <MdNotificationsNone color="white" className="relative" />
                <div className="w-[10px] h-[10px] rounded-full bg-orange-400 absolute top-2 right-2"></div>
              </IconButton>
            </div>
          </div>
          <div className="my-2">
            <div
              className="flex rounded-full bg-black/[0.2] mt-2"
              onClick={handleClick}
              onMouseOver={handleClick}
              onMouseLeave={handleRequestClose}
            >
              <IconButton className="shadow-md" aria-label="Example">
                <MdMenu color="white" className="relative group" />
                <div className="w-[15px] h-[15px] rounded-lg bg-red-400 mx-2 ">
                  <img
                    className="w-full h-full object-contain rounded-lg"
                    src="https://play-lh.googleusercontent.com/q-APQPWUHIrjr9ybNwtqy8bttB4igOIcO8XuVrELC-XaclGc5Shdjp79aCNoj5W9ZpVl"
                    alt="logo"
                  />
                </div>
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[33px] flex bg-black/[0.7] gap-6 px-8  items-center w-[100%] py-2  sticky z-10">
        {open && (
          <div
            onMouseOver={handleClick}
            onMouseLeave={handleRequestClose}
            className="h-[120px] w-[230px]  rounded-l-md rounded-b-md  bg-white absolute -top-2 right-10   z-20 group-hover:transition-all group-hover:delay-20"
          >
            <div className="w-[100%] text-center">
              <button
              onClick={handleModel}
                className="bg-orange-400   hover:scale-95 my-4 py-2 rounded-md  mx-auto w-[89%]"   type="button"

              >
                Login / Register
              </button>
             
            </div>
            
          </div>
         
        )}
         <Modal showModal={showModal} setShowModal={setShowModal}/>
        <span className="text-gray-200 hover:cursor-pointer hover:text-orange-400 hover:border-b-2 hover:transition-all hover:delay-75 hover:border-orange-400  text-[12px]">
          All Cource
        </span>
        <span className="text-gray-200 hover:cursor-pointer hover:text-orange-400 hover:border-b-2 hover:transition-all hover:delay-75 hover:border-orange-400  text-[12px]">
          B Teach
        </span>
        <span className="text-gray-200 hover:cursor-pointer hover:text-orange-400 hover:border-b-2 hover:transition-all hover:delay-75 hover:border-orange-400  text-[12px]">
          MBA
        </span>
        <span className="text-gray-200 hover:cursor-pointer hover:text-orange-400 hover:border-b-2 hover:transition-all hover:delay-75 hover:border-orange-400  text-[12px]">
          M Tech
        </span>
        <span className="text-gray-200 hover:cursor-pointer hover:text-orange-400 hover:border-b-2 hover:transition-all hover:delay-75 hover:border-orange-400  text-[12px]">
          MBBS
        </span>
        <span className="text-gray-200 hover:cursor-pointer hover:text-orange-400 hover:border-b-2 hover:transition-all hover:delay-75 hover:border-orange-400  text-[12px]">
          B Com
        </span>
        <span className="text-gray-200 hover:cursor-pointer hover:text-orange-400 hover:border-b-2 hover:transition-all hover:delay-75 hover:border-orange-400  text-[12px]">
          B Sc
        </span>
        <span className="text-gray-200 hover:cursor-pointer hover:text-orange-400 hover:border-b-2 hover:transition-all hover:delay-75 hover:border-orange-400  text-[12px]">
          B Sc [Nursing]
        </span>
        <span className="text-gray-200 hover:cursor-pointer hover:text-orange-400 hover:border-b-2 hover:transition-all hover:delay-75 hover:border-orange-400  text-[12px]">
          BA{" "}
        </span>
        <span className="text-gray-200 hover:cursor-pointer hover:text-orange-400 hover:border-b-2 hover:transition-all hover:delay-75 hover:border-orange-400  text-[12px]">
          BBA
        </span>
        <span className="text-gray-200 hover:cursor-pointer hover:text-orange-400 hover:border-b-2 hover:transition-all hover:delay-75 hover:border-orange-400  text-[12px]">
          BCA
        </span>
      </div>
      <div className="absolute top-0 left-0 w-[100%] z-1">
        <img
          className="w-full h-screen object-cover relative"
          src="https://images.collegedunia.com/public/asset/img/homepage/banner/Indian1642232971.webp?mode=stretch"
          alt="banner"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/[0.2]"></div>

        <div className="absolute top-[50%]  w-[100%] flex-col   z-18">
          <h1 className="text-center text-white font-bold text-[30px]">
            Find Over 25000+ C in India
          </h1>
          <div className="w-full flex justify-center my-4 relative">
            <div className="flex-col  w-[65%]   mx-auto  shadow-sm mt-1 rounded-md">
              <div className="flex bg-white justify-center w-[100%]  mx-auto items-center m-3  shadow-sm mt-1 rounded-md">
              <CiSearch size={20} className="ml-4" />
              <input
                type="text"
                className="ml-3 w-full h-[100%] focus:outline-none "
                placeholder="Search for Collage Exams and More .."
              />
              <button className="bg-orange-400 p-3 rounded-r-md text-white">Search</button>
              </div>
              <div className='bg-orange-400 px-2 py-1 w-[140px] rounded-md block float-right text-[12px] text-center mt-2 text-white'>Need Counseling</div> 
            </div>
            
         
          </div>
        </div>
      </div>

     

      
    </section>
  );
};

export default Home;
