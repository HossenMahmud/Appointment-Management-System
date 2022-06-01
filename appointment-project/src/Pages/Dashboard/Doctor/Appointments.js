import React from 'react';
import DoctorAppointmentList from '../../../Components/Dashboard/doctor/DoctorAppointmentList';
import { LayoutContiner } from '../../../styles/MetarialStyles';

const Appointments = () => {
    return (
        <LayoutContiner>
            <DoctorAppointmentList></DoctorAppointmentList>
        </LayoutContiner>
    );
};

export default Appointments;