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
import { createUser } from '../services/userServices';

const SignupConditional = ({role}) => {
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
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    role:role
  }
  const loginSchema = yup.object().shape({
    firstName: yup.string().required('Enter First Name'),
    lastName: yup.string().required('Enter Last Name'),
    username: yup.string().required('Enter Username'),
    password: yup.string().min(8, "Too Short!!").required('Enter Password'),
  })
  const handleSubmit = async (values,{resetForm}) => {
    // values.preventDefault();
    try {
     
      setButtonLoading(true);
      const response = await createUser(values); 
      // Handle the response
      toast.success('Signup successful!');
      resetForm({values:''})
      router.push('/login')
    } catch (error) {
      // Handle errors
      console.error(error);
      toast.error('Signup failed.');
    } finally {
      setButtonLoading(false);
    }
  };


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
                    <h4 className='uppercase  text-2xl mb-4 font-bold'>{role} Sign Up</h4>
                    <Formik
                      initialValues={initialValues}
                      validationSchema={loginSchema}
                      onSubmit={handleSubmit}
                      
                    >
                      {({ errors, touched }) => (
                        <Form  className='w-full flex flex-col  space-y-4'>

                          <div className='grid grid-cols-1  gap-2'>
                            <InputField labelClass='text-white' inputClass={'bg-white '} labelName='First Name' type='text' uni='firstName' placeholder='First Name' fieldRequired={true} />
                            <InputField labelClass='text-white' inputClass={'bg-white '} labelName='Last Name' type='text' uni='lastName' placeholder='Last Name' fieldRequired={true} />
                            <InputField labelClass='text-white' inputClass={'bg-white '} labelName='Username' type='text' uni='username' placeholder='Username' fieldRequired={true} />
                            <InputField labelClass='text-white' inputClass={'bg-white '} labelName='Password' type='password' uni='password' placeholder='Password' fieldRequired={true} />
                          </div>
                          <div>
                            Already have an account ?&nbsp;
                            <Link href=' /login' passHref >
                              <button className='mt-2 text-blue-300 underline'>
                                Sign in
                              </button >
                            </Link >
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

export default SignupConditional 