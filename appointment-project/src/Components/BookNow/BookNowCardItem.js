import { Box, Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Appointment from './Appointment';

const ScheduleBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    aliginItems: 'center',
    padding: '10px 0px',
    borderBottom: '1px solid #f1f1f1',
    color: '#757575'
}));

const BookNowCardItem = ({ schedule }) => {
    let dateTime = [];
    if (schedule == null) {
        dateTime = [];
    } else {
        dateTime = JSON.parse(schedule?.dateTime);
    }


    return (
        <Grid item xs={12}>
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
                            <Box key={index}>
                                <ScheduleBox sx={{ flexDirection: { xs: 'column', sm: 'row' }, textAlign: { xs: 'center', sm: 'start' } }}>
                                    <Box>
                                        <Typography>Chember Date</Typography>
                                        <Typography variant='body' sx={{ color: '#14287E', fontWeight: 'bold' }}>{time.dayName}  ({time.startTime} - {time.endTime})</Typography>
                                    </Box>
                                    <Box>
                                        <Appointment doctorId={schedule.doctorId} dayName={time?.dayName} hospitalName={schedule.hospitalName} startTime={time.startTime} endTime={time.endTime} location={schedule.location} slot={time.slot}></Appointment>
                                    </Box>

                                </ScheduleBox>
                            </Box>
                        ))
                    }

                </Box>
            </Paper>
        </Grid>
    );
};

export default BookNowCardItem;