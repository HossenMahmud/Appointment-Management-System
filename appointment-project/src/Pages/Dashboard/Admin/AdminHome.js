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
        Axios.get('https://doctor-appointment-server.rpi.gov.bd/allDoctors').then((res) => {
            setDoctors(res.data);
        });
    }, []);
    const [patients, setPatients] = useState([]);
    useEffect(() => {
        Axios.get('https://doctor-appointment-server.rpi.gov.bd/allPatients').then((res) => {
            setPatients(res.data);
        });
    }, []);

    const [allAppointment, setAllAppointment] = useState([]);
    useEffect(() => {
        Axios.get('https://doctor-appointment-server.rpi.gov.bd/allApointment').then((res) => {
            setAllAppointment(res.data);
        });
    }, []);

    return (
        <LayoutContiner>
            {
                (doctors.length !== 0 && patients.length !== 0) && <HeadingCard doctors={doctors} patients={patients} allAppointment={allAppointment}></HeadingCard>
            }
            <ChartSection></ChartSection>
            {
                (doctors.length !== 0 && patients.length !== 0) && <DoctorPatientList doctors={doctors} patients={patients}></DoctorPatientList>
            }

            {
                (allAppointment.length !== 0) && <AppointmentList allAppointment={allAppointment}></AppointmentList>
            }

        </LayoutContiner >
    );
};

export default AdminHome;