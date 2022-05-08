import React, { useState } from 'react';
import axios from "axios";
import DoctorRegisterForm from '../../Components/loginRegistration/DoctorRegisterForm';
import { LayoutContiner } from '../../styles/MetarialStyles';

const DoctorRegister = () => {
    const [data, setData] = useState([]);
    const Data = { ...data, role: 'doctor' }
    const handleFormSubmit = (e) => {
        if (Data !== null) {
            axios.post("http://localhost:5000/adduser", Data).then((res) => {
                if (res.status === 200) {
                }
            });
        } else {
            alert("Please Enter all Feild Value");
        }
        e.preventdefault()
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