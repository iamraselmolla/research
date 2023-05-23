import React, { useEffect, useState } from 'react'
import ResponsiveDrawer from '../UI/ResponsiveDrawer';
import TopCard from '../UI/TopCard';
import Footer from '../UI/Footer';
import SplashScreen from '../SplashScreen';
import { Container } from '@mui/system';
import { Call, LocationOn, Mail } from '@mui/icons-material';

import * as Yup from 'yup'
import { Form, Formik } from 'formik';
import InputField from '../UI/InputField';
import { useRouter } from 'next/router';
const Contact = () => {
    const [loading,setLoading]=useState(true);
    const router=useRouter();

    useEffect(() => {
        const timer=setTimeout(() => {
            setLoading(false);
        }, 400);
      return () => {
        clearTimeout(timer);
      }
    }, [])

    const initialValues={
      name:'',
      email:'',
      mobileNo:'',
      message:''

    };

    const validationSchema=Yup.object({
      name:Yup.string().required('Required'),
      mobileNo:Yup.string().required('Required'),
      message:Yup.string().required('Required'),
    })

    const onSubmitHandler=(values,{resetForm})=>{
      let body=`Name=${values.name}%0D%0A Contact no=${values.mobileNo}%0D%0A Message=${values.message}`
      router.push(`mailto:info@warehouseservicez.com?subject=Contact&body=${body}`)
      resetForm();
    }


  return (
    <div className='relative'>
    {loading ? <SplashScreen/>:
    <>
    <ResponsiveDrawer/>
    <TopCard title='Contact Us'/>
    <div className='py-20 bg-white text-black '>
      <Container>

      <div className='grid grid-cols-1 md:grid-cols-3 my-10 gap-4 text-white'>

      <div className='col-span-1 bg-pent  shadow-lg rounded-xl p-4 flex flex-col gap-2'>
        <LocationOn sx={{fontSize:40}}/>
        <h2 className='text-xl font-bold'>Office address</h2>
        <p>Office address Kartikey Tower, 1st Floor , Nr.KVIC Housing Socity , Opposit Kali mandir Enclave , GMS Road , Dehradun</p>
      </div>


      <div className='col-span-1 bg-pent shadow-lg rounded-xl p-4 flex flex-col gap-2'>
        <Mail sx={{fontSize:40}}/>
        <h2 className='text-xl font-bold'>Mail us</h2>
        <p>info@warehouseservicez.com</p>
      </div>


      <div className='col-span-1 bg-pent shadow-lg rounded-xl p-4 flex flex-col gap-2'>
        <Call sx={{fontSize:40}}/>
        <h2 className='text-xl font-bold'>Call Us</h2>
        <p>+91 8976968438</p>
        <p>+91 7078789108</p>
        <p>+91 8191802837</p>
        <p>+91 9411712837</p>
      </div>


      </div>

      {/* Form */}
      <div className='bg-pent p-4 rounded-xl '>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmitHandler}>
        <Form className='flex flex-col gap-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <InputField className='col-span-1 md:col-span-2' labelName='Name' uni='name' placeholder='Harish'   />
            <InputField  labelName='My email is' uni='Email' placeholder='warehouse@gmail.com'  />
            <InputField  labelName='My mobile no is' uni='mobileNo' placeholder='9876543210'  />
            <InputField  className='col-span-1 md:col-span-2' labelName='Your message .' uni='message' placeholder='Your message' />
          </div>
          <button type='submit' className='bg-primary p-2 text-white hover:opacity-90'>SUBMIT</button>

        </Form>
      </Formik>
      </div>

        

      </Container>
      {/* Map */}
      <div className="flex flex-col justify-center items-center bg-white text-black">
        <h4 className="text-4xl font-bold m-10 ">OUR LOCATION</h4>
        <iframe
          className="w-full h-[300px] md:h-[400px]" title="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d215.26759734982963!2d78.01201234878606!3d30.314508218704926!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092bdeff7b7e3b%3A0x9bc4f9b9bf05109e!2s3PL%20Warehouse%20Servicez%20Private%20Limited!5e0!3m2!1sen!2sin!4v1684809085322!5m2!1sen!2sin"
        ></iframe>
        
      </div>
      <Footer/>

    </div>
    </>
    }
    </div>
  )
}

export default Contact