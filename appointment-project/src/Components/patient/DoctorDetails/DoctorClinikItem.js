import { Grid, Paper, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import clImg1 from '../../../assets/images/clinik1.jpg'
import clImg2 from '../../../assets/images/clinik2.jpg'
import clImg3 from '../../../assets/images/clinik3.jpg'
import LocationOnIcon from '@mui/icons-material/LocationOn';

const DoctorClinikItem = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Paper elevation={3} sx={{ p: 2, backgroundColor: '#f1f1f1', mb: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Box>
                                <Typography variant='h6'>Smile Cute Dental Care Center</Typography>
                                <Stack
                                    direction="row"
                                    justifyContent="start"
                                    alignItems="center"
                                    spacing={1}
                                    sx={{ mb: 2 }}
                                >
                                    <LocationOnIcon />
                                    <Typography variant='body' sx={{ color: '#757575', fontSize: '14px' }}> 2286 Sundown Lane, Austin, Texas 78749, USA</Typography>
                                </Stack>

                                <Stack
                                    direction="row"
                                    spacing={1}>
                                    <img src={clImg1} alt="" width="60" style={{ borderRadius: '5px' }} />
                                    <img src={clImg2} alt="" width="60" style={{ borderRadius: '5px' }} />
                                    <img src={clImg3} alt="" width="60" style={{ borderRadius: '5px' }} />
                                </Stack>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Box>
                                    <Box>
                                        <Typography sx={{ color: '#5c10e3' }}>Sat - Mon</Typography>
                                        <Typography variant='body' sx={{ fontSize: '14px' }}>10.00 AM - 2:00PM</Typography>
                                        <Typography variant='body' sx={{ display: 'block', fontSize: '14px' }}>04.00 PM - 6:00PM</Typography>
                                    </Box>
                                    <Box>
                                        <Typography sx={{ color: '#5c10e3' }}>Thu</Typography>
                                        <Typography variant='body' sx={{ fontSize: '14px' }}>10.00 AM - 2:00PM</Typography>
                                        <Typography variant='body' sx={{ display: 'block', fontSize: '14px' }}>04.00 PM - 6:00PM</Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <Typography variant='h5' sx={{ color: '#5c10e3' }}>$12</Typography>
                                </Box>
                            </Stack>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default DoctorClinikItem;