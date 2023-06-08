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
import FormWrapper from '../UI/FormWrapper';

const Login = () => {
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

  // const formHandler = async (e) => {
  //   e.preventDefault();
  //   if (!formData.username || !formData.password) {
  //     toast.warn('All fields are required')
  //     return;
  //   }
  //   try {
  //     setButtonLoading(true);
  //     const response = await axios.post(
  //       '/api/login',
  //       {
  //         username: formData.username,
  //         password: formData.password,
  //       }
  //     );
  //     if (response.status === 200) {
  //       toast.success('Signed in uccessfully');
  //       setFormData({
  //         username: '',
  //         password: ''
  //       });
  //       authCtx.login(response.data.user._id, response.data.user.token, 'admin');
  //       router.push('/dashboard');
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     const message = err.response.data.message;
  //     toast.warn(message);
  //   }
  //   setButtonLoading(false);
  // };
  
  const initialValues = {
    username: '',
    password: ''
  }
  const loginSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().min(8, 'Too Short!!').required('Password is required'),
  });

  const handleLogin = async (values) => {
    // values.preventDefault();
    try {
     
      console.log(values)
      setButtonLoading(true);
      const response = await axios.post('/api/login', values); 
      // Handle the response
      console.log(response.data);
      toast.success('Login successful!');
    } catch (error) {
      // Handle errors
      console.error(error);
      toast.error('Login failed.');
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
                      <h4 className='uppercase  text-2xl mb-4'>Login</h4>
                      <Formik
                        initialValues={initialValues}
                        validationSchema={loginSchema}
                        onSubmit={handleLogin}
                      >
                        <Form className='w-full flex flex-col  space-y-4'>
                          <div className='grid grid-cols-1 gap-2'>
                            <InputField labelName='Username' type='text' uni='username' placeholder='Username' />
                            <InputField labelName='Password' type='password' uni='password' placeholder='Password' />
                          </div>
                          <div>
                            Does not have an account?&nbsp;
                            <Link href=' /signup' passHref >
                              <button className='mt-2 text-blue-300 underline'>
                                Sign up
                              </button >
                            </Link >
                          </div>
                          <div className=' flex justify-center space-y-2'>
                            {!buttonLoading ? (
                              <button
                                className={`bg-white text-black w-40 h-10  hover:bg-quaternary`}
                                type="submit"
                              >
                                SIGN IN
                              </button>
                            ) : (
                              <Spinner size={60} />
                            )}
                          </div>
                        </Form >
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

export default Login