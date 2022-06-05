import React, { useState } from 'react';
import LoginForm from '../../Components/loginRegistration/LoginForm';
import { LayoutContiner } from '../../styles/MetarialStyles';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    // const location = useLocation();
    const [data, setData] = useState([]);


    const updateUser = (user) => {
        localStorage.setItem("MyUser", JSON.stringify(user))
    }

    const login = e => {
        if (data.length !== 0) {
            axios.post("http://localhost:5000/login", data)
                .then(res => {
                    if (res.data.message) {
                        alert(res.data.message)
                        updateUser(res.data.user)
                        // const destination = location?.state?.from || '/';
                        navigate('/');
                        window.location.reload();

                    } else {
                        alert(res.data.error)
                        navigate('/login')
                    }
                })
        }
        else {
            alert("Please Enter Email & Password")
        }
        e.preventDefault();
    }



    return (
        <LayoutContiner>
            <LoginForm login={login} data={data} setData={setData}></LoginForm>
        </LayoutContiner>
    );
};

export default Login;