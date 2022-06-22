import React, { useState } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import AddIcon from '@mui/icons-material/Add';
import { AddButton, CancelButton, FormLayout, LayoutContiner, TextFieldMake } from '../../../../styles/MetarialStyles';
import { Button, Grid, Paper, Stack } from '@mui/material';
import { Box } from '@mui/system';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';


const UpdateScheduleForm = ({ schedule }) => {
    const navigate = useNavigate();
    const [data, setData] = useState(null);
    let isDateTime = [];
    if (schedule === null) {
        isDateTime = [];
    } else {
        isDateTime = JSON.parse(schedule?.dateTime);
    }
    const [dateTime, setDateTime] = useState(isDateTime);

    const handleDateTime = (e, index) => {
        let dateData = [...dateTime];
        dateData[index][e.target.name] = e.target.value;
        setDateTime(dateData);
    }
    const addDateTimeFields = () => {
        let object = {
            dayName: '',
            startTime: '',
            endTime: ''
        }
        setDateTime([...dateTime, object])
    }
    const removeDateTimeFields = (index) => {
        let data = [...dateTime];
        data.splice(index, 1)
        setDateTime(data)
    }

    const SchedulUpdate = e => {
        const newData = {
            ...data,
            dateTime: JSON.stringify(dateTime),
        }
        Axios.put(`http://localhost:5000/updateSchedule/${schedule?.id}`, newData)
            .then((res) => {
                if (res.status === 200) {
                    navigate('/Dashboard/scheduleTime')
                }
            });
        e.preventDefault();
    };




    return (
        <div>
            <LayoutContiner>
                <Paper elevation={16} sx={{ p: 2 }} >
                    <Box component="form" onSubmit={SchedulUpdate}>
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
                                        focused
                                        defaultValue={schedule.hospitalName}
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
                                        name='location'
                                        label='Location'
                                        fullWidth
                                        size="medium"
                                        focused
                                        defaultValue={schedule.location}
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
                                dateTime.map((form, index) => {
                                    return (
                                        <Paper elevation={8} sx={{ p: 2, mb: 2 }}>
                                            <Grid key={index} container spacing={2}>
                                                <Grid item xs={12} sm={4}>
                                                    <TextFieldMake
                                                        type='text'
                                                        name='dayName'
                                                        label='Day Name'
                                                        fullWidth
                                                        size='medium'
                                                        InputProps={{ style: { fontSize: 14 } }}
                                                        InputLabelProps={{ style: { fontSize: 14 } }}
                                                        onChange={(e) => handleDateTime(e, index)}
                                                        value={form.dayName}
                                                    ></TextFieldMake>
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
                                                        onChange={(e) => handleDateTime(e, index)}
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
                                                            onChange={(e) => handleDateTime(e, index)}
                                                            value={form.endTime}
                                                        ></TextFieldMake>
                                                        <CancelButton sx={{ mt: 2 }} onClick={() => removeDateTimeFields(index)} size='small' startIcon={<CancelIcon fontSize='small' />}>
                                                            Cancel
                                                        </CancelButton>
                                                    </Stack>
                                                </Grid>

                                            </Grid>
                                        </Paper>
                                    )
                                })
                            }
                            <AddButton onClick={addDateTimeFields} size='small' startIcon={<AddIcon fontSize='small' />}>
                                Add More
                            </AddButton>
                        </FormLayout>
                        <Button variant="contained" size='medium' color="info" sx={{ mt: 3 }} type="submit">Save</Button>
                    </Box>
                </Paper>
            </LayoutContiner>
        </div>
    );
};

export default UpdateScheduleForm;