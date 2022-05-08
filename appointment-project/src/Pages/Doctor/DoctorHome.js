import React from 'react';
import DoctorCard from '../../Components/doctor/DoctorHome/DoctorCard';
import TodayPatient from '../../Components/doctor/DoctorHome/TodayPatient';
import { LayoutContiner } from '../../styles/MetarialStyles';
const DoctorHome = () => {
    return (
        <LayoutContiner>
            <DoctorCard></DoctorCard>
            <TodayPatient></TodayPatient>
        </LayoutContiner >
    );
};

export default DoctorHome;