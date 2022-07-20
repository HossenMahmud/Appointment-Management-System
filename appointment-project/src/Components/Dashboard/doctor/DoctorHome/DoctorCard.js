import { Grid } from '@mui/material';
import React from 'react';
import patientIcon from '../../../../assets/images/patientIcon.png';
import patientIcon2 from '../../../../assets/images/patientIcon2.png';
import appointmentIcon from '../../../../assets/images/appointmentIcon.png';
import DorctorCardItem from './DorctorCardItem';
const DoctorCard = ({ doctor }) => {

    const totalPatient = {
        name: 'Total Patient',
        patient: 786,
        date: 'Till Today',
        img: `${patientIcon}`,
        backgroundcolor: '#d4facd',
        Circlecolor: '#7bb13c'
    }

    const todayPatient = {
        name: 'Today Patient',
        patient: 36,
        date: '26 April 2022',
        img: `${patientIcon2}`,
        backgroundcolor: '#F5E8AE',
        Circlecolor: '#ffbc34'
    }

    const appointments = {
        name: 'Appointments',
        patient: 21,
        date: '5 May 2022',
        img: `${appointmentIcon}`,
        backgroundcolor: '#fad4d4',
        Circlecolor: '#e84646'
    }
    return (
        <Grid container spacing={2}>
            {/* Cart Item */}
            <Grid item xs={12} sm={4}>
                <DorctorCardItem value={totalPatient}></DorctorCardItem>
            </Grid>

            {/* Cart Item */}
            <Grid item xs={12} sm={4}>
                <DorctorCardItem value={todayPatient}></DorctorCardItem>
            </Grid>

            {/* Cart Item */}
            <Grid item xs={12} sm={4}>
                <DorctorCardItem value={appointments}></DorctorCardItem>
            </Grid>
        </Grid>
    );
};

export default DoctorCard;