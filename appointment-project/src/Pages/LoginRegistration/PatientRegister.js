import React, { useState } from 'react';
import PatientRegisterForm from '../../Components/loginRegistration/PatientRegisterForm';
import { LayoutContiner } from '../../styles/MetarialStyles';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PatientRegister = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const Data = { ...data, role: 'patient' }

    const handleFormSubmit = e => {
        axios.post("https://doctor-appointment-server.rpi.gov.bd/register", Data).then(res => {
            if (res.status === 200) {
                navigate("/login");
            }
        });
        e.preventDefault();
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