import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import loginImg from '../../assets/images/loginImg.png';
import { FormLayout, LogRegiButton, TextFieldMake } from '../../styles/MetarialStyles';
import { Link } from "react-router-dom";

const LoginForm = ({ data, setData, login }) => {
    return (
        <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: { xs: 7, sm: 18 } }}>

            <Grid item xs={12} sm={4}>
                <div>
                    <img src={loginImg} alt="" style={{ width: "100%" }} />
                </div>
            </Grid>

            <Grid item xs={12} sm={4}>
                <Box component="form" onSubmit={login}>
                    <FormLayout>
                        <Box sx={{ backgroundColor: 'blue', textAlign: 'center', py: 1, borderRadius: '5px' }}>
                            <Typography sx={{ color: '#f0f0f0' }}>Login</Typography>
                        </Box>
                        <Box>
                            <TextFieldMake
                                type='email'
                                name='email'
                                label='Email'
                                size='small'
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
                                size='small'
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