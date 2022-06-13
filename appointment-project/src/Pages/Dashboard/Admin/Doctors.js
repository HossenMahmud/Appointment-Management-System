import React, { useEffect, useState } from 'react';
import { LayoutContiner } from '../../../styles/MetarialStyles';
import DoctorsList from '../../../Components/Dashboard/admin/DoctorsList'
import axios from 'axios';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/allDoctors').then((res) => {
            setDoctors(res.data);
        });
    }, []);

    return (
        <LayoutContiner>
            {(doctors.length !== 0) && <DoctorsList
                doctors={doctors}
            >
            </DoctorsList>
            }
        </LayoutContiner>
    );
};

export default Doctors;