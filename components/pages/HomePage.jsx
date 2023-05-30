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

  const [loading,setLoading]=useState(true);

  useEffect(() => {
      const timer=setTimeout(() => {
          setLoading(false);
      }, 400);
    return () => {
      clearTimeout(timer);
    }
  }, [])

  return (
    <>
    {loading ? <SplashScreen/>:
    <div>
      <ResponsiveDrawer/>
      <Footer/>
    </div>
    }
    </>
  )
}

export default HomePage