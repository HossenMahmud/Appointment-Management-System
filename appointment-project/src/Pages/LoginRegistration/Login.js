import React, { useState } from 'react';
import LoginForm from '../../Components/loginRegistration/LoginForm';
import { LayoutContiner } from '../../styles/MetarialStyles';
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const { setUser } = useAuth();
    let location = useLocation();
    const redirect_url = location?.state?.from?.pathname || "/"

    const saveUser = (user) => {
        localStorage.setItem("MyUser", JSON.stringify(user));
    }

    const handleLogin = e => {
        const email = data.email;
        const password = data.password;
        axios.get(`http://localhost:5000/login/${email}`).then((res) => {
            const user = res.data[0];
            if (user) {
                if (user.password === password) {
                    saveUser(user);
                    setUser(user);
                    e.target.reset();
                    navigate(redirect_url);
                }
                else {
                    alert("Password Doesn't Match")
                }
            } else {
                alert("User Doesn't Exist");
            }
        });
        e.preventDefault();
    };

    return (
        <LayoutContiner>
            <LoginForm login={handleLogin} data={data} setData={setData}></LoginForm>
        </LayoutContiner>
    );
};

export default Login;