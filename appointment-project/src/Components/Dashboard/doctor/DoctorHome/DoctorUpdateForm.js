import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { FormLayout, TextFieldMake } from '../../../styles/MetarialStyles';


const DoctorUpdateForm = ({ data, setData, user, ProfileUpdate }) => {
    return (
        <Box component="form" onSubmit={ProfileUpdate}>
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
                            defaultValue={user.firstName}
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
                            defaultValue={user.lastName}
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
                            defaultValue={user.gender}
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
                            defaultValue={user.blood}
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
                            defaultValue={user.birth}
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
                            defaultValue={user.phone}
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
                            defaultValue={user.city}
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
                            defaultValue={user.address}
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

export default DoctorUpdateForm;