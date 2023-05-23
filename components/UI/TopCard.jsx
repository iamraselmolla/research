import Image from 'next/image'
import React from 'react'
import { assets } from '../assets'

const TopCard = ({title}) => {
  return (
    <div className=' h-80 flex flex-col justify-center items-center bg-[#6a697b] relative'>
      <Image src={assets.topcard} className='h-[90%] w-auto' />
      <h2 id='LuckiestGuy' className='text-4xl md:text-6xl font-bold text-white uppercase text-center absolute top-[40%]'>{title}</h2>
    </div>
  )
}

export default TopCard