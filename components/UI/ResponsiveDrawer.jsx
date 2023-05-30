import { Close, KeyboardArrowDown, Menu, Phone } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useState } from 'react'
import { assets } from '../assets';
import AuthContext from '../store/AuthContext';
import { toast } from 'react-toastify';

const ResponsiveDrawer = () => {
  const [openMenu,setOpenMenu]=useState(true);
  const authCtx=useContext(AuthContext);

  const openMenuHandler=()=>{
    document.getElementById('menu').style.width='100%';
    document.getElementById('menu').style.left='0px';
  }

  const closeMenuHandler=()=>{
    document.getElementById('menu').style.width='0';
    document.getElementById('menu').style.left='-200px';
  }

  const MenuButton=({children,href})=>{
    return(
      <Link href={href} className=" text-black p-2 hover:cursor-pointer hover:bg-orange-500 hover:text-white flex justify-start w-[100%]">{children}</Link>
    )
  }

  return (
    <>
    
    <div className='h-[80px]  sticky w-[100%] top-0 flex justify-between items-center bg-white  text-black z-10 '>
    {/* <h2 id='LuckiestGuy' className='text-2xl md:text-4xl font-bold'>SIKKAWAREHOUSE</h2> */}
    <Link className='hover:scale-105 duration-200 ease-linear' href='/'><Image src={assets.logo} alt='Logo' className='h-[50px] md:h-[60px] w-auto p-2' /></Link>

    {/* Row Menu */}
    <div className='hidden lg:flex gap-2 '>
      <Link href='/'><button className=' hover:underline  text-black p-2 '>HOME</button></Link>
      <Link href='/warehouses'><button  className=' hover:underline  text-black p-2 '>WAREHOUSES</button></Link>


      {authCtx.isLoggedIn && <div className="group/parent relative group-hover/parent:bg-red-400  text-center h-[100%] flex flex-col items-center justify-center">
        <button  className="group/item border-b-2 border-transparent hover:border-black duration-500 h-10">ACCOUNT<KeyboardArrowDown/></button>
          <div className="group/item2 invisible absolute top-2 mt-8  group-hover/parent:visible space-y-1 flex flex-col " >
            <div className=" bg-white shadow-lg border-black w-[240px] flex flex-col">
            <MenuButton href='/dashboard'>Dashboard</MenuButton>
            <MenuButton href='/dashboard/addwarehouse'>Add Warehouse</MenuButton>
            <button onClick={()=>{authCtx.logout();toast.success("Logged out successfully");}} className='text-black p-2 hover:cursor-pointer hover:bg-orange-500 hover:text-white flex justify-start w-[100%]'>Logout</button>

          </div>
          </div>
      </div>
      }
      {/* <div className="group/parent relative group-hover/parent:bg-red-400  text-center h-[100%] flex flex-col items-center justify-center">
        <button  className="group/item border-b-2 border-transparent hover:border-black duration-500 h-10">SERVICES<KeyboardArrowDown/></button>
          <div className="group/item2 invisible absolute top-2 mt-8  group-hover/parent:visible space-y-1 flex flex-col " >
            <div className=" bg-white shadow-lg border-black w-[240px] flex flex-col">
            <MenuButton href='/services'>Services</MenuButton>
            <MenuButton href='/rentAndLease'>Rent and lease</MenuButton>
            <MenuButton href='/storageFacilities'>Storage Facilities</MenuButton>
          </div>
          </div>
      </div> */}

    </div>


    {/* Hamburger Icon */}
      <div className='flex lg:hidden gap-2'>
        <IconButton onClick={()=>openMenuHandler()}><Menu fontSize='large'/></IconButton>
      </div>
    </div>
   
    
    <div className='relative'>
    <div id='menu' className='fixed top-0 left-[-200px] w-[0%] h-[100vh]  z-20 bg-white text-black duration-500 flex flex-col justify-center items-center'>
      <button onClick={()=>closeMenuHandler()} className='absolute top-4 right-4 rounded-full bg-secondary p-2 cursor-pointer'><Close sx={{color:'white'}} fontSize='large'/></button>
      <div className='flex flex-col gap-2 md:gap-4'>
      {authCtx.isLoggedIn && <Link href='/dashboard'><button onClick={()=>closeMenuHandler()} className=' bg-primary text-white p-2 hover:bg-secondary w-60'>DASHBOARD</button></Link>}
      {authCtx.isLoggedIn && <Link href='/dashboard/addwarehouse'><button onClick={()=>closeMenuHandler()} className=' bg-primary text-white p-2 hover:bg-secondary w-60'>ADD WAREHOUSE</button></Link>}
      <Link href='/'><button onClick={()=>closeMenuHandler()} className=' bg-primary text-white p-2 hover:bg-secondary w-60'>HOME</button></Link>
      {authCtx.isLoggedIn &&<button onClick={()=>{authCtx.logout();toast.success("Logged out successfully");closeMenuHandler()}} className=' bg-primary text-white p-2 hover:bg-secondary w-60'>LOGOUT</button>}
      {/* <Link href=''><button onClick={()=>closeMenuHandler()} className=' bg-primary text-white p-2 hover:bg-secondary w-60'>HOME</button></Link> */}
      {/* <Link href=''><button onClick={()=>closeMenuHandler()} className=' bg-primary text-white p-2 hover:bg-secondary w-60'>HOME</button></Link> */}

      </div>
    </div>
    </div>

    </>
  )
}

export default ResponsiveDrawer