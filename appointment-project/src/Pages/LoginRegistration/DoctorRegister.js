import React, { useState } from 'react';
import axios from "axios";
import DoctorRegisterForm from '../../Components/loginRegistration/DoctorRegisterForm';
import { LayoutContiner } from '../../styles/MetarialStyles';
import { useNavigate } from "react-router-dom";
const DoctorRegister = () => {

    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const Data = { ...data, role: 'doctor' };


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
            <DoctorRegisterForm
                data={data}
                setData={setData}
                handleFormSubmit={handleFormSubmit}
            ></DoctorRegisterForm>
        </LayoutContiner>
    );
};

export default DoctorRegister;