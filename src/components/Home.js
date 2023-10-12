import React from 'react'
import logo from "../images/logo.png";
import {MdLocationOn, MdMenu, MdModeEditOutline, MdNotificationsNone} from "react-icons/md";
import {FaGraduationCap} from "react-icons/fa";
import {CiEdit, CiSearch} from "react-icons/ci";
import {CgMenuGridR, CgNotifications} from "react-icons/cg"


import {AiOutlineDown} from "react-icons/ai";
import { IconButton, MenuList } from '@mui/material';



const Home = () => {
  return (
   <section className='w-screen h-[100vh] relative'>
   
     <div className='flex bg-black/[0.8] sticky z-10'>
        <div className='w-[15%] h-[40px] border-r-2 border-gray-400 m-2'>
           <img src={logo} className='h-full w-full object-cover' alt="collagedunia logo"/>
          
        </div>  
        <div className='w-[70%] h-[40px] flex my-1'>
         <div className='flex-col'>
         <div className='flex items-center text-[11px] mt-2 gap-1 text-orange-400'>
           <span ><FaGraduationCap/></span>Select Goal & <MdLocationOn/> City
         </div>
          <div className='flex items-center   gap-1'>
          <h3 className='font-bold text-[13px] text-white'>Select Goal </h3><AiOutlineDown/>
          </div>
         </div>
        <div className='flex bg-white w-[70%] h-full ml-5 items-center p-2 rounded shadow-sm mt-1'>
              <CiSearch size={20}/>
              <input type="text" className='w-full h-[100%] focus:outline-none ' placeholder='Search for Collage Exams and More ..'/>
        </div>
        <div className='flex items-center  gap-2  border-r-2 border-gray-400 mt-1 p-2 px-3 mr-3' >
           <MdModeEditOutline size={25} color='white'/>
           <div className='flex-col'>
             <h3 className='text-[11px] text-white'>Write a Review</h3>
             <div className='bg-orange-400 p-1 rounded-sm text-white'><h6 className='text-[8px]'>Get Up 50%</h6></div>
           </div>
        </div>
        </div>
        <div className='w-[15%] h-[40px] my-1 flex items-center justify-around'>

            <div className='flex items-center gap-3 my-2 px-1'>
                <CgMenuGridR size={25} color='white'/>
                <h3 className='text-white text-[16px] font-semibold'>Explore</h3>
            </div> 
            <div className='my-2'>
            <IconButton >
                <MdNotificationsNone color='white' className='relative'/>
                <div className='w-[10px] h-[10px] rounded-full bg-orange-400 absolute top-2 right-2'></div>
            </IconButton>
            </div>
            <div className='my-2'>
            <IconButton >
                <MdMenu color='white' />
                            </IconButton>
            </div>
        </div>
    </div>
    <div className='h-[33px] flex bg-black/[0.7] gap-6 px-8  items-center w-[100%] py-2  sticky z-10'>
     <span className='text-gray-200 hover:cursor-pointer hover:text-orange-400 hover:border-b-2 hover:transition-all hover:delay-75 hover:border-orange-400  text-[12px]'>All Cource</span>
     <span className='text-gray-200 hover:cursor-pointer hover:text-orange-400 hover:border-b-2 hover:transition-all hover:delay-75 hover:border-orange-400  text-[12px]'>B Teach</span>
     <span className='text-gray-200 hover:cursor-pointer hover:text-orange-400 hover:border-b-2 hover:transition-all hover:delay-75 hover:border-orange-400  text-[12px]'>MBA</span>
     <span className='text-gray-200 hover:cursor-pointer hover:text-orange-400 hover:border-b-2 hover:transition-all hover:delay-75 hover:border-orange-400  text-[12px]'>M Tech</span>
     <span className='text-gray-200 hover:cursor-pointer hover:text-orange-400 hover:border-b-2 hover:transition-all hover:delay-75 hover:border-orange-400  text-[12px]'>MBBS</span>
     <span className='text-gray-200 hover:cursor-pointer hover:text-orange-400 hover:border-b-2 hover:transition-all hover:delay-75 hover:border-orange-400  text-[12px]'>B Com</span>
     <span className='text-gray-200 hover:cursor-pointer hover:text-orange-400 hover:border-b-2 hover:transition-all hover:delay-75 hover:border-orange-400  text-[12px]'>B Sc</span>
     <span className='text-gray-200 hover:cursor-pointer hover:text-orange-400 hover:border-b-2 hover:transition-all hover:delay-75 hover:border-orange-400  text-[12px]'>B Sc [Nursing]</span>
     <span className='text-gray-200 hover:cursor-pointer hover:text-orange-400 hover:border-b-2 hover:transition-all hover:delay-75 hover:border-orange-400  text-[12px]'>BA </span>
     <span className='text-gray-200 hover:cursor-pointer hover:text-orange-400 hover:border-b-2 hover:transition-all hover:delay-75 hover:border-orange-400  text-[12px]'>BBA</span>
     <span className='text-gray-200 hover:cursor-pointer hover:text-orange-400 hover:border-b-2 hover:transition-all hover:delay-75 hover:border-orange-400  text-[12px]'>BCA</span>
    </div>
    <div className='absolute top-0 left-0 w-[100%] z-1'>
         <img className='w-full h-full object-cover relative' src="https://images.collegedunia.com/public/asset/img/homepage/banner/Indian1642232971.webp?mode=stretch" alt="banner"/>
         <div className='absolute top-[50%]  w-[100%]    z-20'>
         
         <h1 className='text-center text-white font-bold text-[30px]'>Find Over 25000+ C in India</h1>
         <div  className='w-full flex justify-center my-4'>
             <div className='flex bg-white justify-center w-[60%]  mx-5 items-center m-3  shadow-sm mt-1 rounded-md'>
             <CiSearch size={20} className='ml-4'/>
             <input type="text" className='ml-3 w-full h-[100%] focus:outline-none ' placeholder='Search for Collage Exams and More ..'/>
            
       <button className='bg-orange-400 p-3'>Search</button>
       </div>
       </div>
       </div>
    </div>
  
   </section>
  )
}

export default Home