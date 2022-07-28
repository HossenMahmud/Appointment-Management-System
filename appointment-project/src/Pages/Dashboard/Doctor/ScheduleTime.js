import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import DoctorSchedulDisplay from '../../../Components/Dashboard/doctor/DoctorSchedule/DoctorSchedulDisplay';
import useAuth from '../../../Hooks/useAuth';
import { LayoutContiner } from '../../../styles/MetarialStyles';
import { Link } from "react-router-dom";
import Axios from 'axios';
import swal from 'sweetalert2';



const ScheduleButton = styled(Button)(({ theme }) => ({
    margin: '10px 0',
    backgroundColor: "blue",
    borderColor: 'blue',
    textTransform: 'capitalize',
    color: '#fff',
    padding: '5px 8px',
    '&:hover': {
        backgroundColor: '20C0F3',
        borderColor: '20C0F3',
        boxShadow: 'none',
        color: '#fff',
    }
}));

const ScheduleTime = () => {
    const { user } = useAuth()
    const userId = user?.id;

    const [doctor, setDoctor] = useState(null);
    useEffect(() => {
        fetch(`https://doctor-appointment-server.rpi.gov.bd/doctor/${userId}`)
            .then(res => res.json())
            .then(data => setDoctor(data[0]));
    }, [userId]);

    const [schedules, setSchedules] = useState([]);
    useEffect(() => {
        fetch(`https://doctor-appointment-server.rpi.gov.bd/schedule/${doctor?.id}`)
            .then(res => res.json())
            .then(data => setSchedules(data))
    }, [doctor?.id]);



    const handleDelete = (id) => {
        swal.fire({
            icon: 'error',
            title: 'Are You Sure?',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            confirmButtonColor: 'Crimson',
            cancelButtonColor: 'LightSeaGreen'
        }).then((result) => {
            if (result.value) {
                Axios.delete(`https://doctor-appointment-server.rpi.gov.bd/deleteSchedule/${id}`).then((response) => {
                    setSchedules(
                        schedules.filter((val) => {
                            return val.id !== id;
                        })
                    );
                });
            }
        })
    };

    return (
        <LayoutContiner>
            <Box sx={{ mb: 2 }}>
                <Link to='addSchedule' style={{ textDecoration: 'none' }}>
                    <ScheduleButton variant="contained" color="success">
                        Add Schedule
                    </ScheduleButton>
                </Link>
            </Box>
            <Box>
                {
                    (schedules.length !== 0) ? <DoctorSchedulDisplay schedules={schedules} handleDelete={handleDelete}></DoctorSchedulDisplay> :
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant='h5' sx={{ color: 'red' }}>Schedule Time Not Available !!!!</Typography>
                            <Typography variant='h5' sx={{ color: 'green' }}>Please Add Schedule</Typography>
                        </Box>
                }

            </Box>
        </LayoutContiner>
    );
};

export default ScheduleTime;