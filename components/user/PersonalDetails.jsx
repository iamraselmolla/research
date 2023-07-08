import React, { useContext, useEffect, useState } from 'react'
import Dashboard from '../pages/Dashboard'
import PersonalDetailsNavigation from '../UI/PersonalDetailsNavigation'
import { FieldArray, Form, Formik } from 'formik'
import InputField from '../UI/InputField'
import * as Yup from "yup"
import Gap from '../UI/Gap'
import { IconButton } from '@mui/material'
import { Delete } from '@mui/icons-material'
import axios from 'axios'
import { toast } from 'react-toastify'
import AuthContext from '../store/AuthContext'
import { useDispatch, useSelector } from 'react-redux'
import { putPersonalDetails } from '../services/userServices'
import { formatDate } from '../utils/Date'
import { userActions } from '../store/userSlice'

const PersonalDetails = () => {
  const authCtx=useContext(AuthContext);
  const dispatch=useDispatch();
  const user=useSelector(state=>state.user.user);
  const [fetchedValues,setFetchedValues]=useState({
    basicInfo:{
      firstName: '',
      lastName: '',
      dob: '',
      gender: '',
    },
    contactInfo:{
      email: '',
      mobileNo1: '',
      mobileNo2:''
    },
    education:[
      {
        title:'',
        completion:'',
        institute:''
      }
    ]
  })
  const initialValues = {
    basicInfo:{
      firstName: '',
      lastName: '',
      dob: '',
      gender: '',
    },
    contactInfo:{
      email: '',
      mobileNo1: '',
      mobileNo2:''
    },
    education:[
      {
        title:'',
        completion:'',
        institute:''
      }
    ]
  }
  useEffect(()=>{
    if(user?.basicInfo?.firstName){
    setFetchedValues({
      basicInfo:{
        ...user.basicInfo,
        dob:formatDate(user.basicInfo.dob)
      },
      contactInfo:user.contactInfo,
      education:user.education.length>0 ? user.education : 
      [
        {
          title:'',
          completion:'',
          institute:''
        }
      ]
    })
  }
  },[user])

  const basicInfo = [
    { placeholder: "First Name", labelName: "First Name", uni: "basicInfo.firstName", type: "text", fieldRequired: true,disabled:true },
    { placeholder: "Last Name", labelName: "Last Name", uni: "basicInfo.lastName", type: "text", fieldRequired: true,disabled:true },
    { placeholder: "DOB", labelName: "DOB", uni: "basicInfo.dob", type: "date", fieldRequired: true },
  ]

  const contactInfo=[
    { placeholder: "Email", labelName: "Email", uni: "contactInfo.email", type: "text", fieldRequired: true },
    { placeholder: "Mobile 1", labelName: "Mobile 1", uni: "contactInfo.mobileNo1", type: "number", fieldRequired: true },
    { placeholder: "Mobile 2", labelName: "Mobile 2", uni: "contactInfo.mobileNo2", type: "number",  },
  ]


  const validationSchema = Yup.object().shape({
    basicInfo: Yup.object().shape({
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      dob: Yup.date().required('Date of birth is required'),
      gender: Yup.string().required('Gender is required'),
    }),
    contactInfo: Yup.object().shape({
      email: Yup.string().email('Invalid email').required('Email is required'),
      mobileNo1: Yup.string().required('Mobile number 1 is required'),
      mobileNo2: Yup.string()
    }),
    education: Yup.array().of(
      Yup.object().shape({
        title: Yup.string().required('Education title is required'),
        completion: Yup.string().required('Completion date is required'),
        institute: Yup.string().required('Institute name is required')
      })
    )
  });

  const onSubmitHandler= async (values,{resetForm})=>{
    try{
      const response = await putPersonalDetails({...values});
      toast.success("Personal details are updated successfully");
      dispatch(userActions.refreshDetails());
      
    }
    catch(err){
        console.log(err);
        toast.error("Something Wrong")
    }
  }





  return (
    <Dashboard>
      {/* <PersonalDetailsNavigation activePage="personal" /> */}
      <div>
        <Formik
          initialValues={fetchedValues || initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmitHandler}
          enableReinitialize
          >
          {({values})=>
          <Form className='flex flex-col'>
            <Gap>Basic Info</Gap>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:my-5' >
              {basicInfo.map((item, i) => (
                <InputField key={i} {...item} />
              ))}
              <InputField fieldRequired={true} uni={'basicInfo.gender'} labelName={'Gender'} as={'select'} override={true}>
                <option value='' disabled={true}>Select</option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                <option value='Other'>Other</option>
              </InputField>
            </div>

            <Gap>Contact Info</Gap>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:my-5' >
              {contactInfo.map((item, i) => (
                <InputField key={i} {...item} />
              ))}
            </div>

            <Gap>Education Details</Gap>
              <FieldArray name='education'>
                {({ push, remove }) =>
                  <div className='flex flex-col'>
                    {values.education.map((item, i) =>
                      <div key={i} className='relative flex flex-col'>
                        {values.education.length > 1 && <IconButton onClick={() => remove(i)} className='absolute top-2 right-2 self-end'><Delete /></IconButton>}
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:my-5 ' >
                          <InputField fieldRequired={true} uni={`education.${i}.institute`} placeholder='Institute' labelName={`Education ${i + 1} Institute`} />
                          <InputField fieldRequired={true} uni={`education.${i}.title`} placeholder='Alex' labelName={`Education ${i + 1} Title`} />
                          <InputField fieldRequired={true} uni={`education.${i}.completion`} type={'date'} placeholder='Technology' labelName={`Education ${i + 1} Year of Completion`} />
                        </div>
                      </div>
                    )}
                    <button type='button' onClick={() => {
                      push(initialValues.education[0])
                    }} className='bg-primary text-white px-2 py-1 self-end mt-4'>ADD</button>
                    {/* {values.speakers.map((item,i)=><div>TEST</div>)} */}
                  </div>
                }
              </FieldArray>

            <button type="submit" className=' bg-primary self-end rounded-sm p-1 md: w-28 text-white mt-4'>Submit</button>
          </Form >
          }
        </Formik>
      </div>
    </Dashboard>
  )
}

export default PersonalDetails