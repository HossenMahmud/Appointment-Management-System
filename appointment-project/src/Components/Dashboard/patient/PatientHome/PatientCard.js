import { Grid } from '@mui/material';
import React from 'react';
import heart from '../../../../assets/images/heart.png'
import temperature from '../../../../assets/images/temperature.png'
import glucose from '../../../../assets/images/glucose.png'
import blood from '../../../../assets/images/blood.png'
import PatientCardItem from './PatientCardItem';

const PatientCard = () => {

    const PatientHeart = {
        title: 'Heart Rate',
        number: '12 bpm',
        img: `${heart}`,
        backgroundcolor: '#d4facd',
    }

    const PatientTemperature = {
        title: 'Body Temperature',
        number: '18 c',
        img: `${temperature}`,
        backgroundcolor: '#F5E8AE',
    }

    const PatientGlucose = {
        title: 'Glucose Level',
        number: '70 - 80',
        img: `${glucose}`,
        backgroundcolor: '#fad4d4',
    }
    const PatientBlood = {
        title: 'Blood Pressure',
        number: '202/90 mg/dl',
        img: `${blood}`,
        backgroundcolor: '#e6ccff',
    }
    return (
        <Grid container spacing={2}>
            {/* Cart Item */}
            <Grid item xs={12} sm={4} md={3}>
                <PatientCardItem value={PatientHeart} />
            </Grid>

            {/* Cart Item */}
            <Grid item xs={12} sm={4} md={3}>
                <PatientCardItem value={PatientTemperature} />
            </Grid>

            {/* Cart Item */}
            <Grid item xs={12} sm={4} md={3}>
                <PatientCardItem value={PatientGlucose} />
            </Grid>

            {/* Cart Item */}
            <Grid item xs={12} sm={4} md={3}>
                <PatientCardItem value={PatientBlood} />
            </Grid>


        </Grid>
    );
};

export default PatientCard;