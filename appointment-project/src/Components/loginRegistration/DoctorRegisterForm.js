import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import { FormLayout, LogRegiButton, TextFieldMake } from '../../styles/MetarialStyles';
import loginImg from '../../assets/images/loginImg.png';

const DoctorRegisterForm = ({ handleFormSubmit, data, setData }) => {
    return (
        <Grid container spacing={3} alignItems="center">

            <Grid item xs={12} sm={6}>
                <div>
                    <img src={loginImg} alt="" style={{ width: "100%" }} />
                </div>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Box>
                    <FormLayout>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant='h6'>Doctor Register</Typography>
                            <Link
                                to="/patientRegister"
                                style={{ textDecoration: 'none', color: "#20C0F3" }}
                            >Are you a Patient?</Link>

                        </Box>
                        <Box component="form" onSubmit={handleFormSubmit}>
                            <TextFieldMake
                                type='text'
                                name='name'
                                label='Name'
                                fullWidth
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                            ></TextFieldMake>

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
                                label='Create Password'
                                fullWidth
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                            ></TextFieldMake>
                            <LogRegiButton variant="contained" fullWidth type='submit'> SignUp </LogRegiButton>
                        </Box>
                        <Box sx={{ textAlign: 'center', fontSize: '13px' }}>
                            <Link to="/login" style={{ textDecoration: 'none', color: "#20C0F3", fontWeight: 'bold' }}> Already have an account?</Link>
                        </Box>
                    </FormLayout>
                </Box>
            </Grid>

        </Grid>
    );
};

export default DoctorRegisterForm;