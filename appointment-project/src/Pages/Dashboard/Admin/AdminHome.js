import React, { useEffect, useState } from 'react';
import AppointmentList from '../../../Components/Dashboard/admin/adminHome/AppointmentList';
import ChartSection from '../../../Components/Dashboard/admin/adminHome/ChartSection';
import DoctorPatientList from '../../../Components/Dashboard/admin/adminHome/DoctorPatientList';
import HeadingCard from '../../../Components/Dashboard/admin/adminHome/HeadingCard';
import { LayoutContiner } from '../../../styles/MetarialStyles';
import Axios from 'axios';

const AdminHome = ({ updateUser }) => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:5000/allDoctors').then((res) => {
            setDoctors(res.data);
        });
    }, []);
    const [patients, setPatients] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:5000/allPatients').then((res) => {
            setPatients(res.data);
        });
    }, []);

    return (
        <LayoutContiner>
            {
                (doctors.length !== 0 && patients.length !== 0) && <HeadingCard doctors={doctors} patients={patients}></HeadingCard>
            }
            <ChartSection></ChartSection>
            {
                (doctors.length !== 0 && patients.length !== 0) && <DoctorPatientList doctors={doctors} patients={patients}></DoctorPatientList>
            }

            <AppointmentList></AppointmentList>
        </LayoutContiner >
    );
};

export default AdminHome;