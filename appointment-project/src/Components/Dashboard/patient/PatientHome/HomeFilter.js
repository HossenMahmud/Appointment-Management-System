import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import { FillterBox } from '../../../../styles/MetarialStyles';
import MyAppointment from './MyAppointment';
import MyPrescription from './MyPrescription';


const HomeFilter = () => {
    const [appoint, setAppoint] = useState('true');
    const { user } = useAuth();
    const [apptData, setApptData] = useState(null)
    useEffect(() => {
        axios.get(`http://localhost:5000/patientAppointment/${user?.id}`).then((res) => {
            setApptData(res.data);
        });
    }, [user?.id]);

    return (
        <Box sx={{ mt: 5 }}>
            <Grid container sx={{ mb: 3, borderBottom: '1px solid #6666', textAlign: 'center' }}>
                <Grid item xs={6}>
                    <FillterBox onClick={(e) => setAppoint(true)}>
                        Appointments
                    </FillterBox>
                </Grid>
                <Grid item xs={6}>
                    <FillterBox onClick={(e) => setAppoint(false)}>
                        Prescription
                    </FillterBox>
                </Grid>
            </Grid>

            {
                appoint ? (apptData !== null) && < MyAppointment apptData={apptData} /> : <MyPrescription />
            }

        </Box >
    );
};

export default HomeFilter;