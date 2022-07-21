import { Box } from '@mui/system';
import React from 'react';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Grid, Stack, Typography } from '@mui/material';

const HeadingCard = ({ doctors, patients, allAppointment }) => {
    return (
        <Grid container spacing={2}>
            {/* Cart Item */}
            <Grid item xs={12} sm={4} md={3}>
                <Box
                    sx={{
                        border: "1px solid #f0f0f0",
                        borderRadius: "5px",
                        p: 3,
                        backgroundColor: "#ade7f7"
                    }}
                >
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{ mb: 1 }}
                    >
                        <Box sx={{ width: 60, height: 60, border: "3px solid #00D0F1", borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <GroupAddIcon sx={{ color: "#00D0F1", fontSize: '20px' }} />
                        </Box>
                        <Typography variant='h5'>{doctors.length}</Typography>
                    </Stack>
                    <Typography sx={{ mb: 1, color: "#757575" }}>Doctors</Typography>
                    <Box sx={{ width: '100%', height: "7px", backgroundColor: "#e9ecef", borderRadius: "5px" }}>
                        <Box sx={{ width: '50%', height: "7px", backgroundColor: "#00D0F1", borderRadius: "5px" }}></Box>
                    </Box>
                </Box >
            </Grid>

            {/* Cart Item */}
            <Grid item xs={12} sm={4} md={3}>
                <Box
                    sx={{
                        border: "1px solid #f0f0f0",
                        borderRadius: "5px",
                        p: 3,
                        backgroundColor: "#d4facd"
                    }}
                >
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{ mb: 1 }}
                    >
                        <Box sx={{ width: 60, height: 60, border: "3px solid #7bb13c", borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <PeopleAltIcon sx={{ color: "#7bb13c", fontSize: '20px' }} />
                        </Box>
                        <Typography variant='h5'>{patients.length}</Typography>
                    </Stack>
                    <Typography sx={{ mb: 1, color: "#757575" }}>Patient</Typography>
                    <Box sx={{ width: '100%', height: "7px", backgroundColor: "#e9ecef", borderRadius: "5px" }}>
                        <Box sx={{ width: '50%', height: "7px", backgroundColor: "#7bb13c", borderRadius: "5px" }}></Box>
                    </Box>
                </Box >
            </Grid>


            {/* Cart Item */}
            <Grid item xs={12} sm={4} md={3}>
                <Box
                    sx={{
                        border: "1px solid #f0f0f0",
                        borderRadius: "5px",
                        p: 3,
                        backgroundColor: "#fad4d4"
                    }}
                >
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{ mb: 1 }}
                    >
                        <Box sx={{ width: 60, height: 60, border: "3px solid #e84646", borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <PeopleAltIcon sx={{ color: "#e84646", fontSize: '20px' }} />
                        </Box>
                        <Typography variant='h5'>{allAppointment?.length}</Typography>
                    </Stack>
                    <Typography sx={{ mb: 1, color: "#757575" }}>Appointment</Typography>
                    <Box sx={{ width: '100%', height: "7px", backgroundColor: "#e9ecef", borderRadius: "5px" }}>
                        <Box sx={{ width: '50%', height: "7px", backgroundColor: "#e84646", borderRadius: "5px" }}></Box>
                    </Box>
                </Box >
            </Grid>

            {/* Cart Item */}
            <Grid item xs={12} sm={4} md={3}>
                <Box
                    sx={{
                        border: "1px solid #f0f0f0",
                        borderRadius: "5px",
                        p: 3,
                        backgroundColor: "#f5e8ae"
                    }}
                >
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{ mb: 1 }}
                    >
                        <Box sx={{ width: 60, height: 60, border: "3px solid #ffbc34", borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <AttachMoneyIcon sx={{ color: "#ffbc34", fontSize: '20px' }} />
                        </Box>
                        <Typography variant='h5'>$7568</Typography>
                    </Stack>
                    <Typography sx={{ mb: 1, color: "#757575" }}>Revenue</Typography>
                    <Box sx={{ width: '100%', height: "7px", backgroundColor: "#e9ecef", borderRadius: "5px" }}>
                        <Box sx={{ width: '50%', height: "7px", backgroundColor: "#ffbc34", borderRadius: "5px" }}></Box>
                    </Box>
                </Box >
            </Grid>

        </Grid>
    );
};

export default HeadingCard;