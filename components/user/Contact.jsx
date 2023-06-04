import React from 'react'
import Dashboard from '../pages/Dashboard'
import PersonalDetailsNavigation from '../UI/PersonalDetailsNavigation'
import * as yup from 'yup'
import { Form, Formik } from 'formik'
import InputFieldDark from '../UI/InputFieldDark'

const Contact = () => {
  const fields = [
    { placeholder: "First Name", labelName: "First Name", uni: "firstname", initialValue: "", type: "text", fieldrequired: true },
    { placeholder: "Last Name", labelName: "Last Name", uni: "Lastname", initialValue: "", type: "text", fieldrequired: true },
    { placeholder: "DOB", labelName: "DOB", uni: "dob", initialValue: "", type: "text", fieldrequired: true },
    { placeholder: "Gender", labelName: "Gender", uni: "gender", initialValue: "", type: "text", fieldrequired: true },
  ]

  const initialValues = {}
  const details = {}

  fields.map(item => { initialValues[item.uni] = item.initialValue })
  fields.map(item => { details[item.uni] = item.fieldrequired ? yup.string().required("Field Can't be empty") : yup.string() })

  const detailSchema = yup.object().shape({ ...details })
  return (
    <Dashboard>
      <PersonalDetailsNavigation activePage="contact" />
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={detailSchema}
          onSubmit={values => {
            console.log(values);
          }}
        >
          <Form className='flex flex-col'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:my-5' >
              {fields.map((item, i) => (
                <InputFieldDark key={item.uni} {...item} />
              ))}
            </div>
            <button type="submit" className=' bg-primary self-end rounded-sm p-1 md: w-28'>Submit</button>
          </Form >
        </Formik>
      </div>
    </Dashboard>
  )
}

export default Contact