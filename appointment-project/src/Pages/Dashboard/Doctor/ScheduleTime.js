import styled from '@emotion/styled';
import { Button } from '@mui/material';
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

const ScheduleTime = () => {
    const { user } = useAuth()
    const userId = user?.id;

    const [doctor, setDoctor] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:5000/doctor/${userId}`)
            .then(res => res.json())
            .then(data => setDoctor(data[0]));
    }, [userId]);

    const [schedules, setSchedules] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:5000/schedule/${doctor?.id}`)
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
                Axios.delete(`http://localhost:5000/deleteSchedule/${id}`).then((response) => {
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
                    (schedules !== null) && <DoctorSchedulDisplay schedules={schedules} handleDelete={handleDelete}></DoctorSchedulDisplay>
                }
            </Box>
        </LayoutContiner>
    );
};

export default ScheduleTime;