import React from 'react';
import AppointmentsList from '../../../Components/Dashboard/admin/AppointmentsList';
import { LayoutContiner } from '../../../styles/MetarialStyles';

const AllAppointments = () => {
    return (
        <LayoutContiner>
            <AppointmentsList></AppointmentsList>
        </LayoutContiner>
    );
};

export default AllAppointments;