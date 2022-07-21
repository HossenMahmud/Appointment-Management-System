import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AppointmentsList from '../../../Components/Dashboard/admin/AppointmentsList';
import { LayoutContiner } from '../../../styles/MetarialStyles';

const AllAppointments = () => {
    const [allAppointment, setAllAppointment] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/allApointment').then((res) => {
            setAllAppointment(res.data);
        });
    }, []);

    return (
        <LayoutContiner>
            {
                (allAppointment.length !== 0) && <AppointmentsList allAppointment={allAppointment}></AppointmentsList>
            }

        </LayoutContiner>
    );
};

export default AllAppointments;