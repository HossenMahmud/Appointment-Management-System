import { Button, Grid, Paper, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { AddButton, CancelButton, FormLayout, TextFieldMake } from '../../../styles/MetarialStyles';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';
import AddIcon from '@mui/icons-material/Add';



const DoctorUpdateForm = ({ doctorInfo, id }) => {


    const [data, setData] = useState([]);
    const navigate = useNavigate();
    let isEducation = [];
    let isClinic = [];
    if (doctorInfo.length === 0) {
        isEducation = [];
    } else {
        isEducation = JSON.parse(doctorInfo?.education);
        isClinic = JSON.parse(doctorInfo?.clinic);
    }
    const [education, setEducation] = useState(isEducation);
    const [clinic, setClinic] = useState(isClinic);


    const handleEducation = (e, index) => {
        let eduData = [...education];
        eduData[index][e.target.name] = e.target.value;
        setEducation(eduData);
    }
    const addEducationFields = () => {
        let object = {
            degree: '',
            institude: '',
            passingYear: ''
        }
        setEducation([...education, object])
    }
    const removeEduFields = (index) => {
        let data = [...education];
        data.splice(index, 1)
        setEducation(data)
    }


    const handleClinic = (e, index) => {
        let clinicData = [...clinic];
        clinicData[index][e.target.name] = e.target.value;
        setClinic(clinicData);
    }
    const addClinicFields = () => {
        let object = {
            clinicName: '',
            clinicAddress: '',
        }
        setClinic([...clinic, object])
    }
    const removeClinicFields = (index) => {
        let data = [...clinic];
        data.splice(index, 1)
        setClinic(data)
    }


    const DoctorUpdate = e => {
        const newData = {
            ...data,
            education: JSON.stringify(education),
            clinic: JSON.stringify(clinic),
        }
        Axios.put(`http://localhost:5000/doctorUpdate/${id}`, newData)
            .then((res) => {
                if (res.status === 200) {
                    navigate('/Dashboard/doctorprofile')
                }
            });
        e.preventDefault();
    };


    return (
        <Box component="form" onSubmit={DoctorUpdate}>
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
                            defaultValue={doctorInfo.firstName}
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
                            defaultValue={doctorInfo.lastName}
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
                            defaultValue={doctorInfo.gender}
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
                            defaultValue={doctorInfo.blood}
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
                            defaultValue={doctorInfo.birth}
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
                            defaultValue={doctorInfo.phone}
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
                            defaultValue={doctorInfo.city}
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
                            defaultValue={doctorInfo.address}
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
                            name='specialist'
                            label='Specialist'
                            fullWidth
                            size="medium"
                            InputProps={{ style: { fontSize: 14 } }}
                            InputLabelProps={{ style: { fontSize: 14 } }}
                            focused
                            defaultValue={doctorInfo.specialist}
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    [e.target.name]: e.target.value,
                                })
                            }
                        ></TextFieldMake>
                    </Grid>

                    <Grid item xs={12} sm={12}>
                        <TextFieldMake
                            type='text'
                            name='biography'
                            label='Biography'
                            fullWidth
                            size="medium"
                            InputProps={{ style: { fontSize: 14 } }}
                            InputLabelProps={{ style: { fontSize: 14 } }}
                            focused
                            multiline
                            rows={5}
                            defaultValue={doctorInfo.biography}
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
            <FormLayout sx={{ mt: 5 }}>
                <Typography variant='h6' sx={{ color: '##272b41', fontSize: '14px', mb: 2 }}>Education Info</Typography>
                {
                    education?.map((edu, index) => {
                        return (
                            <Paper elevation={8} sx={{ p: 2, mb: 2 }}>
                                <Grid key={index} container spacing={2}>
                                    <Grid item xs={12} sm={4}>
                                        <TextFieldMake
                                            type='text'
                                            name='degree'
                                            label='Degree'
                                            fullWidth
                                            size='medium'
                                            focused
                                            InputProps={{ style: { fontSize: 14 } }}
                                            InputLabelProps={{ style: { fontSize: 14 } }}
                                            onChange={(e) => handleEducation(e, index)}
                                            defaultValue={edu.degree}
                                        ></TextFieldMake>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <TextFieldMake
                                            type='text'
                                            name='institude'
                                            label='Institude'
                                            fullWidth
                                            focused
                                            size='medium'
                                            InputProps={{ style: { fontSize: 14 } }}
                                            InputLabelProps={{ style: { fontSize: 14 } }}
                                            onChange={(e) => handleEducation(e, index)}
                                            defaultValue={edu.institude}
                                        ></TextFieldMake>
                                    </Grid>

                                    <Grid item xs={12} sm={4}>
                                        <Stack
                                            direction="row"
                                            alignItems="center"
                                            justifyContent="center"
                                            spacing={1}
                                        >
                                            <TextFieldMake
                                                type='text'
                                                name='passingYear'
                                                label='Passing Year'
                                                fullWidth
                                                size='medium'
                                                InputProps={{ style: { fontSize: 14 } }}
                                                InputLabelProps={{ style: { fontSize: 14 } }}
                                                onChange={(e) => handleEducation(e, index)}
                                                value={edu.passingYear}
                                            ></TextFieldMake>
                                            <CancelButton sx={{ mt: 2 }} onClick={() => removeEduFields(index)} size='small' startIcon={<CancelIcon fontSize='small' />}>
                                                Cancel
                                            </CancelButton>
                                        </Stack>
                                    </Grid>

                                </Grid>
                            </Paper>

                        )
                    })
                }
                <AddButton onClick={addEducationFields} size='small' startIcon={<AddIcon fontSize='small' />}>
                    Add More
                </AddButton>
            </FormLayout>
            <FormLayout sx={{ mt: 5 }}>
                <Typography variant='h6' sx={{ color: '##272b41', fontSize: '14px', mb: 2 }}>Clinic Info</Typography>
                {
                    clinic.map((cl, index) => {
                        return (
                            <Paper elevation={8} sx={{ p: 2, mb: 2 }}>
                                <Grid key={index} container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextFieldMake
                                            type='text'
                                            name='clinicName'
                                            label='Clinic Name'
                                            fullWidth
                                            focused
                                            size='medium'
                                            InputProps={{ style: { fontSize: 14 } }}
                                            InputLabelProps={{ style: { fontSize: 14 } }}
                                            onChange={(e) => handleClinic(e, index)}
                                            value={cl.clinicName}
                                        ></TextFieldMake>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Stack
                                            direction="row"
                                            alignItems="center"
                                            justifyContent="center"
                                            spacing={1}
                                        >
                                            <TextFieldMake
                                                type='text'
                                                name='clinicAddress'
                                                label='Clinic Address'
                                                fullWidth
                                                focused
                                                size='medium'
                                                InputProps={{ style: { fontSize: 14 } }}
                                                InputLabelProps={{ style: { fontSize: 14 } }}
                                                onChange={(e) => handleClinic(e, index)}
                                                value={cl.clinicAddress}
                                            ></TextFieldMake>
                                            <CancelButton sx={{ mt: 2 }} onClick={() => removeClinicFields(index)} size='small' startIcon={<CancelIcon fontSize='small' />}>
                                                Cancel
                                            </CancelButton>
                                        </Stack>
                                    </Grid>

                                </Grid>
                            </Paper>

                        )
                    })
                }
                <AddButton onClick={addClinicFields} size='small' startIcon={<AddIcon fontSize='small' />}>
                    Add More
                </AddButton>
            </FormLayout>

            <Button variant="contained" size='medium' color="info" sx={{ mt: 3 }} type="submit">Update</Button>
        </Box>
    );
};

export default DoctorUpdateForm;