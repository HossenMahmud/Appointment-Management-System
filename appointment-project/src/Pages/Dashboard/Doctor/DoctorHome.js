import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DoctorCard from '../../../Components/Dashboard/doctor/DoctorHome/DoctorCard';
import TodayPatient from '../../../Components/Dashboard/doctor/DoctorHome/TodayPatient';
import useAuth from '../../../Hooks/useAuth';
import { LayoutContiner } from '../../../styles/MetarialStyles';
const DoctorHome = () => {
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
            <DoctorCard doctor={doctor}></DoctorCard>
            <TodayPatient doctor={doctor}></TodayPatient>
        </LayoutContiner >
    );
};

export default DoctorHome;