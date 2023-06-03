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

const Signup = () => {
  const [loading, setLoading] = useState(true);
  const [buttonLoading, setButtonLoading] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);
    return () => {
      clearTimeout(timer);
    }
  }, [])
  const authCtx = useContext(AuthContext);
  const router = useRouter();
  useEffect(() => {
    if (authCtx.isLoggedIn) {
      router.push('/dashboard');
      toast.warn('Already Logged In');
    }
  }, []);
  const initialValues = {
    firstname: '',
    lastname: '',
    username: '',
    password: ''
  }
  const loginSchema = yup.object().shape({
    firstname: yup.string().required('Enter First Name'),
    lastname: yup.string().required('Enter Last Name'),
    username: yup.string().required('Enter Username'),
    password: yup.string().min(8, "Too Short!!").required('Enter Password'),
  })

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
                    <div className='flex flex-col justify-center items-center w-[90vw]  md:w-[500px] md:m-auto  bg-ter text-white rounded-lg md:p-16 p-8'>
                      <h4 className='uppercase  text-2xl mb-4'>Sign Up</h4>
                      <Formik
                        initialValues={initialValues}
                        validationSchema={loginSchema}
                        onSubmit={values => {
                          console.log(values);
                        }}
                      >
                        {({ errors, touched }) => (
                          <Form className='w-full flex flex-col  space-y-4'>
                            <div className='grid grid-cols-2 gap-4'>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                              <div className='flex flex-col gap-2'>
                                <label htmlFor="firstname">*First Name</label>
                                <Field
                                  name="firstname"
                                  id="firstname"
                                  className='bg-white rounded-sm w-full h-10 text-black p-4' />
                                {errors.firstname && touched.firstname ? (
                                  <div className='text-red-500'>{errors.firstname}</div>
                                ) : null}
                              </div>
                              <div className='flex flex-col gap-2'>
                                <label htmlFor="lastname">*Last Name</label>
                                <Field
                                  name="lastname"
                                  id="lastname"
                                  className='bg-white rounded-sm w-full h-10 text-black p-4' />
                                {errors.lastname && touched.lastname ? (
                                  <div className='text-red-500'>{errors.lastname}</div>
                                ) : null}
                              </div>
                            </div>
                            <div className='flex flex-col space-y-2 text-md'>
                              <label htmlFor='username'>Username</label >
                              <Field
                                name="username"
                                id="username"
                                className='bg-white rounded-sm w-full h-10 text-black p-4' />
                              {errors.username && touched.username ? (
                                <div className='text-red-500'>{errors.username}</div>
                              ) : null}
                            </div>
                            <div className='flex flex-col space-y-2 text-md'>
                              <label htmlFor='password'>Password</label >
                              <Field
                                name="password"
                                id="password"
                                className=' bg-white rounded-sm w-full h-10 text-black p-4'
                              />
                              {errors.password && touched.password ? (
                                <div className='text-red-500'>{errors.password}</div>
                              ) : null}
                            </div>
                            <div className=' flex justify-center space-y-2'>
                              {!buttonLoading ? (
                                <button
                                  className={`bg-white text-black w-40 h-10  hover:bg-quaternary`}
                                  type="submit"
                                >
                                  SIGN UP
                                </button>
                              ) : (
                                <Spinner size={60} />
                              )}
                            </div>
                          </Form >
                        )}

                      </Formik>
                      <div>
                        Existing User&nbsp; 
                        <Link href=' /login' passHref >
                          <button className='mt-2 text-blue-300 underline'>
                           Sign in? 
                          </button >
                        </Link >
                      </div>
                    </div >
                  </div >
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