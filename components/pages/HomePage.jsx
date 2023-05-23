import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { assets } from '../assets'
import ResponsiveDrawer from '../UI/ResponsiveDrawer'
import Footer from '../UI/Footer'
import { Agriculture, ArticleOutlined, CarRental, Delete, FoodBank, Hardware, HealthAndSafety, Liquor, LocalDining, LocalShipping, MobileFriendly, Refresh, ShoppingCart, Warehouse } from '@mui/icons-material'
import SplashScreen from '../SplashScreen'
import Link from 'next/link'
import { Paper } from '@mui/material'

const HomePage = () => {

  const [loading,setLoading]=useState(true);

  useEffect(() => {
      const timer=setTimeout(() => {
          setLoading(false);
      }, 400);
    return () => {
      clearTimeout(timer);
    }
  }, [])

  const news=[
    {
      title:'Why Logistics service For Business',
      para:'If you are looking for a reliable and efficient solution for your business warehousing and distribution needs.',
      img:assets.news_01
    },
    {
      title:'Why Business Need Storage Facilities?',
      para:'Warehouse Services offer you to the rental or leasing of a commercial storage facility.',
      img:assets.news_02
    },
    {
      title:'What Are Warehousing Services?',
      para:'Storage facilities are physical spaces where individuals or businesses can rent units to store their belongings or inventory. ',
      img:assets.warehouse.warehouse_3
    },
  ]

  const warehouses=[
    {
      title:'Warehouse Provide',
      para:'If you are looking for a reliable and efficient solution for your business warehousing and distribution needs.',
      img:assets.warehouse.warehouse_1
    },
    {
      title:'Warehouse Rent and Lease',
      para:'Warehouse Services offer you to the rental or leasing of a commercial storage facility.',
      img:assets.warehouse.warehouse_2
    },
    {
      title:'Storage Facilities	',
      para:'Storage facilities are physical spaces where individuals or businesses can rent units to store their belongings or inventory. ',
      img:assets.warehouse.warehouse_3
    },
    {
      title:'Logistics Service	',
      para:'Logistics service in action, where goods are stored, organized, and transported to their respective destinations.',
      img:assets.warehouse.warehouse_4
    }
  ]

  const Card2=({item})=>{
    return(
      <div data-aos="zoom-in-down" className='col-span-1 bg-white rounded-md overflow-hidden shadow-xl'>
        <div className='p-3'>
          <Image src={item.img} alt='Card' className='w-[100%] object-cover rounded-md h-44'></Image>
          <div className='py-4 flex flex-col gap-4'>
            <h3 Warehouse className='text-2xl text-secondary font-bold'>{item.title}</h3>
            <p>{item.para} <Link className='text-primary underline' href="">Read More</Link> </p>
          </div>
        </div>
      </div>
    )
  }
  const Card1=({item})=>{
    return(
      <div data-aos="zoom-in-down" className='col-span-1 bg-white rounded-md overflow-hidden shadow-xl '>
        <div className='p-3'>
          <Image src={item.img} alt='Card' className='w-[100%] object-cover rounded-md'></Image>
          <div className='py-4 flex flex-col gap-4'>
            <h3 Warehouse className='text-2xl text-secondary font-bold'>{item.title}</h3>
            <p>{item.para}</p>
          </div>
        </div>
      </div>
    )
  }
  return (
    <>
    {loading ? <SplashScreen/>:
    <div id='Ubuntu' className='text-black z-10'>
      {/* <div className='md:h-[100vh] relative'>
      <div className='bg-gradient-to-tr from-primary to-secondary opacity-40 z-10 h-[100vh] absolute top-0 w-[100%]'></div>
      <div className='absolute top-0 left-0 text-white z-10 border-b-2 border-white w-[100%] p-4 flex justify-between backdrop-brightness-50 md:px-40'>
        <h2 id='LuckiestGuy' className='text-4xl font-bold'>SIKKAWAREHOUSE</h2>
        <div className='flex gap-2'>
          <button>HOME</button>
          <button>HOME</button>
          <button>HOME</button>
          <button>HOME</button>
        </div>
      </div>

      <div className='absolute top-20 z-10 text-white h-[calc(100vh-_-74px)] w-[100%] flex justify-center items-center'>
        <div>
          <h2 className='text-8xl'>Industry</h2>
          <h2 className='text-8xl'>Solutions</h2>
        </div>
      </div>
      <Image alt='Hero Section' className='h-[100%] overflow-hidden brightness-50' src={assets.bg_01} />

      </div> */}

      <ResponsiveDrawer/>
      {/* Section 1 */}
      <div className='bg-gradient-to-tr from-primary to-secondary py-8 overflow-hidden' >
        <h1 id='LuckiestGuy' className='text-5xl md:text-8xl text-white font-bold text-center overflow-x-hidden' data-aos="fade-right">MINIMUM THE RENTAL</h1>
        <h1 id='LuckiestGuy' className='text-5xl md:text-8xl text-white font-bold text-center overflow-x-hidden' data-aos="fade-left">LONGER THE SURVIVAL</h1>
        <div className='w-[90%] md:w-[720px] m-auto '>
        <Image data-aos='zoom-in-up' src={assets.bg_02} alt='Hero Section' className='w-[100%] object-cover overflow-x-hidden' />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 bg-white px-4 py-20 lg:px-40 border-b-[1px] border-black">
        <div className='flex flex-col items-center gap-4 p-3 md:border-r-2 md:border-black m-1'><p className='text-5xl'>70+</p><p>WAREHOUSES (PAN INDIA)</p></div>
        <div className='flex flex-col items-center gap-4 p-3 my-10 md:my-0 md:border-r-2 md:border-black m-1'><p className='text-5xl'>600000+</p><p>Sq.ft Area</p></div>
        <div className='flex flex-col items-center gap-4 p-3 m-1'><p className='text-5xl'>1548+</p><p>Customer Locations</p></div>
      </div>

      {/* Section 2 */}
      <div className='bg-white px-4 py-20 lg:px-40 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 overflow-x-hidden'>
        <div data-aos='fade-right' className='flex flex-col gap-4 overflow-x-hidden'>
          <h2 className='text-4xl md:text-5xl font-bold'>Welcome to the</h2>
          <h2 className='text-4xl md:text-5xl font-bold'>Warehouse Servicez</h2>
          <h2 className='text-3xl md:text-3xl '>Where We Provide Best Warehouse Service Across India </h2>
          <p>3PL Warehouse Servicez is one of the leading providers of warehousing solutions in India. With a strong focus on customer satisfaction, the company has been able to establish a reputation for providing top-quality services that are reliable and efficient.</p>
          <p>They have a network of Warehouses across India, including major States  such as Uttarakhand, Uttarpradesh, Haryana, Punjab, Himachal Pradesh, Jammu and Some Parts of Other State. These Warehouses are strategically located to provide maximum reach and coverage to customers across the country.</p>
          <p>3PL Warehouse Servicez has a highly trained and experienced team of professionals who are dedicated to providing the best possible service to their customers everyone is committed to ensuring that every client receives the highest level of service and support.</p>
          <p>If you are looking for a reliable and efficient warehousing partner in India, then 3PL Warehouse Servicez is definitely worth considering.</p>
          <Link href='/services' className='bg-secondary hover:text-gray-200 text-white w-40 p-2 text-center rounded-sm'>KNOW MORE</Link>
        </div>
        <div className='overflow-x-hidden' data-aos='fade-left'>
        <Image alt='Hero Section' className='h-[100%] overflow-hidden object-cover rounded-md' src={assets.Home_best} />
        </div>
      </div>

      {/* Section 3 */}
      <div className='px-4 py-20 lg:px-40 bg-gradient-to-tr from-primary  to-secondary flex flex-col overflow-x-hidden'>
      <h1 id='LuckiestGuy' className='text-5xl md:text-7xl text-white font-bold text-center' data-aos='zoom-out'>OUR SERVICES</h1>
      <h2 id='Ubuntu' className='text-white text-2xl text-center mb-8' data-aos='zoom-in'>Our experts offer a full range of warehouse services</h2>
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {warehouses.map((item,i)=><Card1 key={i} item={item}/>)}
      </div>
      </div>

      {/* Section 4 */}
      <div className='px-4 py-20 lg:px-40 bg-gray-600 text-white flex flex-col gap-8 overflow-x-hidden '>
        <div  className='grid grid-cols-2 gap-4'>
          <h3 data-aos='fade-right' id='Ubuntu' className='text-3xl'>Provides High Performance Services For Multiple Industries And Technologies!</h3>
          <div data-aos='fade-left' className='flex flex-col gap-2'>
            <p className='text-gray-200'>Industic Engineering has been built on engineering excellence crafted through unstinted dedication to quality, innovation and a constant objective to serve the global market & decade young industry expertise.</p>
            <Link href='/services' className='bg-primary rounded-sm text-white shadow-md hover:text-gray-300 w-40 p-2 text-center'>KNOW MORE</Link>
          </div>
        </div>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='flex flex-col items-center bg-white p-4 py-16 rounded-md text-black shadow-md'><ShoppingCart sx={{color:'#E84545'}} fontSize='large'/><p className='uppercase font-bold'>E-Commerce</p></div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='flex flex-col items-center bg-white p-4 py-16 rounded-md text-black shadow-md'><LocalShipping sx={{color:'#E84545'}} fontSize='large'/><p className='uppercase font-bold'>Logistics</p></div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='flex flex-col items-center bg-white p-4 py-16 rounded-md text-black shadow-md'><FoodBank sx={{color:'#E84545'}} fontSize='large'/><p className='uppercase font-bold'>FMCG</p></div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='flex flex-col items-center bg-white p-4 py-16 rounded-md text-black shadow-md'><HealthAndSafety sx={{color:'#E84545'}} fontSize='large'/><p className='uppercase font-bold'>Healthcare/Pharma</p></div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='flex flex-col items-center bg-white p-4 py-16 rounded-md text-black shadow-md'><LocalDining sx={{color:'#E84545'}} fontSize='large'/><p className='uppercase font-bold'>Food Supply Chain</p></div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='flex flex-col items-center bg-white p-4 py-16 rounded-md text-black shadow-md'><Hardware sx={{color:'#E84545'}} fontSize='large'/><p className='uppercase font-bold'>Hardware</p></div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='flex flex-col items-center bg-white p-4 py-16 rounded-md text-black shadow-md'><CarRental sx={{color:'#E84545'}} fontSize='large'/><p className='uppercase font-bold'>Automobiles</p></div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='flex flex-col items-center bg-white p-4 py-16 rounded-md text-black shadow-md'><Agriculture sx={{color:'#E84545'}} fontSize='large'/><p className='uppercase font-bold'>Agriculture</p></div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='flex flex-col items-center bg-white p-4 py-16 rounded-md text-black shadow-md'><Warehouse sx={{color:'#E84545'}} fontSize='large'/><p className='uppercase font-bold'>CA Cold Store</p></div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='flex flex-col items-center bg-white p-4 py-16 rounded-md text-black shadow-md'><Liquor sx={{color:'#E84545'}} fontSize='large'/><p className='uppercase font-bold'>Liquor</p></div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='flex flex-col items-center bg-white p-4 py-16 rounded-md text-black shadow-md'><MobileFriendly sx={{color:'#E84545'}} fontSize='large'/><p className='uppercase font-bold'>E-Waste</p></div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='flex flex-col items-center bg-white p-4 py-16 rounded-md text-black shadow-md'><Delete sx={{color:'#E84545'}} fontSize='large'/><p className='uppercase font-bold'>Recycle</p></div>
          </div>
      </div>
      
      {/* Section 6 */}
      <div className='px-4 py-20 lg:px-40 bg-white'>
        <h2 className='text-2xl font-bold w-fit m-auto flex mb-5'><ArticleOutlined sx={{color:'#E84545'}} fontSize='large'/><p>News & Blog</p></h2>
        <h2 className='text-4xl font-bold w-fit m-auto text-gray-900'>Our latest news post</h2>
        <h2 className='text-4xl font-bold w-fit m-auto text-gray-900'>& articles</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
          {news.map((item,i)=><Card2 key={i} item={item}/>)}
        </div>
      </div>

      {/* Section 5 */}

      <div className="flex flex-col justify-center items-center bg-white text-black overflow-hidden">
        <h4 data-aos='zoom-out' className="text-4xl font-bold m-10 ">OUR LOCATION</h4>
        <iframe
          className="w-full h-[300px] md:h-[400px]" title="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d215.26759734982963!2d78.01201234878606!3d30.314508218704926!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092bdeff7b7e3b%3A0x9bc4f9b9bf05109e!2s3PL%20Warehouse%20Servicez%20Private%20Limited!5e0!3m2!1sen!2sin!4v1684809085322!5m2!1sen!2sin"
        ></iframe>
      </div>


      {/* Footer */}
      <Footer/>
    </div>
    }
    </>
  )
}

export default HomePage