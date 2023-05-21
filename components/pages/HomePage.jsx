import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { assets } from '../assets'
import ResponsiveDrawer from '../UI/ResponsiveDrawer'
import Footer from '../UI/Footer'
import { Agriculture, CarRental, Delete, FoodBank, Hardware, HealthAndSafety, Liquor, LocalDining, LocalShipping, MobileFriendly, Refresh, ShoppingCart, Warehouse } from '@mui/icons-material'
import SplashScreen from '../SplashScreen'
import Link from 'next/link'

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

  const Card1=({item})=>{
    return(
      <div data-aos="zoom-in-down" className='col-span-1 bg-white rounded-2xl overflow-hidden shadow-xl '>
      <div className=''>
        <Image src={item.img} alt='Card' className='w-[100%] object-cover'></Image>
        <div className='p-4 flex flex-col gap-4'>
          <h3 Warehouse className='text-2xl text-secondary font-bold'>{item.title}</h3>
          <p>{item.para}</p>
          {/* <button className='p-2 w-32 bg-secondary  text-white mt-auto'>KNOW MORE</button> */}
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

      {/* Section 2 */}
      <div className='bg-white px-4 py-20 lg:px-40 grid grid-cols-1 md:grid-cols-2 gap-4 overflow-x-hidden'>
        <div data-aos='fade-right' className='flex flex-col gap-4 overflow-x-hidden'>
          <h2 className='text-4xl md:text-6xl font-bold'>Welcome to the</h2>
          <h2 className='text-4xl md:text-6xl font-bold'>Warehouse Servicez</h2>
          <h2 className='text-3xl md:text-5xl '>Where We Build Your Visions</h2>
          <p>Welcome to Warehouse Servicez Company, your trusted partner in providing top-quality warehousing solutions for your business needs. Our company specializes in offering warehouse rental and leasing services to a wide range of businesses across different industries. With years of experience in the industry, we have built a solid reputation for providing reliable, secure, and cost-effective warehousing solutions to our clients. Our warehouses are strategically located to ensure easy access and efficient logistics operations. We understand the unique needs of each of our clients and strive to provide personalized services that meet their specific requirements. Whether you need short-term or long-term warehouse space, our team is dedicated to providing you with flexible solutions that are tailored to your needs. Contact us today and let us help you take your business to the next level with our exceptional warehousing services.</p>
          <Link href='/services' className='bg-secondary text-white w-40 p-2 text-center'>KNOW MORE</Link>
        </div>
        <div className='overflow-x-hidden' data-aos='fade-left'>
        <Image alt='Hero Section' className='h-[100%] overflow-hidden object-cover ' src={assets.art_01} />
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
            <Link href='/services' className='bg-secondary text-white w-40 p-2 text-center'>KNOW MORE</Link>
          </div>
        </div>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='flex flex-col items-center bg-white p-4 py-16 rounded-xl text-black'><ShoppingCart sx={{color:'#764BA2'}} fontSize='large'/><p className='uppercase font-bold'>E-Commerce</p></div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='flex flex-col items-center bg-white p-4 py-16 rounded-xl text-black'><LocalShipping sx={{color:'#764BA2'}} fontSize='large'/><p className='uppercase font-bold'>Logistics</p></div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='flex flex-col items-center bg-white p-4 py-16 rounded-xl text-black'><FoodBank sx={{color:'#764BA2'}} fontSize='large'/><p className='uppercase font-bold'>FMCG</p></div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='flex flex-col items-center bg-white p-4 py-16 rounded-xl text-black'><HealthAndSafety sx={{color:'#764BA2'}} fontSize='large'/><p className='uppercase font-bold'>Healthcare/Pharma</p></div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='flex flex-col items-center bg-white p-4 py-16 rounded-xl text-black'><LocalDining sx={{color:'#764BA2'}} fontSize='large'/><p className='uppercase font-bold'>Food Supply Chain</p></div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='flex flex-col items-center bg-white p-4 py-16 rounded-xl text-black'><Hardware sx={{color:'#764BA2'}} fontSize='large'/><p className='uppercase font-bold'>Hardware</p></div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='flex flex-col items-center bg-white p-4 py-16 rounded-xl text-black'><CarRental sx={{color:'#764BA2'}} fontSize='large'/><p className='uppercase font-bold'>Automobiles</p></div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='flex flex-col items-center bg-white p-4 py-16 rounded-xl text-black'><Agriculture sx={{color:'#764BA2'}} fontSize='large'/><p className='uppercase font-bold'>Agriculture</p></div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='flex flex-col items-center bg-white p-4 py-16 rounded-xl text-black'><Warehouse sx={{color:'#764BA2'}} fontSize='large'/><p className='uppercase font-bold'>CA Cold Store</p></div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='flex flex-col items-center bg-white p-4 py-16 rounded-xl text-black'><Liquor sx={{color:'#764BA2'}} fontSize='large'/><p className='uppercase font-bold'>Liquor</p></div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='flex flex-col items-center bg-white p-4 py-16 rounded-xl text-black'><MobileFriendly sx={{color:'#764BA2'}} fontSize='large'/><p className='uppercase font-bold'>E-Waste</p></div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='flex flex-col items-center bg-white p-4 py-16 rounded-xl text-black'><Delete sx={{color:'#764BA2'}} fontSize='large'/><p className='uppercase font-bold'>Recycle</p></div>
          </div>
      </div>
      
      {/* Section 5 */}

      <div className="flex flex-col justify-center items-center bg-white text-black overflow-hidden">
        <h4 data-aos='zoom-out' className="text-4xl font-bold m-10 ">OUR LOCATION</h4>
        <iframe
          className="w-full h-[300px] md:h-[400px]" title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.2067707735296!2d78.0095323763292!3d30.31663590562165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092925e963de41%3A0xaa1fcaa43e5c52cb!2sWarehouse%20Servicez!5e0!3m2!1sen!2sin!4v1683894184725!5m2!1sen!2sin"
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