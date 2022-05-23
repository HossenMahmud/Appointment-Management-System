import React, { useState } from 'react';
import PatientRegisterForm from '../../Components/loginRegistration/PatientRegisterForm';
import { LayoutContiner } from '../../styles/MetarialStyles';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PatientRegister = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const Data = { ...data, role: 'patient' }
    const handleFormSubmit = (e) => {
        if (Data !== null) {
            axios.post("http://localhost:5000/register", Data).then(res => {
                alert(res.data.message)
                navigate('/login')
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