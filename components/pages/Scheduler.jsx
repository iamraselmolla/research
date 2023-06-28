import React, { useState } from 'react';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Dashboard from './Dashboard'
import Gap from '../UI/Gap';
import { Close, Delete, Info } from '@mui/icons-material';
import { IconButton, TextField } from '@mui/material';
import InfoProvider from '../UI/InfoProvider';
import { Field, FieldArray, Form, Formik } from 'formik';

const Scheduler = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const initialValues = {
    timing: [{ start: '', end: '' }]
  }

  const handleDateTimeChange = (date) => {
    setSelectedDateTime(date);
  };


  return (
    <Dashboard>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className='m-1 flex flex-col gap-2'>
          <InfoProvider info='Faculties can build their own flexible schedule , by choosing the date and time from below.' />
          <Gap>Available Timing</Gap>
          <Formik initialValues={initialValues} onSubmit={(values)=>console.log(values.timing)}>
            {({ values,setFieldValue }) => (
              <Form className='flex flex-col'>
                <FieldArray name='timing'>
                  {({ push, remove }) => (
                    <div className='flex flex-col'>
                      {values.timing.map((item, i) =>
                          <div key={i} className='relative flex flex-col'>
                          {values.timing.length > 1 && <IconButton onClick={() => remove(i)} className=' self-end'><Delete /></IconButton>}

                            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 my-2'>
                        <Field
                         name={`timing[${i}].start`}
                        render={({ field }) => (
                          <MobileDateTimePicker
                          onChange={(e)=>setFieldValue(`timing[${i}].start`,e['$d'])}
                            sx={{ width: '100%' }}
                            label="Start"
                            renderInput={(params) => <TextField {...params} />}
                          />
                        )}
                        />
                        <Field
                         name={`timing[${i}].end`}
                        render={({ field }) => (
                          <MobileDateTimePicker
                          onChange={(e)=>setFieldValue(`timing[${i}].end`,e['$d'])}
                            sx={{ width: '100%' }}
                            label="End"
                            renderInput={(params) => <TextField {...params} />}
                          />
                        )}
                        />

                    </div>
                      </div>
                      )}
                    <button onClick={()=>{push({start:'',end:''})}} className=' bg-primary self-end rounded-sm p-1 md: w-28 text-white mt-4'>ADD</button>
                    </div>
                  )}
                </FieldArray>

              <button type="submit" className=' bg-primary self-end rounded-sm p-1 md: w-28 text-white mt-4'>Submit</button>


              </Form>
            )}
          </Formik>

        </div>
      </LocalizationProvider>
    </Dashboard>
  );
};

export default Scheduler;
