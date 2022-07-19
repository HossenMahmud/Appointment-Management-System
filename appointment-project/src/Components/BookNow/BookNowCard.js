import { Grid } from '@mui/material';
import React from 'react';
import BookNowCardItem from './BookNowCardItem';
const BookNowCard = ({ schedules }) => {
    return (
        <Grid container spacing={2}>
            {
                schedules?.map(schedule => <BookNowCardItem key={schedule.id} schedule={schedule}>
                </BookNowCardItem>)
            }
        </Grid>
    );
};

export default BookNowCard;