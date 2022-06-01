import styled from '@emotion/styled';
import { Button, Grid, Paper, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { CancelButton, FormLayout, TextFieldMake, AddButton } from '../../../styles/MetarialStyles';
import doctorPhoto from '../../../assets/images/DoctorImg.jpg';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CancelIcon from '@mui/icons-material/Cancel';
import AddIcon from '@mui/icons-material/Add';

const DoctorProfileForm = ({ data, setData, handleImageSet, preview, educationFeilds, handleEducation, addFields, removeFields, handleSubmit }) => {
    const gender = [
        {
            value: "Male",
            label: "Male",
        },
        {
            value: "Female",
            label: "Female",
        },
        {
            value: "Other",
            label: "Other",
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
                                        multiple type="file"
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
                            name='userName'
                            label='UserName'
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
                            type='email'
                            name='email'
                            label='Email'
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
                            type='number'
                            name='phone'
                            label='Phone Number'
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
                            label='Date Of Birth'
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
                </Grid>
            </FormLayout>
            <FormLayout sx={{ mt: 5 }}>
                <Typography variant='h6' sx={{ color: '##272b41', fontSize: '14px' }}>About Me</Typography>
                <Grid container>
                    <Grid item xs={12} sm={12}>
                        <TextFieldMake
                            type='text'
                            name='biography'
                            label='Biography'
                            fullWidth
                            multiline
                            rows={3}
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
            <FormLayout sx={{ mt: 5 }}>
                <Typography variant='h6' sx={{ color: '##272b41', fontSize: '14px' }}>Clinic Info</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextFieldMake
                            type='text'
                            name='clinicName'
                            label='Clinic Name'
                            fullWidth
                            size='medium'
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
                            name='clinicAddress'
                            label='Clinic Address'
                            fullWidth
                            size='medium'
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
            <FormLayout sx={{ mt: 5 }}>
                <Typography variant='h6' sx={{ color: '##272b41', fontSize: '14px' }}>Service</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                        <TextFieldMake
                            type='text'
                            name='specialization'
                            label='Specialization'
                            fullWidth
                            size='medium'
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
            <FormLayout sx={{ mt: 5 }}>
                <Typography variant='h6' sx={{ color: '##272b41', fontSize: '14px', mb: 2 }}>Education</Typography>
                {
                    educationFeilds.map((form, index) => {
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
                                            InputProps={{ style: { fontSize: 14 } }}
                                            InputLabelProps={{ style: { fontSize: 14 } }}
                                            onChange={(e) => handleEducation(e, index)}
                                            value={form.degree}
                                        ></TextFieldMake>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <TextFieldMake
                                            type='text'
                                            name='institude'
                                            label='Institude'
                                            fullWidth
                                            size='medium'
                                            InputProps={{ style: { fontSize: 14 } }}
                                            InputLabelProps={{ style: { fontSize: 14 } }}
                                            onChange={(e) => handleEducation(e, index)}
                                            value={form.institude}
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
                                                value={form.passingYear}
                                            ></TextFieldMake>
                                            <CancelButton sx={{ mt: 2 }} onClick={() => removeFields(index)} size='small' startIcon={<CancelIcon fontSize='small' />}>
                                                Cancel
                                            </CancelButton>
                                        </Stack>
                                    </Grid>

                                </Grid>
                            </Paper>

                        )
                    })
                }
                <AddButton onClick={addFields} size='small' startIcon={<AddIcon fontSize='small' />}>
                    Add More
                </AddButton>
            </FormLayout>

            <Button variant="contained" size='medium' color="info" sx={{ mt: 3 }} type="submit">Save</Button>
        </Box >
    );
};

export default DoctorProfileForm;