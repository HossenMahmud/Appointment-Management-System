import { Grid } from '@mui/material';
import DoctorCardItem from './DoctorCardItem';

const AllDoctorsCard = ({ doctors }) => {

    return (
        <Grid container spacing={2}>
            {
                doctors.map((doctor) => <DoctorCardItem key={doctor.id} doctor={doctor}></DoctorCardItem>)
            }
        </Grid>
    );
};

export default AllDoctorsCard;