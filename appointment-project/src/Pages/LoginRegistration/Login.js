import React, { useState } from 'react';
import LoginForm from '../../Components/loginRegistration/LoginForm';
import { LayoutContiner } from '../../styles/MetarialStyles';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);


    const updateUser = (user) => {
        localStorage.setItem("MyUser", JSON.stringify(user))
    }

    const login = () => {
        if (data.length !== 0) {
            axios.post("http://localhost:5000/login", data)
                .then(res => {
                    if (res.data.message) {
                        alert(res.data.message)
                        updateUser(res.data.user)
                        navigate('/')
                        window.location.reload();

                    } else {
                        alert(res.data.message)
                        navigate('/login')
                    }
                })
        }
        else {
            alert("Please Enter Email & Password")
        }
    }



    return (
        <LayoutContiner>
            <LoginForm login={login} data={data} setData={setData}></LoginForm>
        </LayoutContiner>
    );
};

export default Login;