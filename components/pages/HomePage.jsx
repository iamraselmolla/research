import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { assets } from '../assets'
import ResponsiveDrawer from '../UI/ResponsiveDrawer'
import Footer from '../UI/Footer'
import { Agriculture, ArticleOutlined, CarRental, Delete, FoodBank, Hardware, HealthAndSafety, Liquor, LocalDining, LocalShipping, MobileFriendly, Refresh, ShoppingCart, Warehouse } from '@mui/icons-material'
import SplashScreen from '../SplashScreen'
import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation'

const HomePage = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);
    return () => {
      clearTimeout(timer);
    }
  }, [])

  const publishCardData = [
    { head: "SIGN UP", data: "Create your author account and get exclusive access to Author Dashboard." },
    { head: "CONTRACT", data: "On acceptance, finish up the author-publisher agreement in the dashboard." },
    { head: "MARKETING", data: "Spreading the word is on us and you d be glad to do it with us." },
    { head: "BOOK REVIEW", data: "Upon submitting your book, we will review it within 24 hours (guided publishing) and 120 hours (Partnered Publishing)." },
    { head: "PUBLISH", data: "Time to experience hassle-free publishing with Cleverfox." },
  ]

  const PublishCard = ({ head, data }) => {
    return (
      <>
        <div className='flex flex-col justify-center items-center gap-3 max-w-xs'>
          <div className="rounded-full bg-lime-500 h-20 w-20"></div>
          <h2 className='font-bold text-2xl tracking-wider'>{head}</h2>
          <p className='text-sm'>{data}</p>
        </div>
      </>
    )
  }

  return (
    <>
      {loading ? <SplashScreen /> :
        <div>
          <ResponsiveDrawer />
          <div className='bg-white'>
            <div className='flex bg-white text-black w-[97%] md:w-[80%] m-auto'>
              <div className='flex flex-col justify-center gap-4'>
                <p className='tracking-widest text-2xl'>Bringing your adult BOOK TO LIFE</p>
                <p className='font-extrabold tracking-tight text-2xl'>Join the India’s Fastest Growing Book Publishing Platform!</p>
                <button type='button' className='w-48 bg-secondary rounded-md p-2 text-white tracking-widest drop-shadow-md'>GET STARTED</button>
              </div>
              <div className='bg-blue-500 w-full h-[80vh]'></div>
            </div>
          </div>

          <div className="bg-white">
            <div className="flex flex-col w-[97%] md:w-[80%] m-auto">
              <div className="flex flex-col md:flex-row text-black justify-between gap-10 my-10">
                <div className='text-center'><h2 className='font-extrabold text-4xl'>21000+</h2><p className='text-md'>Community Members</p></div>
                <div className='text-center'><h2 className='font-extrabold text-4xl'>2000+</h2><p className='text-md'>Books</p></div>
                <div className='text-center'><h2 className='font-extrabold text-4xl'>150+</h2><p className='text-md'>Countries Reach</p></div>
                <div className='text-center'><h2 className='font-extrabold text-4xl'>5</h2><p className='text-md'>Years Experience</p></div>
              </div>
              <div className="flex flex-col justify-center text-xl my-10 text-center">
                <h2>SIGN UP TO START PUBLISHING NOW</h2>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-5 place-items-center md:place-items-stretch my-10 text-black'>
                  <input type="text" className='w-52 md:w-[unset] bg-white border-2 border-gray-200 rounded-sm p-1' placeholder='Name' />
                  <input type="text" className='w-52 md:w-[unset] bg-white border-2 border-gray-200 rounded-sm p-1' placeholder='Number' />
                  <input type="text" className='w-52 md:w-[unset] bg-white border-2 border-gray-200 rounded-sm p-1' placeholder='Email Address' />
                  <select name="Services" id="services" className='w-52 md:w-[unset] bg-white border-2 border-gray-100 rounded-sm p-1'>
                    <option value="ServiceA">ServiceA</option>
                    <option value="ServiceB">ServiceB</option>
                    <option value="ServiceC">ServiceC</option>
                    <option value="ServiceD">ServiceD</option>
                  </select>
                  <textarea className='w-52 md:w-[unset] bg-white border-2 border-gray-200 rounded-sm p-1' placeholder='Message' rows={1} />
                  <button type='submit' className='bg-primary text-white rounded-sm w-44'>SUBMIT</button>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-white text-black text-center '>
            <div className='w-[90%] md:w-[80%] m-auto py-10'>
              <h2 className='text-3xl tracking-wider'>OUR BOOK PUBLISHING SERVICES</h2>
              <div className='flex justify-center gap-5 my-5'>
                <button type="button" className='shadow-md font-bold tracking-wide bg-primary text-white p-2 w-56 rounded-sm'>Guided Self Publishing</button>
                <button type="button" className='shadow-md font-bold tracking-wide border-2 border-secondary p-2 w-56 rounded-sm'>Partnered Publishing</button>
              </div>
              <div className='border-2 py-4 px-2 border-ter text-left rounded-sm'>In Guided Self Publishing our dedicated team of book experts will work with you every step of the way to help bring your vision to life. We’ll help you refine your manuscript, design a book that works, and build a platform to sell and promote your book. And once publishing is complete, you can sit back and relax as your book is sold all over the world across 40,000+ stores.</div>
            </div>
          </div>

          <div className="bg-white text-black text-center">
            <div className="w-[90%] md:w-[80%] m-auto py-10">
              <h2 className='tracking-wider text-3xl text-ter font-bold'>PUBLISH WITH US</h2>
              <p className="my-5">Become A <a href="#" className='text-blue-800'>#CLEVERAUTHOR</a> in 5 Simple Steps</p>
              <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8 sm:place-items-start place-items-center'>
                {publishCardData.map((item, i) => (
                  <PublishCard head={item.head} data={item.data} />
                ))}
              </div>
            </div>
          </div>
          <div className='bg-white flex flex-col gap-5'>
            <h2 className='tracking-wider text-3xl text-ter font-bold text-center'>AUTHOR BENEFITS</h2>
            <p className='text-black text-center md:w-[50%] self-center'>Irrespective of whether you are a first-time publisher, or an experienced author, here is why Clever Fox Publishing is the perfect fit for you. </p>
            <div className='flex bg-white text-black w-[97%] md:w-[80%] m-auto'>
              <div className='bg-blue-500 w-full h-[80vh]'></div>
              <div className='flex flex-col justify-center items-center min-w-[50%]'>
                <ul className='flex flex-col gap-5 list-disc'>
                  <li>Highest Royalty rates</li>
                  <li>Live Royalty Track Dashboard</li>
                  <li>Expeditious publishing process </li>
                  <li>Expanded global distribution </li>
                  <li>Physical store distribution Support </li>
                  <li>Hand picked publishing team</li>
                </ul>

              </div>
            </div>
          </div>

          <Footer />
        </div>
      }
    </>
  )
}

export default HomePage