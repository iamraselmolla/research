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

  const CommunityCard = ({ name, designation }) => {
    return (
      <div className='bg-blue-500 h-52 w-52 text-right p-4 rounded-md text-white'>
        <h2 className='text-xl'>{name}</h2>
        <p>{designation}</p>
      </div>
    )
  }

  const ProductCard = ({ image }) => {
    return (
      <div className='h-52 w-40 bg-blue-500 rounded-tr-md rounded-bl-md'>
        {/* Image here with the link */}
      </div>
    )
  }

  const TestimonialCard = () => {
    return (
      <>
        {/* <img src={Image} alt="Testimonial" /> */}
        <div className='rounded-md w-56 h-36 bg-green-700'></div>
      </>
    )
  }

  return (
    <>
      {loading ? <SplashScreen /> :
        <div>
          <ResponsiveDrawer />
          <div className='bg-white'>
            <div className='flex flex-col md:flex-row gap-5 bg-white text-black w-[97%] md:w-[80%] m-auto'>
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
                  <input type="text" className='w-64 md:w-[unset] bg-white border-2 border-gray-200 rounded-sm p-1' placeholder='Name' />
                  <input type="text" className='w-64 md:w-[unset] bg-white border-2 border-gray-200 rounded-sm p-1' placeholder='Number' />
                  <input type="text" className='w-64 md:w-[unset] bg-white border-2 border-gray-200 rounded-sm p-1' placeholder='Email Address' />
                  <select name="Services" id="services" className='w-64 md:w-[unset] bg-white border-2 border-gray-100 rounded-sm p-1'>
                    <option value="ServiceA">ServiceA</option>
                    <option value="ServiceB">ServiceB</option>
                    <option value="ServiceC">ServiceC</option>
                    <option value="ServiceD">ServiceD</option>
                  </select>
                  <textarea className='w-64 md:w-[unset] bg-white border-2 border-gray-200 rounded-sm p-1' placeholder='Message' rows={1} />
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
            <div className='flex md:flex-row flex-col bg-white text-black w-[97%] md:w-[80%] m-auto'>
              <div className='bg-blue-500 min-w-[50%] h-[80vh]'></div>
              <div className='flex flex-col justify-center p-10 md:p-0 md:items-center md:w-[50%]'>
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

          <div className='bg-white flex flex-col gap-5 py-10'>
            <h2 className='tracking-wider text-3xl text-ter font-bold text-center'>AUTHOR COMMUNITY</h2>
            <p className='text-black text-center md:w-[50%] self-center'>Become one of the <a className='text-blue-500'>#CLEVERAUTHOR</a> by publishing your Paperback,
              E-Book & sell globally in 140+ countries, earning 100% of the profit with
              the matchless help from our experts.</p>
            <div className='flex w-[96%] md:w-[80%] m-auto overflow-x-hidden items-center'>
              <button type='button' className='text-black'>{"<"}</button>
              <div className='flex w-[96%] m-auto overflow-x-hidden items-center'>
                <div className='inline-flex gap-2 bg-white text-black'>
                  <CommunityCard name={'John Doe'} designation={'Developer'} />
                  <CommunityCard name={'John Doe'} designation={'Developer'} />
                  <CommunityCard name={'John Doe'} designation={'Developer'} />
                  <CommunityCard name={'John Doe'} designation={'Developer'} />
                  <CommunityCard name={'John Doe'} designation={'Developer'} />
                  <CommunityCard name={'John Doe'} designation={'Developer'} />
                  <CommunityCard name={'John Doe'} designation={'Developer'} />
                  <CommunityCard name={'John Doe'} designation={'Developer'} />
                  <CommunityCard name={'John Doe'} designation={'Developer'} />
                  <CommunityCard name={'John Doe'} designation={'Developer'} />
                </div>
              </div>
              <button type='button' className='text-black'>{">"}</button>
            </div>
          </div>
          <div className='bg-white flex flex-col gap-5 py-10'>
            <h2 className='tracking-wider text-3xl text-ter font-bold text-center'>WHY CLEVER FOX?</h2>
            <p className='text-black text-center md:w-[50%] self-center'>
              It is one thing to be an author and it is another thing to be a <a className='text-blue-500'>#CLEVERAUTHOR</a> We have a blind eye towards your experience. At
              Clever Fox, authors of all stages and genres can avail the following
              comforts:
            </p>
            <div className='flex w-[96%] md:w-[80%] m-auto overflow-x-hidden items-center'>
              <div className='flex flex-col md:flex-row bg-white text-black w-full m-auto'>
                <div className='bg-blue-500 w-full h-[50vh] rounded-md'></div>
                <div className='flex flex-col p-10 md:p-0 md:items-center min-w-[50%]'>
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
          </div>
          <div className='bg-white flex flex-col gap-5 py-20'>
            <h2 className='tracking-wider text-3xl text-ter font-bold text-center'>PRODUCTS</h2>
            <p className='text-black text-center md:w-[50%] self-center'>
              Read the collections of our top trending <b>Self Publishing</b> and <b>Partnered Publishing books</b>
            </p>
            <div className='w-[96%] md:w-[80%] m-auto overflow-x-hidden flex flex-col items-center gap-5'>
              <div className='flex w-[96%] m-auto overflow-x-hidden items-center'>
                <div className='inline-flex gap-2 bg-white text-black'>
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                </div>
              </div>
              <button type='button' className='text-white bg-ter w-32 p-2 rounded-md drop-shadow-sm'>See More</button>
            </div>
          </div>
          <div className='bg-white flex flex-col gap-5 py-20'>
            <h2 className='tracking-wider text-3xl text-ter font-bold text-center'>AUTHOR DASHBOARD</h2>
            <p className='text-black text-center md:w-[50%] self-center'>
              Get real-time numbers on your sales and track the order status.
            </p>
            <div className='flex md:flex-row flex-col-reverse bg-white text-black w-[96%] md:w-[80%] m-auto'>
              <div className='flex flex-col md:items-center m-10 md:m-0 min-w-[50%]'>
                <ul className='flex flex-col gap-5'>
                  <button type="button" className='bg-blue-200 rounded-tr-md rounded-tl-md border-b-2 border-blue-700 p-2 w-56'>Sales Tracker {">>"}</button>
                  <button type="button" className='bg-blue-200 rounded-tr-md rounded-tl-md border-b-2 text-blue-700 p-2 w-56'>Instant Order {">>"}</button>
                  <button type="button" className='bg-blue-200 rounded-tr-md rounded-tl-md border-b-2 text-blue-700 p-2 w-56'>Advert Dashboard {">>"}</button>
                  <button type="button" className='bg-blue-200 rounded-tr-md rounded-tl-md border-b-2 text-blue-700 p-2 w-56'>Postsales Analysis {">>"}</button>
                </ul>
              </div>
              <div className='bg-blue-500 w-full h-[50vh] rounded-md'></div>
            </div>
          </div>
          <div className='bg-white flex flex-col gap-5 py-20'>
            <h2 className='tracking-wider text-3xl text-ter font-bold text-center'>TESTIMONIALS</h2>
            <p className='text-black text-center md:w-[50%] self-center'>
              We are the best at books. But don’t take the word for it. Hear directly
              from the authors who experienced the transforming publishing journey.
            </p>
            <div className='grid place-items-center md:grid-cols-4 grid-cols-1 gap-5 bg-white text-black w-[96%] md:w-[80%] m-auto'>
              <TestimonialCard />
              <TestimonialCard />
              <TestimonialCard />
              <TestimonialCard />
            </div>
            <button className='text-black border-2 border-primary w-40 m-auto rounded-sm p-2 hover:bg-primary'>Read More</button>
          </div>
          <div className='bg-white flex flex-col gap-5 py-4'>
            <h2 className='tracking-wider text-3xl text-ter font-bold text-center'>PARTNERS</h2>
            <p className='text-black text-center md:w-[50%] self-center'>
              We are the best at books. But don’t take the word for it. Hear directly
              from the authors who experienced the transforming publishing journey.
            </p>
            <div className='grid place-items-center md:grid-cols-8 sm:grid-cols-5 grid-cols-2 gap-5 bg-white text-black w-[96%] md:w-[80%] m-auto'>
              <div className='rounded-full bg-green-700 h-24 w-24' />
              <div className='rounded-full bg-green-700 h-24 w-24' />
              <div className='rounded-full bg-green-700 h-24 w-24' />
              <div className='rounded-full bg-green-700 h-24 w-24' />
              <div className='rounded-full bg-green-700 h-24 w-24' />
              <div className='rounded-full bg-green-700 h-24 w-24' />
              <div className='rounded-full bg-green-700 h-24 w-24' />
              <div className='rounded-full bg-green-700 h-24 w-24' />
              <div className='rounded-full bg-green-700 h-24 w-24' />
            </div>
          </div>
          <div className='bg-white flex flex-col gap-5 py-4'>
            <h2 className='tracking-wider text-2xl text-ter font-bold text-center'>We are a member of the Federation of Indian Publishers</h2>
            <div className='bg-green-700 w-[60%] h-40 m-auto shadow-xl'>
            </div>
          </div>

          <Footer />
        </div>
      }
    </>
  )
}

export default HomePage