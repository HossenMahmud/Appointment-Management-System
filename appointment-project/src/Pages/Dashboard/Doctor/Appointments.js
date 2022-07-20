import React, { useEffect, useState } from 'react';
import DoctorAppointmentList from '../../../Components/Dashboard/doctor/DoctorAppointmentList';
import { LayoutContiner } from '../../../styles/MetarialStyles';
import useAuth from '../../../Hooks/useAuth';
import axios from 'axios';

const Appointments = () => {
    const { user } = useAuth();
    const userId = user?.id
    const [doctor, setDoctor] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/doctor/${userId}`).then((res) => {
            setDoctor(res.data[0]);
        });
    }, [userId]);

    return (
        <LayoutContiner>
            {
                (doctor.length !== 0) && <DoctorAppointmentList doctor={doctor}></DoctorAppointmentList>
            }

        </LayoutContiner>
    );
};

export default Appointments;