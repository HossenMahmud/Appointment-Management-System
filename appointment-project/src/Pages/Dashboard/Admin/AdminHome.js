import React from 'react';
import AppointmentList from '../../../Components/Dashboard/admin/adminHome/AppointmentList';
import ChartSection from '../../../Components/Dashboard/admin/adminHome/ChartSection';
import DoctorPatientList from '../../../Components/Dashboard/admin/adminHome/DoctorPatientList';
import HeadingCard from '../../../Components/Dashboard/admin/adminHome/HeadingCard';
import { LayoutContiner } from '../../../styles/MetarialStyles';



const AdminHome = ({ updateUser }) => {
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