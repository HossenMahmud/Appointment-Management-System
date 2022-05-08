import React, { useState } from 'react';
import PatientRegisterForm from '../../Components/loginRegistration/PatientRegisterForm';
import { LayoutContiner } from '../../styles/MetarialStyles';
import axios from "axios";

const PatientRegister = () => {
    const [data, setData] = useState([]);
    const Data = { ...data, role: 'patient' }
    const handleFormSubmit = (e) => {
        if (Data !== null) {
            axios.post("http://localhost:5000/adduser", Data).then((res) => {
                if (res.status === 200) {
                }
            });
        } else {

        }
        e.preventdefault()
    }

    return (
        <LayoutContiner>
            <PatientRegisterForm
                data={data}
                setData={setData}
                handleFormSubmit={handleFormSubmit}
            >
            </PatientRegisterForm>
        </LayoutContiner>
    );
};

export default PatientRegister;