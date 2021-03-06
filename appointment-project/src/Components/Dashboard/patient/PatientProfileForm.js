import styled from '@emotion/styled';
import { Button, Grid, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { FormLayout, TextFieldMake } from '../../../styles/MetarialStyles';
import doctorPhoto from '../../../assets/images/patient.jpg';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const PatientProfileForm = ({ data, setData, preview, handleImageSet, handleSubmit }) => {

    const gender = [
        {
            value: "Other",
            label: "Other",
        },
        {
            value: "Male",
            label: "Male",
        },
        {
            value: "Female",
            label: "Female",
        },
    ];

    const Blood = [
        {
            value: "A+",
            label: "A+",
        },
        {
            value: "A-",
            label: "A-",
        },
        {
            value: "B+",
            label: "B+",
        },
        {
            value: "B-",
            label: "B-",
        },
        {
            value: "O+",
            label: "O+",
        },
        {
            value: "O-",
            label: "O-",
        },
        {
            value: "AB+",
            label: "AB+",
        },
        {
            value: "AB-",
            label: "AB-",
        },
    ];
    const Input = styled('input')({
        display: 'none',
    });

    const ImgButton = styled(Button)(({ theme }) => ({
        backgroundColor: "#52CBF3",
        borderColor: '#52CBF3',
        textTransform: 'capitalize',
        color: '#fff',
        padding: '6px 10px',
        '&:hover': {
            backgroundColor: '#52CBF3',
            borderColor: '#52CBF3',
            boxShadow: 'none',
            color: '#fff',
        }
    }));

    return (
        <Box component="form" onSubmit={handleSubmit} >
            <FormLayout>
                <Typography variant='h6' sx={{ color: '##272b41', fontSize: '14px', mb: 2 }}>General Info</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                        <Stack
                            direction="row"
                            justifyContent="start"
                            alignItems="center"
                            spacing={2}
                        >
                            <Box>

                                {preview ?
                                    <img src={preview} alt="" width="100px" height="100px" style={{ borderRadius: "10px" }} />
                                    : <img src={doctorPhoto} alt="" width="100px" height="100px" style={{ borderRadius: "10px" }} />
                                }
                            </Box>
                            <Box>
                                <label htmlFor="contained-button-file">
                                    <Input
                                        accept="image/*"
                                        id="contained-button-file"
                                        type="file"
                                        name="image"
                                        onChange={(e) => handleImageSet(e)}
                                    />
                                    <ImgButton startIcon={<CloudUploadIcon />} variant="contained" component="span">
                                        Upload
                                    </ImgButton>
                                </label>
                            </Box>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextFieldMake
                            type='text'
                            name='firstName'
                            label='First Name'
                            fullWidth
                            size="medium"
                            InputProps={{ style: { fontSize: 14 } }}
                            InputLabelProps={{ style: { fontSize: 14 } }}
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
                            name='lastName'
                            label='Last Name'
                            fullWidth
                            size="medium"
                            InputProps={{ style: { fontSize: 14 } }}
                            InputLabelProps={{ style: { fontSize: 14 } }}
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
                            fullWidth
                            label="Gender"
                            variant="outlined"
                            name="gender"
                            focused
                            size="medium"
                            InputProps={{ style: { fontSize: 14 } }}
                            InputLabelProps={{ style: { fontSize: 14 } }}
                            onChange={(event) =>
                                setData({
                                    ...data,
                                    [event.target.name]: event.target.value,
                                })
                            }
                            required
                            select
                            SelectProps={{ native: true }}
                        >
                            {gender.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextFieldMake>
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
                            fullWidth
                            label="Blood Group"
                            variant="outlined"
                            name="blood"
                            focused
                            size="medium"
                            InputProps={{ style: { fontSize: 14 } }}
                            InputLabelProps={{ style: { fontSize: 14 } }}
                            onChange={(event) =>
                                setData({
                                    ...data,
                                    [event.target.name]: event.target.value,
                                })
                            }
                            required
                            select
                            SelectProps={{ native: true }}
                        >
                            {Blood.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextFieldMake>
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
            <Button variant="contained" size='medium' color="info" sx={{ mt: 3 }} type="submit">Save</Button>
        </Box>
    );
};

export default PatientProfileForm;