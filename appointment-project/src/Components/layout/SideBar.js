import { Box, Button, Drawer, Typography, useMediaQuery } from '@mui/material';
import { useStyle } from '../../styles/MetarialStyles';
import { Link } from "react-router-dom";
import useAuth from '../../Hooks/useAuth'
import { useEffect, useState } from 'react';

export default function SideBar({ open, onClose }) {
    const [doctor, setDoctor] = useState(null);
    const { user } = useAuth();
    const style = useStyle();
    const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
        defaultMatches: true,
        noSsr: false
    });

    const MyStyle = {
        textDecoration: 'none',
        color: "#f1f1f1",
        fontSize: '16px',
        fontWeight: 'bold',
    }

    const doctorId = user?.id;
    useEffect(() => {
        fetch(`http://localhost:5000/doctor/${doctorId}`)
            .then(res => res.json())
            .then(data => setDoctor(data[0]))
    }, [doctorId]);







    const content = (
        <>
            <Box
                className={style.sidebar}
            >
                <Box sx={{ width: '100%', textAlign: "center", py: 2.2 }}>
                    <Link to='/' style={MyStyle}>
                        <Typography variant='h5' sx={{ color: "#f1f1f1", fontweight: 'bold', letterSpacing: "4px" }}>Appointment</Typography>
                    </Link>
                </Box>

                <Box sx={{
                    flexGrow: 1,
                    mt: 2,
                }}>
                    <Link to='/Dashboard' style={MyStyle}>
                        <Button sx={{ ml: 1, color: '#fff', display: 'block', textTransform: 'capitalize' }} >
                            Dashboard
                        </Button>
                    </Link>
                    {
                        user.role === 'admin' && <>
                            <Link to='admin/allappointments' style={MyStyle}>
                                <Button sx={{ ml: 1, color: '#fff', display: 'block', textTransform: 'capitalize' }} >
                                    All Appointments
                                </Button>
                            </Link>
                            <Link to='admin/doctors' style={MyStyle}>
                                <Button sx={{ ml: 1, color: '#fff', display: 'block', textTransform: 'capitalize' }} >
                                    Doctors
                                </Button>
                            </Link>
                            <Link to='admin/patients' style={MyStyle}>
                                <Button sx={{ ml: 1, color: '#fff', display: 'block', textTransform: 'capitalize' }} >
                                    Patients
                                </Button>
                            </Link>
                            <Link to='makeAdmin' style={MyStyle}>
                                <Button sx={{ ml: 1, color: '#fff', display: 'block', textTransform: 'capitalize' }} >
                                    Make Admin
                                </Button>
                            </Link>
                        </>
                    }
                    {
                        user.role === 'doctor' && <>
                            <Link to='doctorprofile' style={MyStyle}>
                                <Button sx={{ ml: 1, color: '#fff', display: 'block', textTransform: 'capitalize' }} >
                                    Profile Settings
                                </Button>
                            </Link>
                            {
                                (doctor !== undefined) && <>
                                    <Link to='mypatients' style={MyStyle}>
                                        <Button sx={{ ml: 1, color: '#fff', display: 'block', textTransform: 'capitalize' }} >
                                            My patients
                                        </Button>
                                    </Link>
                                    <Link to='appointments' style={MyStyle}>
                                        <Button sx={{ ml: 1, color: '#fff', display: 'block', textTransform: 'capitalize' }} >
                                            Appointments
                                        </Button>
                                    </Link>
                                    <Link to='scheduleTime' style={MyStyle}>
                                        <Button sx={{ ml: 1, color: '#fff', display: 'block', textTransform: 'capitalize' }} >
                                            Schedule Time
                                        </Button>
                                    </Link>
                                </>
                            }


                        </>
                    }
                    {
                        user.role === 'patient' && <>
                            <Link to='patientprofile' style={MyStyle}>
                                <Button sx={{ ml: 1, color: '#fff', display: 'block', textTransform: 'capitalize' }} >
                                    Profile Settings
                                </Button>
                            </Link>
                        </>
                    }

                </Box>
            </Box>
        </>
    );

    if (lgUp) {
        return (
            <Drawer
                variant="permanent"
                anchor="left"
                open
                PaperProps={{
                    sx: {
                        width: 250,
                        border: 'none',
                    }
                }}
            >
                {content}
            </Drawer>

        );
    }

    return (
        <Drawer
            variant="temporary"
            anchor="left"
            onClose={onClose}
            open={open}
            PaperProps={{
                sx: {
                    width: 250,
                    border: 'none',
                }
            }}
        >
            {content}
        </Drawer>

    );
};