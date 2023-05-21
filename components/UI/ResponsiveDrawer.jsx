import { Close, Menu } from '@mui/icons-material'
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

  return (
    <>
    <div className='h-[100px] bg-white sticky w-[100%] top-0 flex justify-between items-center px-4 text-black z-10 '>
    {/* <h2 id='LuckiestGuy' className='text-2xl md:text-4xl font-bold'>SIKKAWAREHOUSE</h2> */}
    <Link className='hover:scale-105 duration-200 ease-linear' href='/'><Image src={assets.logo} alt='Logo' className='w-[70%]' /></Link>
      <div className='flex gap-2'>
        {/* <button className=' hover:bg-ter hover:text-white p-2'>HOME</button>
        <button className=' hover:bg-ter hover:text-white p-2'>HOME</button>
        <button className=' hover:bg-ter hover:text-white p-2'>HOME</button>
        <button className=' hover:bg-ter hover:text-white p-2'>HOME</button> */}
        <IconButton onClick={()=>openMenuHandler()}><Menu fontSize='large'/></IconButton>
      </div>
    </div>
    <div className='relative'>
    <div id='menu' className='fixed top-0 left-[-200px] w-[0%] h-[100vh] z-20 bg-white text-black duration-500 flex flex-col justify-center items-center'>
      <button onClick={()=>closeMenuHandler()} className='absolute top-4 right-4 rounded-full bg-secondary p-2 cursor-pointer'><Close sx={{color:'white'}} fontSize='large'/></button>
      <div className='flex flex-col gap-2 md:gap-4'>
      {authCtx.isLoggedIn && <Link href='/dashboard'><button onClick={()=>closeMenuHandler()} className=' bg-primary text-white p-2 hover:bg-secondary w-60'>DASHBOARD</button></Link>}
      {authCtx.isLoggedIn && <Link href='/dashboard/addwarehouse'><button onClick={()=>closeMenuHandler()} className=' bg-primary text-white p-2 hover:bg-secondary w-60'>ADD WAREHOUSE</button></Link>}
      <Link href='/'><button onClick={()=>closeMenuHandler()} className=' bg-primary text-white p-2 hover:bg-secondary w-60'>HOME</button></Link>
      <Link href='/warehouses'><button onClick={()=>closeMenuHandler()} className=' bg-primary text-white p-2 hover:bg-secondary w-60'>WAREHOUSES</button></Link>
      <Link href='/services'><button onClick={()=>closeMenuHandler()} className=' bg-primary text-white p-2 hover:bg-secondary w-60'>SERVICES</button></Link>
      <Link href='/director'><button onClick={()=>closeMenuHandler()} className=' bg-primary text-white p-2 hover:bg-secondary w-60'>DIRECTOR&apos;S MESSAGE</button></Link>
      <Link href='/about'><button onClick={()=>closeMenuHandler()} className=' bg-primary text-white p-2 hover:bg-secondary w-60'>ABOUT</button></Link>
      <Link href='/contact'><button onClick={()=>closeMenuHandler()} className=' bg-primary text-white p-2 hover:bg-secondary w-60'>CONTACT</button></Link>
      <Link href='/gallery'><button onClick={()=>closeMenuHandler()} className=' bg-primary text-white p-2 hover:bg-secondary w-60'>GALLERY</button></Link>
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