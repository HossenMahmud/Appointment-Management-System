import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import { FormLayout, LogRegiButton, TextFieldMake } from '../../styles/MetarialStyles';
import loginImg from '../../assets/images/loginImg.png';

const DoctorRegisterForm = ({ handleFormSubmit, data, setData }) => {
    return (
        <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: { xs: 7, sm: 18 } }}>

            <Grid item xs={12} sm={4}>
                <div>
                    <img src={loginImg} alt="" style={{ width: "100%" }} />
                </div>
            </Grid>

            <Grid item xs={12} sm={4}>
                <Box>
                    <FormLayout>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'blue', textAlign: 'center', px: 1, py: 2, borderRadius: '5px' }}>
                            <Typography sx={{ color: '#f0f0f0' }}>Doctor Register</Typography>
                            <Link
                                to="/patientRegister"
                                style={{ textDecoration: 'none', color: "yellow" }}
                            >Are you a Patient?</Link>

                        </Box>
                        <Box component="form" onSubmit={handleFormSubmit}>
                            <TextFieldMake
                                type='text'
                                name='userName'
                                label='User Name'
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
                                size='small'
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