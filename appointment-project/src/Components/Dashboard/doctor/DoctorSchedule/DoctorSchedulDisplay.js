import { Grid } from '@mui/material';
import React from 'react';
import DoctorScheduleItem from './DoctorScheduleItem';

const DoctorSchedulDisplay = ({ schedules, handleDelete }) => {
    return (
        <Grid container spacing={2}>
            {
                schedules?.map(schedule => <DoctorScheduleItem
                    key={schedule.id}
                    schedule={schedule}
                    handleDelete={handleDelete}
                ></DoctorScheduleItem>)
            }
        </Grid>
    );
};

export default DoctorSchedulDisplay;