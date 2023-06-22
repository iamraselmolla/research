import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify'
import Spinner from '../UI/Spinner';
import AuthContext from '../store/AuthContext';
import SplashScreen from '../SplashScreen';
import ResponsiveDrawer from '../UI/ResponsiveDrawer';
import Footer from '../UI/Footer';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup'
import InputField, { } from '../UI/InputField'
import { assets } from '../assets';
import Image from 'next/image';
import { ALL_LINKS } from '../constants/constant';

const Signup = () => {
  const [loading, setLoading] = useState(true);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);
    return () => {
      clearTimeout(timer);
    }
  }, [])

  useEffect(() => {
    if (authCtx.isLoggedIn) {
      router.push('/dashboard');
      toast.warn('Already Logged In');
    }
  }, []);


  return (
    <>

      <div className='relative'>
        {loading ? <SplashScreen /> :
          <>
            {!authCtx.isLoggedIn ? (
              <>
                <ResponsiveDrawer />
                <div className='bg-white py-10'>
                  <div className='flex justify-center items-center font-sans' >
                    <div className='w-full md:w-[600px] border-2 border-black p-4 flex flex-col gap-4'>
                      <Image className='w-2/3 m-auto' alt='illustration' src={assets.signupPage} />
                      <Link href={ALL_LINKS.signupFaculty}><button className={`bg-black text-white h-10  hover:opacity-75 w-full`}type>SIGN UP AS A FACULTY</button></Link>
                      <Link href={ALL_LINKS.signupStudent}><button className={`bg-black text-white h-10  hover:opacity-75 w-full`}type>SIGN UP AS A STUDENT</button></Link>
                    </div>
                  </div>
                </div>
                <Footer />
              </>
            ) : (
              <div></div>
            )}
          </>
        }
      </div >
    </>
  );
}

export default Signup 