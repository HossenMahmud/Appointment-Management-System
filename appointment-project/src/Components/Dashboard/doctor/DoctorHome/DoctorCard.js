import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import patientIcon from '../../../../assets/images/patientIcon.png';
import patientIcon2 from '../../../../assets/images/patientIcon2.png';
import appointmentIcon from '../../../../assets/images/appointmentIcon.png';
import DorctorCardItem from './DorctorCardItem';
import axios from 'axios';
const DoctorCard = ({ doctor }) => {
    const id = doctor?.id;
    const [todayPatientData, setTodayPatientData] = useState([]);
    const [apptRequest, setApptRequest] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/doctorTodayPatient/${id}`).then((res) => {
            setTodayPatientData(res.data);
        });

        axios.get(`http://localhost:5000/doctorApptRequest/${id}`).then((res) => {
            setApptRequest(res.data);
        });

    }, [id]);


    const totalPatient = {
        name: 'Total Patient',
        patient: 175,
        date: 'Till Today',
        img: `${patientIcon}`,
        backgroundcolor: '#d4facd',
        Circlecolor: '#7bb13c'
    }

    const todayPatient = {
        name: 'Today Patient',
        patient: `${todayPatientData?.length}`,
        date: `${todayPatientData[0]?.apptDate}`,
        img: `${patientIcon2}`,
        backgroundcolor: '#F5E8AE',
        Circlecolor: '#ffbc34'
    }

    const appointments = {
        name: 'Appointments Request',
        patient: `${apptRequest?.length}`,
        date: 'Pendding',
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