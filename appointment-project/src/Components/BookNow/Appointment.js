import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AppointmentButton from './AppointmentButton';

const Appointment = ({ doctorId, dayName, hospitalName, startTime, endTime, location }) => {

    const [doctor, setDoctor] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/singleDoctor/${doctorId}`)
            .then(res => res.json())
            .then(data => setDoctor(data[0]))
    }, [doctorId]);

    let weekName = dayName
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    let MonthName = month[d.getMonth()];
    let year = d.getFullYear();
    let dayNumber = d.getDate();
    let getTot = daysInMonth(d.getMonth(), d.getFullYear()); //Get total days in a month
    weekName = new Array();   //Declaring array for inserting Sundays
    for (var i = 1; i <= getTot; i++) {    //looping through days in month
        var newDate = new Date(d.getFullYear(), d.getMonth(), i)
        if (dayName === 'Sunday') {
            if (newDate.getDay() === 0) {   //if Sunday
                weekName.push(i);
            }
        }
        else if (dayName === 'Monday') {
            if (newDate.getDay() === 1) {   //if Monday
                weekName.push(i);
            }
        }
        else if (dayName === 'Tuesday') {
            if (newDate.getDay() === 2) {   //if Tuesday
                weekName.push(i);
            }
        }
        else if (dayName === 'Wednessday') {
            if (newDate.getDay() === 3) {   //if Wednessday
                weekName.push(i);
            }
        }
        else if (dayName === 'Thursday') {
            if (newDate.getDay() === 4) {   //if Thursday
                weekName.push(i);
            }
        }
        else if (dayName === 'Friday') {
            if (newDate.getDay() === 5) {   //if Friday
                weekName.push(i);
            }
        } else {
            if (newDate.getDay() === 6) {   //if Saturday
                weekName.push(i);
            }
        }

    }
    function daysInMonth(month, year) {
        return new Date(year, month, 0).getDate();
    }


    return (
        <>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>

                {
                    weekName?.map((day, i) => <AppointmentButton key={i} day={day} doctor={doctor} dayName={dayName} hospitalName={hospitalName} startTime={startTime} endTime={endTime} location={location} MonthName={MonthName} year={year} dayNumber={dayNumber}></AppointmentButton>)
                }
            </Box>



        </>
    );
};
export default Appointment;