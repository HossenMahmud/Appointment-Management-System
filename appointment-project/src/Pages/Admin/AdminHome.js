import React from 'react';
import AppointmentList from '../../Components/admin/adminHome/AppointmentList';
import ChartSection from '../../Components/admin/adminHome/ChartSection';
import DoctorPatientList from '../../Components/admin/adminHome/DoctorPatientList';
// import ChartSection from '../../Components/admin/adminHome/ChartSection';
import HeadingCard from '../../Components/admin/adminHome/HeadingCard';
import { LayoutContiner } from '../../styles/MetarialStyles';



const AdminHome = () => {
    return (
        <LayoutContiner>
            <HeadingCard></HeadingCard>
            <ChartSection></ChartSection>
            <DoctorPatientList></DoctorPatientList>
            <AppointmentList></AppointmentList>
        </LayoutContiner >
    );
};

export default AdminHome;