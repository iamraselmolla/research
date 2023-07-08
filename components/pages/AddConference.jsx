import React, { useContext } from 'react';
import { Field, FieldArray, Form, Formik } from 'formik'
import InputField from '../UI/InputField'
import * as yup from "yup"
import Dashboard from "./Dashboard";
import Gap from '../UI/Gap';
import { CircularProgress, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
import axios from 'axios';
import { toast } from 'react-toastify';
import AuthContext from '../store/AuthContext';
import { addConferenceFromForm } from '../services/userServices';
import { useState } from 'react';


const AddConference = () => {
    const [loading, setLoading] = useState(false)
    const validationSchema = yup.object().shape({
        organizationName: yup.string().required('Organization name is required'),
        conferenceName: yup.string().required('Conference name is required'),
        conferenceType: yup.string().required('Conference type is required'),
    });
    const initialValues = {
        organizationName: '',
        organizationAddress: '',
        organizationCity: '',
        organizationState: '',
        organizationCountry: '',
        conferenceName: '',
        conferenceLocation: '',
        conferenceDate: '',
        conferenceDescription: '',
        startTime: '',
        endTime: '',
        conferenceType: '',
        conferenceTheme: '',
        committeeChair: '',
        committeeMembers: '',
        speakers: [{
            name: '',
            affiliation: '',
            bio: ''
        }],
        registrationOpenDate: '',
        registrationCloseDate: '',
        registrationFee: '',
        registrationLink: '',

        // sessionTitle: '',
        // sessionDescription: '',
    }
    const details = {}

    const organisationFields = [
        { placeholder: "Organization Name", labelName: "Organization Name", uni: "organizationName", initialValue: "", type: "text", fieldRequired: true },
        { placeholder: "Organization Address", labelName: "Organization Address", uni: "organizationAddress", initialValue: "", type: "text" },
        { placeholder: "Organization City", labelName: "Organization City", uni: "organizationCity", initialValue: "", type: "text" },
        { placeholder: "Organization State", labelName: "Organization State", uni: "organizationState", initialValue: "", type: "text" },
        { placeholder: "Organization Country", labelName: "Organization Country", uni: "organizationCountry", initialValue: "", type: "text" },
    ]

    const conferenceFields = [
        { placeholder: "Conference Name", labelName: "Conference Name", uni: "conferenceName", initialValue: "", type: "text", fieldRequired: true },
        { placeholder: "Conference Location", labelName: "Conference Location", uni: "conferenceLocation", initialValue: "", type: "text" },
        { placeholder: "Conference Date", labelName: "Conference Date", uni: "conferenceDate", initialValue: "", type: "date" },
        { placeholder: "Conference Start Time", labelName: "Conference Start Time", uni: "startTime", initialValue: "", type: "time" },
        { placeholder: "Conference End Time", labelName: "Conference End Time", uni: "endTime", initialValue: "", type: "time" },
        // { placeholder: "Conference type", labelName: "Conference Type", uni: "conferenceType", initialValue: "", type: "text", fieldRequired: true },
        { placeholder: "Conference Theme", labelName: "Conference Theme", uni: "conferenceTheme", initialValue: "", type: "text" },
    ]

    const committeeFields = [
        { placeholder: "Committee Chairman", labelName: "Committee Chairman", uni: "committeeChair", initialValue: "", type: "text" },
        { placeholder: "Committee Members", labelName: "Committee Members", uni: "committeeMembers", initialValue: "", type: "text" },
    ]

    const speakerFields = [
        { placeholder: "Speakers Name", labelName: "Speakers", uni: "speakers", initialValue: "", type: "text" },
        { placeholder: "Speakers Affiliation", labelName: "Speakers Affiliation", uni: "speakers2", initialValue: "", type: "text" },
        { placeholder: "Speakers Bio", labelName: "Speakers Bio", uni: "speakers3", initialValue: "", type: "text" },
        // { placeholder: "Sesion Title", labelName: "Session Title", uni: "sessionTitle", initialValue: "", type: "text" },
        // { placeholder: "Sesion Description", labelName: "Session Description", uni: "sessionDescription", initialValue: "", type: "text" },
    ]

    const registrationFields = [
        { placeholder: "Registration Open Date", labelName: "Registration Open Date", uni: "registrationOpenDate", initialValue: "", type: "date" },
        { placeholder: "Registration Close Date", labelName: "Registration Close Date", uni: "registrationCloseDate", initialValue: "", type: "date" },
        { placeholder: "Registration Fee", labelName: "Registration Fee", uni: "registrationFee", initialValue: "", type: "number" },
        { placeholder: "Registration Link", labelName: "Registration Link", uni: "registrationLink", initialValue: "", type: "text" },
    ]
    const authCtx = useContext(AuthContext)
    const handleFormSubmit = async (values, { resetForm }) => {
        try {
            setLoading(true)
            const result = await addConferenceFromForm({ ...values, userId: authCtx.localid })
            
            if (result) {
                toast.success('Conference Created successfully!');
                resetForm({ values: '' })
            }
        }
        catch (error) {
            console.log(error.response.data.error)
            const message=error.response.data.error || "Something went wrong";
            toast.error(message)
        }
        finally{
            setLoading(false)
        }

    }




    return (
        <Dashboard>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleFormSubmit}
            >
                {({ values }) => {
                    return (
                        <Form className='flex flex-col'>
                            <Gap>Organisation</Gap>
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:my-5' >
                                {organisationFields.map((item, i) => (
                                    <InputField key={i} {...item} />
                                ))}
                            </div>

                            <Gap>Conference</Gap>
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:my-5' >
                                {conferenceFields.map((item, i) => (
                                    <InputField key={i} {...item} />
                                ))}
                                <InputField uni={'conferenceType'} labelName={'Conference Type'} as={'select'} override={true}>
                                    <option value='' disabled={true}>Select</option>
                                    <option value='Online'>Online</option>
                                    <option value='Offline'>Offline</option>
                                    <option value='Hybrid'>Hybrid</option>
                                </InputField>
                            </div>
                            <InputField uni='conferenceDescription' labelName={'Conference Description'} as={'textarea'} placeholder={'Description'} />

                            <Gap>Committee</Gap>
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:my-5' >
                                {committeeFields.map((item, i) => (
                                    <InputField key={i} {...item} />
                                ))}
                            </div>

                            <Gap>Registration</Gap>
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:my-5' >
                                {registrationFields.map((item, i) => (
                                    <InputField key={i} {...item} />
                                ))}
                            </div>

                            <Gap>Speakers</Gap>
                            <FieldArray name='speakers'>
                                {({ push, remove }) =>
                                    <div className='flex flex-col'>
                                        {values.speakers.map((item, i) =>
                                            <div key={i} className='relative flex flex-col'>
                                                {values.speakers.length > 1 && <IconButton onClick={() => remove(i)} className='absolute top-2 right-2 self-end'><Delete /></IconButton>}
                                                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:my-5 ' >
                                                    <InputField uni={`speakers.${i}.name`} placeholder='Alex' labelName={`Speaker ${i + 1} name`} />
                                                    <InputField uni={`speakers.${i}.affiliation`} placeholder='Technology' labelName={`Speaker ${i + 1} affiliation`} />
                                                    <InputField uni={`speakers.${i}.bio`} placeholder='Phd' labelName={`Speaker ${i + 1} bio`} />
                                                </div>
                                            </div>
                                        )}
                                        <button type='button' onClick={() => {
                                            push(initialValues.speakers[0])
                                        }} className='bg-primary text-white px-2 py-1 self-end mt-4'>ADD SPEAKER</button>
                                        {/* {values.speakers.map((item,i)=><div>TEST</div>)} */}
                                    </div>
                                }
                            </FieldArray>


                            <button type="submit" className=' bg-primary self-end rounded-sm p-1 text-white md: w-28 mt-4'>{
                                !loading ? "Submit" : <CircularProgress size={16} sx={{ color: 'white' }} />
                            }</button>
                        </Form >
                    )
                }}
            </Formik>
        </Dashboard>
    );
};

export default AddConference;