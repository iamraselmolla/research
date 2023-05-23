import React, { useEffect, useState } from 'react'
import ResponsiveDrawer from '../UI/ResponsiveDrawer';
import TopCard from '../UI/TopCard';
import Footer from '../UI/Footer';
import SplashScreen from '../SplashScreen';
import { Container } from '@mui/system';
import Image from 'next/image';
import { assets } from '../assets';
import { Close } from '@mui/icons-material';
const Gallery = () => {
    const [loading,setLoading]=useState(true);

    useEffect(() => {
        const timer=setTimeout(() => {
            setLoading(false);
        }, 400);
      return () => {
        clearTimeout(timer);
      }
    }, [])

    const [modal,setModal]=useState(false);
    const [currentImage,setCurrentImage]=useState(assets.art_01);



  return (
    <div className='relative'>
    {loading ? <SplashScreen/>:
    <>
    <ResponsiveDrawer/>
    <TopCard title='Gallery'/>
    <div className='py-20 bg-white text-black '>
      <Container>
        <div className='columns-1 sm:columns-2 lg:columns-3  gap-4 space-y-5'>
          <Image onClick={()=>{setCurrentImage(assets.bg_01);setModal(true);}} alt='Sikka warehouse image' className='bg-green-100 w-[100%] h-auto cursor-pointer' src={assets.bg_01} />
          <Image onClick={()=>{setCurrentImage(assets.warehouse.warehouse_gallery_01);setModal(true);}} alt='Sikka warehouse image' className='bg-green-100 w-[100%] h-auto cursor-pointer' src={assets.warehouse.warehouse_gallery_01} />
          <Image onClick={()=>{setCurrentImage(assets.warehouse.warehouse_gallery_02);setModal(true);}} alt='Sikka warehouse image' className='bg-green-100 w-[100%] h-auto cursor-pointer' src={assets.warehouse.warehouse_gallery_02} />
          <Image onClick={()=>{setCurrentImage(assets.warehouse.warehouse_gallery_03);setModal(true);}} alt='Sikka warehouse image' className='bg-green-100 w-[100%] h-auto cursor-pointer' src={assets.warehouse.warehouse_gallery_03} />
          <Image onClick={()=>{setCurrentImage(assets.warehouse.warehouse_gallery_04);setModal(true);}} alt='Sikka warehouse image' className='bg-green-100 w-[100%] h-auto cursor-pointer' src={assets.warehouse.warehouse_gallery_04} />
          <Image onClick={()=>{setCurrentImage(assets.warehouse.warehouse_gallery_05);setModal(true);}} alt='Sikka warehouse image' className='bg-green-100 w-[100%] h-auto cursor-pointer' src={assets.warehouse.warehouse_gallery_05} />
          <Image onClick={()=>{setCurrentImage(assets.warehouse.warehouse_gallery_06);setModal(true);}} alt='Sikka warehouse image' className='bg-green-100 w-[100%] h-auto cursor-pointer' src={assets.warehouse.warehouse_gallery_06} />
          <Image onClick={()=>{setCurrentImage(assets.warehouse.warehouse_gallery_07);setModal(true);}} alt='Sikka warehouse image' className='bg-green-100 w-[100%] h-auto cursor-pointer' src={assets.warehouse.warehouse_gallery_07} />
          <Image onClick={()=>{setCurrentImage(assets.warehouse.warehouse_gallery_08);setModal(true);}} alt='Sikka warehouse image' className='bg-green-100 w-[100%] h-auto cursor-pointer' src={assets.warehouse.warehouse_gallery_08} />
        </div>

      </Container>

    </div>
    {modal && <div onClick={()=>{setModal(false)}} className='fixed  bottom-0 h-[100vh] w-[100%] backdrop-brightness-50'>
      <div className='w-[90%] md:w-[70%] h-[100%]  m-auto flex flex-col justify-center items-center relative '>
        <Image src={currentImage} className='w-[100%] h-[70%]  object-contain' alt='Greenwood hill school image' />
      </div>
      <div onClick={()=>setModal(false)} className='absolute top-4 right-4 md:top-10 md:right-10 rounded-full h-12 w-12 bg-secondary flex justify-center items-center cursor-pointer hover:scale-110 duration-200'><Close fontSize='large' sx={{color:'white'}}/></div>
      
    </div>
    }
    <Footer/>
    </>
    }
    </div>
  )
}

export default Gallery