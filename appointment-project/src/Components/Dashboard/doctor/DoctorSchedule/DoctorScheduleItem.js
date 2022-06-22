import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import { Button, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
const ScheduleBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    aliginItems: 'center',
    padding: '10px 0px',
    borderBottom: '1px solid #f1f1f1',
    color: '#757575'
}));
const UpdateButton = styled(Button)(({ theme }) => ({
    margin: '10px 0',
    backgroundColor: "#20C0F3",
    borderColor: '#20C0F3',
    textTransform: 'capitalize',
    color: '#fff',
    padding: '5px 8px',
    '&:hover': {
        backgroundColor: 'blue',
        borderColor: 'blue',
        boxShadow: 'none',
        color: '#fff',
    }
}));
const DeleteButton = styled(Button)(({ theme }) => ({
    margin: '10px 0',
    backgroundColor: "red",
    borderColor: 'red',
    textTransform: 'capitalize',
    color: '#fff',
    padding: '5px 8px',
    '&:hover': {
        backgroundColor: 'blue',
        borderColor: 'blue',
        boxShadow: 'none',
        color: '#fff',
    }
}));

const DoctorScheduleItem = ({ schedule, handleDelete }) => {

    let dateTime = [];
    if (schedule == null) {
        dateTime = [];
    } else {
        dateTime = JSON.parse(schedule?.dateTime);
    }
    return (
        <Grid item xs={12} sm={6}>
            <Paper elevation={16} sx={{ p: 2, border: '5px solid #ADE7F7' }}>
                <Box sx={{ border: '1px solid #f0f0f0', p: 1 }}>
                    <ScheduleBox>
                        <Typography>Hospital Name</Typography>
                        <Typography>{schedule.hospitalName}</Typography>
                    </ScheduleBox>
                    <ScheduleBox>
                        <Typography>Location</Typography>
                        <Typography>{schedule.location}</Typography>
                    </ScheduleBox>
                    {
                        dateTime?.map((time, index) => (
                            <ScheduleBox key={index}>
                                <Typography>Chember Date</Typography>
                                <Typography>{time.dayName} ({time.startTime} - {time.endTime})</Typography>
                            </ScheduleBox>
                        ))
                    }
                    <Box sx={{ textAlign: 'right' }}>
                        <DeleteButton sx={{ mr: 2 }} onClick={() => handleDelete(schedule.id)}> <DeleteIcon sx={{ fontSize: '16px' }} /> Delete</DeleteButton>
                        <Link to={`updateSchedule/${schedule.id}`} style={{ textDecoration: 'none' }}>
                            <UpdateButton> <EditIcon sx={{ fontSize: '16px' }} /> Update</UpdateButton>
                        </Link>
                    </Box>
                </Box>
            </Paper>
        </Grid>
    )
};

export default DoctorScheduleItem;