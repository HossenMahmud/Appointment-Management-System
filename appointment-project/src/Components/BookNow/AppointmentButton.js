import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Grid } from '@mui/material';
import { TextFieldMake } from '../../styles/MetarialStyles';
import useAuth from '../../Hooks/useAuth';
import styled from '@emotion/styled';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router-dom';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {
        xs: '300px',
        sm: '400px',
    },
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
};

const AppointmentBtn = styled(Button)(({ theme }) => ({
    margin: '10px 0',
    backgroundColor: "blue",
    borderColor: 'blue',
    textTransform: 'capitalize',
    color: '#fff',
    padding: '5px 8px',
    marginRight: '5px',
    '&:hover': {
        backgroundColor: '#20C0F3',
        borderColor: '#20C0F3',
        boxShadow: 'none',
        color: '#fff',
    }
}));
const DesableBtn = styled(Button)(({ theme }) => ({
    margin: '10px 0',
    backgroundColor: "#757575",
    borderColor: '#757575',
    textTransform: 'capitalize',
    color: '#fff',
    padding: '5px 8px',
    marginRight: '5px',
    '&:hover': {
        backgroundColor: 'green',
        borderColor: 'green',
        boxShadow: 'none',
        color: '#fff',
    }
}));

const AppointmentButton = ({ doctor, day, hospitalName, startTime, endTime, location, MonthName, year, dayName, dayNumber, patient, slot }) => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const [data, setData] = useState([]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const d = new Date();
    let todayDateNumber = d.getDate();


    const handleSubmit = e => {
        e.preventDefault();
        if (patient !== undefined) {
            const newData = {
                ...data,
                doctorId: doctor?.id,
                doctorName: `${doctor?.firstName} ${doctor?.lastName}`,
                doctorImg: doctor?.image,
                specialist: doctor?.specialist,
                patientId: user?.id,
                hospitalName: hospitalName,
                location: location,
                startTime: startTime,
                endTime: endTime,
                apptDate: `${day} ${MonthName} ${year}`,
                bookingDate: ` ${dayNumber} ${MonthName} ${year}`,
                status: 'pendding'
            }
            axios.post("https://doctor-appointment-server.rpi.gov.bd/appointment", newData).then((res) => {
                if (res.status === 200) {
                    setOpen(false);
                    Swal.fire({
                        icon: 'success',
                        title: 'Ok',
                        text: 'SuccessFully Schedule Added',
                        timer: 1500,
                        showCancelButton: false,
                        showConfirmButton: false,
                    })
                    navigate('/Dashboard')
                }
            })
        } else {
            setOpen(false);
            Swal.fire({
                icon: 'error',
                title: 'Profile SetuP Firstly',
                text: 'Plaese Set Your Profile all info fristly, Then you Apply',
                timer: 3500,
                showCancelButton: false,
                showConfirmButton: false,
            })
            navigate('/Dashboard/patientprofile')

        }
    };

    return (
        <div>
            {
                (todayDateNumber <= day) && <AppointmentBtn onClick={handleOpen} color='info'> {day} {MonthName} {year}</AppointmentBtn>
            }
            {
                (todayDateNumber > day) && <Tooltip title="Appointment Time Out" arrow>
                    <DesableBtn>{day} {MonthName} {year}</DesableBtn>
                </Tooltip>
            }

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={{ textAlign: 'center', py: 1, backgroundColor: 'blue', borderRadius: '5px' }}>
                        <Typography variant="body1" sx={{ color: '#f0f0f0', fontWeight: 'bold' }}>Doctor Appointment Schedule</Typography>
                        <Typography id="modal-modal-title" variant="body1" sx={{ color: '#f0f0f0', fontWeight: 'bold' }}>
                            [{day} {MonthName} {year} --- {dayName}]
                        </Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center', py: 1, mt: 1, backgroundColor: '#e6708c', borderRadius: '5px' }}>
                        <Typography sx={{ color: '#fff', fontWeight: 'bold' }}>Available Slot: {slot}</Typography>
                    </Box>

                    <Box id="modal-modal-description" sx={{ mt: 2 }}>
                        <Grid container spacing={2} component='form' onSubmit={handleSubmit}>
                            <Grid item xs={12}>
                                <TextFieldMake
                                    type='text'
                                    name='patientName'
                                    label='Full Name'
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

                            <Grid item xs={12}>
                                <TextFieldMake
                                    type='text'
                                    name='patientAge'
                                    label='Age'
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
                            <Grid item xs={12}>
                                <TextFieldMake
                                    type='number'
                                    name='patientPhone'
                                    label='Phone Number'
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
                            <Grid item xs={12}>
                                <TextFieldMake
                                    type='email'
                                    name='patientEmail'
                                    label='Email'
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

                            <Grid item xs={12} sx={{ textAlign: 'center' }}>
                                <Button variant="contained" size='medium' color="info" sx={{ mt: 3 }} type="submit">Book Now</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Modal>
        </div >
    );
};

export default AppointmentButton;