import React, { useEffect, useState } from 'react';
import LoginForm from '../../Components/loginRegistration/LoginForm';
import { LayoutContiner } from '../../styles/MetarialStyles';
import axios from "axios";
import { Button } from '@mui/material';

const Login = () => {
    const [loginStatus, setLoginStatus] = useState("");
    const [data, setData] = useState([])
    axios.defaults.withCredentials = true;

    const login = () => {
        axios.post("http://localhost:5000/login", {
            email: data.email,
            password: data.password,
        }).then((response) => {
            if (response.data.message) {
                setLoginStatus(response.data.message);
            } else {
                setLoginStatus(response.data[0]);
            }
        });
    };

    useEffect(() => {
        axios.get("http://localhost:5000/login").then((response) => {
            if (response.data.loggedIn === true) {
                setLoginStatus(response.data.user[0]);
            }
        });
    }, []);



    return (
        <LayoutContiner>
            <h1>{loginStatus.email}</h1>
            <h1>{loginStatus.name}</h1>
            <h1>{loginStatus.role}</h1>
            <LoginForm login={login} data={data} setData={setData}></LoginForm>
        </LayoutContiner>
    );
};

export default Login;