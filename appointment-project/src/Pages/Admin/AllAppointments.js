import React from 'react';
import AppointmentsList from '../../Components/admin/AppointmentsList';
import { LayoutContiner } from '../../styles/MetarialStyles';

const AllAppointments = () => {
    return (
        <LayoutContiner>
            <AppointmentsList></AppointmentsList>
        </LayoutContiner>
    );
};

export default AllAppointments;