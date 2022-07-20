import React, { useEffect, useState } from 'react';
import { LayoutContiner } from '../../../styles/MetarialStyles';
import DoctorsList from '../../../Components/Dashboard/admin/DoctorsList'
import axios from 'axios';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    const [condition, setCondition] = useState(true);
    useEffect(() => {
        axios.get('http://localhost:5000/allDoctors').then((res) => {
            setDoctors(res.data);
        });
    }, [condition]);

    return (
        <LayoutContiner>
            {(doctors.length !== 0) && <DoctorsList
                doctors={doctors}
                condition={condition}
                setCondition={setCondition}
            >
            </DoctorsList>
            }
        </LayoutContiner>
    );
};

export default Doctors;