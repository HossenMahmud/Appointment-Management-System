import { Button, Grid, Paper, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { AddButton, CancelButton, FormLayout, LayoutContiner, TextFieldMake } from '../../../../styles/MetarialStyles';
import CancelIcon from '@mui/icons-material/Cancel';
import AddIcon from '@mui/icons-material/Add';
import useAuth from '../../../../Hooks/useAuth';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';
import Swal from 'sweetalert2';

const week = [
    {
        value: "Saturday",
        label: "Saturday",
    },
    {
        value: "Sunday",
        label: "Sunday",
    },
    {
        value: "Monday",
        label: "Monday",
    },
    {
        value: "Tuesday",
        label: "Tuesday",
    },
    {
        value: "Wednesday",
        label: "Wednesday",
    },
    {
        value: "Thursday",
        label: "Thursday",
    },
    {
        value: "Friday",
        label: "Friday",
    },
];
const AddSchedule = () => {
    const { user } = useAuth()
    const userId = user?.id;
    const navigate = useNavigate();

    const [doctor, setDoctor] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:5000/doctor/${userId}`)
            .then(res => res.json())
            .then(data => setDoctor(data[0]));
    }, [userId]);

    const [data, setData] = useState(null);
    const [date, setDate] = useState([
        { dayName: '', startTime: '', endTime: '' }
    ]);
    const handleDate = (e, index) => {
        let dateData = [...date];
        dateData[index][e.target.name] = e.target.value;
        setDate(dateData);
    }
    const addDateFields = () => {
        let object = {
            dayName: '',
            startTime: '',
            endTime: '',
        }
        setDate([...date, object])
    }
    const removeDateFields = (index) => {
        let data = [...date];
        data.splice(index, 1)
        setDate(data)
    }

    const handleSubmit = e => {
        const newData = {
            ...data,
            doctorId: doctor?.id,
            dateTime: JSON.stringify(date),
        };

        Axios.post("http://localhost:5000/addSchedule", newData).then((res) => {
            if (res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Ok',
                    text: 'SuccessFully Schedule Added',
                    timer: 1500,
                    showCancelButton: false,
                    showConfirmButton: false,
                })
                navigate('/Dashboard/scheduleTime');
            }
        });
        e.preventDefault();
    };


    return (
        <LayoutContiner>
            <Paper elevation={16} sx={{ p: 2 }} >
                <Box component="form" onSubmit={handleSubmit}>
                    <FormLayout>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextFieldMake
                                    type='text'
                                    name='hospitalName'
                                    label='Hospital Name'
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
                                    name='location'
                                    label='Location'
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
                    <FormLayout sx={{ mt: 5 }}>
                        {
                            date.map((form, index) => {
                                return (
                                    <Paper elevation={8} sx={{ p: 2, mb: 2 }}>
                                        <Grid key={index} container spacing={2}>
                                            <Grid item xs={12} sm={4}>
                                                <TextFieldMake
                                                    fullWidth
                                                    label="Slect Day"
                                                    variant="outlined"
                                                    name="dayName"
                                                    focused
                                                    size="medium"
                                                    InputProps={{ style: { fontSize: 14 } }}
                                                    InputLabelProps={{ style: { fontSize: 14 } }}
                                                    onChange={(e) => handleDate(e, index)}
                                                    required
                                                    select
                                                    SelectProps={{ native: true }}
                                                >
                                                    {week.map((option) => (
                                                        <option key={option.value} value={option.value}>
                                                            {option.label}
                                                        </option>
                                                    ))}
                                                </TextFieldMake>
                                            </Grid>

                                            <Grid item xs={12} sm={4}>
                                                <TextFieldMake
                                                    type='text'
                                                    name='startTime'
                                                    label='Start Time'
                                                    fullWidth
                                                    size='medium'
                                                    InputProps={{ style: { fontSize: 14 } }}
                                                    InputLabelProps={{ style: { fontSize: 14 } }}
                                                    onChange={(e) => handleDate(e, index)}
                                                    value={form.startTime}
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
                                                        name='endTime'
                                                        label='End Time'
                                                        fullWidth
                                                        size='medium'
                                                        InputProps={{ style: { fontSize: 14 } }}
                                                        InputLabelProps={{ style: { fontSize: 14 } }}
                                                        onChange={(e) => handleDate(e, index)}
                                                        value={form.endTime}
                                                    ></TextFieldMake>
                                                    <CancelButton sx={{ mt: 2 }} onClick={() => removeDateFields(index)} size='small' startIcon={<CancelIcon fontSize='small' />}>
                                                        Cancel
                                                    </CancelButton>
                                                </Stack>
                                            </Grid>

                                        </Grid>
                                    </Paper>
                                )
                            })
                        }
                        <AddButton onClick={addDateFields} size='small' startIcon={<AddIcon fontSize='small' />}>
                            Add More
                        </AddButton>
                    </FormLayout>
                    <Button variant="contained" size='medium' color="info" sx={{ mt: 3 }} type="submit">Save</Button>
                </Box>
            </Paper>
        </LayoutContiner>
    );
};

export default AddSchedule;