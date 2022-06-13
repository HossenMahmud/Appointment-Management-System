import React, { useEffect, useState } from 'react';
import PatientsList from '../../../Components/Dashboard/admin/PatientsList';
import { LayoutContiner } from '../../../styles/MetarialStyles';
import Axios from 'axios'
const Patients = () => {
    const [patients, setPatients] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:5000/allPatients').then((res) => {
            setPatients(res.data);
        });
    }, []);
    return (
        <LayoutContiner>
            {
                (patients.length !== 0) && <PatientsList
                    patients={patients}
                ></PatientsList>
            }

        </LayoutContiner>
    );
};

export default Patients;