import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import loginImg from '../../assets/images/loginImg.png';
import { FormLayout, LogRegiButton, TextFieldMake } from '../../styles/MetarialStyles';
import { Link } from "react-router-dom";

const LoginForm = ({ data, setData, login }) => {
    return (
        <Grid container spacing={3} alignItems="center">

            <Grid item xs={12} sm={6}>
                <div>
                    <img src={loginImg} alt="" style={{ width: "100%" }} />
                </div>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Box component="form" onSubmit={login}>
                    <FormLayout>
                        <Typography variant='h6'>Login</Typography>
                        <Box>
                            <TextFieldMake
                                type='email'
                                name='email'
                                label='Email'
                                fullWidth
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                            ></TextFieldMake>

                            <TextFieldMake
                                type='password'
                                name='password'
                                label='Password'
                                fullWidth
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                            ></TextFieldMake>
                            <LogRegiButton variant="contained" fullWidth type="submit"> Login </LogRegiButton>
                        </Box>
                        <Box sx={{ textAlign: 'center', fontSize: '13px' }}>
                            <Typography variant='body'>Don’t have an account?   <Link to="/patientRegister" style={{ textDecoration: 'none', color: "#20C0F3" }}> Register</Link></Typography>
                        </Box>
                    </FormLayout>
                </Box>
            </Grid>

        </Grid>
    );
};

export default LoginForm;