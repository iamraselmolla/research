import React from 'react';
import { Form, Formik } from 'formik'
import InputField from '../UI/InputField'
import * as yup from "yup"
import Dashboard from "./Dashboard";


const CreateConference = () => {
    const validationSchema = yup.object().shape({
        organizationName: yup.string().required('Organization name is required'),
        conferenceName: yup.string().required('Conference name is required'),
        conferenceType: yup.string().required('Conference type is required'),
    });
    const initialValues = {}
    const details = {}

    const fields = [
        { placeholder: "Organization Name", labelName: "Organization Name", uni: "organizationName", initialValue: "", type: "text", fieldrequired: true },
        { placeholder: "Organization Address", labelName: "Organization Address", uni: "organizationAddress", initialValue: "", type: "text" },
        { placeholder: "Organization City", labelName: "Organization City", uni: "organizationCity", initialValue: "", type: "text" },
        { placeholder: "Organization State", labelName: "Organization State", uni: "organizationState", initialValue: "", type: "text" },
        { placeholder: "Organization Country", labelName: "Organization Country", uni: "organizationCountry", initialValue: "", type: "text" },
        { placeholder: "Committee Chairman", labelName: "Committee Chairman", uni: "committeeChair", initialValue: "", type: "text" },
        { placeholder: "Committee Members", labelName: "Committee Members", uni: "committeeMembers", initialValue: "", type: "text" },
        { placeholder: "Conference Name", labelName: "Conference Name", uni: "conferenceName", initialValue: "", type: "text", fieldrequired: true },
        { placeholder: "Conference Location", labelName: "Conference Location", uni: "conferenceLocation", initialValue: "", type: "text" },
        { placeholder: "Conference Date", labelName: "Conference Date", uni: "conferenceDate", initialValue: "", type: "date" },
        { placeholder: "Conference type", labelName: "Conference Type", uni: "conferenceType", initialValue: "", type: "text", fieldrequired: true },
        { placeholder: "Conference Theme", labelName: "Conference Theme", uni: "conferenceTheme", initialValue: "", type: "text" },
        { placeholder: " Speakers Name", labelName: "Speakers", uni: "speakers", initialValue: "", type: "text" },
        { placeholder: " Speakers Affiliation", labelName: "Speakers Affiliation", uni: "speakers2", initialValue: "", type: "text" },
        { placeholder: " Speakers Bio", labelName: "Speakers Bio", uni: "speakers3", initialValue: "", type: "text" },
        { placeholder: "Registration Open Date", labelName: "Registration Open Date", uni: "registrationOpenDate", initialValue: "", type: "date" },
        { placeholder: "Registration Close Date", labelName: "Registration Close Date", uni: "registrationCloseDate", initialValue: "", type: "date" },
        { placeholder: "Registration Fee", labelName: "Registration Fee", uni: "registrationFee", initialValue: "", type: "number" },
        { placeholder: "Registration Link", labelName: "Registration Link", uni: "registrationLink", initialValue: "", type: "text" },
        { placeholder: "Conference Start Time", labelName: "Conference Start Time", uni: "startTime", initialValue: "", type: "text" },
        { placeholder: "Conference End Time", labelName: "Conference End Time", uni: "endTime", initialValue: "", type: "text" },
        { placeholder: "Sesion Title", labelName: "Session Title", uni: "sessionTitle", initialValue: "", type: "text" },
        { placeholder: "Sesion Description", labelName: "Session Description", uni: "sessionDescription", initialValue: "", type: "text" },
    ];

    const handleFormSubmit = async (values) => {
        try {
                console.log(values)
        }
        catch (error) {
            console.log(error)
        }
    }




    return (
        <Dashboard>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleFormSubmit}
            >
                <Form className='flex flex-col'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:my-5' >
                        {fields.map((item, i) => (
                            <InputField key={item.uni} {...item} />
                        ))}
                    </div>
                    <button type="submit" className=' bg-primary self-end rounded-sm p-1 md: w-28'>Submit</button>
                </Form >
            </Formik>
        </Dashboard>
    );
};

export default CreateConference;