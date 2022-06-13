
import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { FormLayout, TextFieldMake } from '../../../styles/MetarialStyles';


const PatientUpdateForm = ({ data, setData, patient, updatePatient }) => {
    return (
        <Box component="form" onSubmit={updatePatient}>
            <FormLayout>
                <Typography variant='h6' sx={{ color: '##272b41', fontSize: '14px', mb: 2 }}>Update Info</Typography>

                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextFieldMake
                            type='text'
                            name='firstName'
                            label='First Name'
                            fullWidth
                            size="medium"
                            InputProps={{ style: { fontSize: 14 } }}
                            InputLabelProps={{ style: { fontSize: 14 } }}
                            focused
                            defaultValue={patient.firstName}
                            onChange={(event) =>
                                setData({
                                    ...data,
                                    [event.target.name]: event.target.value,
                                })
                            }
                        ></TextFieldMake>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextFieldMake
                            type='text'
                            name='lastName'
                            label='Last Name'
                            fullWidth
                            size="medium"
                            InputProps={{ style: { fontSize: 14 } }}
                            InputLabelProps={{ style: { fontSize: 14 } }}
                            focused
                            defaultValue={patient.lastName}
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    [e.target.name]: e.target.value,
                                })
                            }
                        ></TextFieldMake>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextFieldMake
                            type='text'
                            name='gender'
                            label='Gender'
                            fullWidth
                            size="medium"
                            InputProps={{ style: { fontSize: 14 } }}
                            InputLabelProps={{ style: { fontSize: 14 } }}
                            focused
                            defaultValue={patient.gender}
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    [e.target.name]: e.target.value,
                                })
                            }
                        ></TextFieldMake>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextFieldMake
                            type='text'
                            name='blood'
                            label='Blood Group'
                            fullWidth
                            size="medium"
                            InputProps={{ style: { fontSize: 14 } }}
                            InputLabelProps={{ style: { fontSize: 14 } }}
                            focused
                            defaultValue={patient.blood}
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    [e.target.name]: e.target.value,
                                })
                            }
                        ></TextFieldMake>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextFieldMake
                            type='date'
                            name='birth'
                            label='Date of Birth'
                            fullWidth
                            focused
                            size="medium"
                            InputProps={{ style: { fontSize: 14 } }}
                            InputLabelProps={{ style: { fontSize: 14 } }}
                            defaultValue={patient.birth}
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    [e.target.name]: e.target.value,
                                })
                            }
                        ></TextFieldMake>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextFieldMake
                            type='number'
                            name='phone'
                            label='Mobile'
                            fullWidth
                            size="medium"
                            InputProps={{ style: { fontSize: 14 } }}
                            InputLabelProps={{ style: { fontSize: 14 } }}
                            focused
                            defaultValue={patient.phone}
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    [e.target.name]: e.target.value,
                                })
                            }
                        ></TextFieldMake>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextFieldMake
                            type='text'
                            name='city'
                            label='City'
                            fullWidth
                            size="medium"
                            InputProps={{ style: { fontSize: 14 } }}
                            InputLabelProps={{ style: { fontSize: 14 } }}
                            focused
                            defaultValue={patient.city}
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    [e.target.name]: e.target.value,
                                })
                            }
                        ></TextFieldMake>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextFieldMake
                            type='text'
                            name='address'
                            label='Address'
                            fullWidth
                            size="medium"
                            InputProps={{ style: { fontSize: 14 } }}
                            InputLabelProps={{ style: { fontSize: 14 } }}
                            focused
                            defaultValue={patient.address}
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    [e.target.name]: e.target.value,
                                })
                            }
                        ></TextFieldMake>
                    </Grid>
                </Grid>
            </FormLayout>
            <Button variant="contained" size='medium' color="info" sx={{ mt: 3 }} type="submit">Update</Button>
        </Box>
    );
};

export default PatientUpdateForm;