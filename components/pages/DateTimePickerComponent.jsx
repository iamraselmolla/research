import React, { useState } from 'react';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const DateTimePickerComponent = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(null);

  const handleDateTimeChange = (date) => {
    setSelectedDateTime(date);
  };


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className=' flex pt-20 justify-center h-screen bg-gray-300 p-4'>

        <div>
          <div className='mb-8'>
            <DateTimePicker
              value={selectedDateTime}
              onChange={handleDateTimeChange}
              label="Select a time for reviewing the research paper"
            />
          </div>
          <div>
            <MobileDateTimePicker
              value={selectedDateTime}
              onChange={handleDateTimeChange}
              label="Mobile Version"
            >

            </MobileDateTimePicker>
          </div>


          {selectedDateTime && (
            <p>Selected date and time: {new Date(selectedDateTime).toLocaleString("en-IN", {
              timeZone: "Asia/Kolkata",
              hour12: true,
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit"
            })}</p>
          )}
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default DateTimePickerComponent;
