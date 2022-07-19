import styled from '@emotion/styled';
import { Button, ButtonGroup, Grid, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import './AlldoctorsCard.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GradeIcon from '@mui/icons-material/Grade';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { Link } from "react-router-dom";
import { ButtonMake } from '../../styles/MetarialStyles';

const CardLayout = styled(Box)(({ theme }) => ({
    backgroundColor: "#fff",
    border: '1px solid #f0f0f0',
    borderRadius: '4px',
    padding: '15px',
}));

const DoctorName = styled(Typography)(({ theme }) => ({
    color: '#555',
    fontWeight: 'bold',
    fontSize: '16px',
    transition: ' all 0.3s',
    '&:hover': {
        color: '#09dca4',
    }
}));

const AllDoctorsCard = ({ doctors }) => {

    const allCategories = ['All', ...new Set(doctors?.map(item => item.specialist))];
    const [doctorItem, setDoctorItem] = useState(doctors);

    //Filter Function
    const filter = (categoryName) => {
        if (categoryName === 'All') {
            setDoctorItem(doctors);
            return;
        }
        const filteredData = doctors?.filter(doctor => doctor.specialist === categoryName);
        setDoctorItem(filteredData)
    }

    const handleSearchFilter = e => {
        const searchword = e.target.value;

        if (searchword === '') {
            setDoctorItem(doctors);
            return;
        }
        const newFilter = doctorItem?.filter((value) => value.firstName.toLowerCase().includes(searchword.toLowerCase()));
        setDoctorItem(newFilter);
    }


    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={3} >
                <Box sx={{ backgroundColor: '#183153', borderRadius: '10px', }}>
                    <Box sx={{ textAlign: 'center', backgroundColor: '#162B7E', py: 2, color: '#fff', borderRadius: '10px 10px 0 0' }}>
                        <Typography>Select Doctor By Category
                        </Typography>
                    </Box>
                    <Box>
                        <ButtonGroup
                            color='info'
                            fullWidth
                            orientation="vertical"
                            aria-label="vertical outlined button group"
                        >
                            {
                                allCategories?.map((cat, i) => {
                                    return <Button key={i} onClick={() => filter(cat)} sx={{ textTransform: 'capitalize' }}>{cat}</Button>
                                })
                            }
                        </ButtonGroup>
                    </Box>
                    <Box sx={{ textAlign: 'center', backgroundColor: '#162B7E', py: 3, color: '#fff', borderRadius: '0 0 10px 10px' }}>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} sm={9} >
                <Box className='search-box' sx={{ mb: 3, backgroundColor: '#183153', p: 2, borderRadius: '10px', textAlign: 'center' }}>
                    <input type="text" name="search" placeholder="Search doctor name..." onChange={handleSearchFilter} />
                </Box>
                <Box>
                    <Grid container spacing={2}>
                        {
                            doctorItem?.map((doctor) => <>
                                <Grid item xs={12} sm={4} md={4} >
                                    <CardLayout>
                                        {/* Doctor Image */}
                                        <Box className="img-container">
                                            <img style={{ display: 'block', transition: ' transform .4s', overflow: 'hidden', }} src={doctor?.image} alt="" width="100%" />
                                        </Box>

                                        {/* Doctor Info */}
                                        <Box sx={{ my: 2 }}>

                                            <Stack
                                                direction="row"
                                                justifyContent="left"
                                                alignItems="center"
                                                spacing={2}
                                            >
                                                <DoctorName>{doctor?.firstName}{doctor?.lastName}</DoctorName>
                                                <CheckCircleIcon sx={{ fontSize: '18px', color: '#20C0F3' }} />
                                            </Stack>

                                            <Typography sx={{ fontSize: '12px', color: '#757575' }}>
                                                {doctor?.specialist}
                                            </Typography>

                                            <Box sx={{ mt: 1 }}>
                                                <Stack
                                                    direction="row"
                                                    justifyContent="left"
                                                    alignItems="center"
                                                >
                                                    <Box>
                                                        <GradeIcon sx={{ fontSize: '20px', color: '#f4c150' }} />
                                                        <GradeIcon sx={{ fontSize: '20px', color: '#f4c150' }} />
                                                        <GradeIcon sx={{ fontSize: '20px', color: '#f4c150' }} />
                                                        <GradeIcon sx={{ fontSize: '20px', color: '#f4c150' }} />
                                                        <GradeIcon sx={{ fontSize: '20px', color: '#dedfe0' }} />
                                                    </Box>
                                                    <Typography sx={{ fontSize: '14px', color: '#757575' }}>(66)</Typography>
                                                </Stack>
                                            </Box>

                                            <Box sx={{ my: 1 }}>
                                                <Stack direction="row" justifyContent="left" alignItems="center" spacing={1} >
                                                    <LocationOnIcon sx={{ fontSize: '12px', color: '#757575' }} />
                                                    <Typography sx={{ fontSize: '12px', color: '#757575' }}>{doctor?.address}</Typography>
                                                </Stack>

                                                <Stack direction="row" justifyContent="left" alignItems="center" spacing={1} >
                                                    <MonetizationOnIcon sx={{ fontSize: '12px', color: '#757575' }} />
                                                    <Typography sx={{ fontSize: '12px', color: '#757575' }}>$300 - $500</Typography>
                                                </Stack>
                                            </Box>

                                            <Box>
                                                <Link to={`doctordetails/${doctor?.id}`} style={{ textDecoration: 'none' }}>
                                                    <ButtonMake sx={{ mr: 1 }}>View Profile</ButtonMake>
                                                </Link>
                                                <Link to={`/bookNow/${doctor.id}`} style={{ textDecoration: 'none' }}>
                                                    <ButtonMake sx={{ mb: 1 }}>Book Now</ButtonMake>
                                                </Link>
                                            </Box>

                                        </Box>
                                    </CardLayout>
                                </Grid >
                            </>)
                        }
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    );
};

export default AllDoctorsCard;