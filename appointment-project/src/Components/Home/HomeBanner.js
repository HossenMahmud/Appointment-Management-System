import React from 'react';
import { Box } from '@mui/system';
import styled from '@emotion/styled';
import bannerImg from '../../assets/images/Banner.png';
import doctorImg from '../../assets/images/bannerDoctor.png';
import doctorImg2 from '../../assets/images/bannerDoctor2.png';
import Container from '@mui/material/Container';
import { Grid, Typography } from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";




const HomeBanner = () => {
    const BannerLayout = styled(Box)(({ theme }) => ({
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }));


    const BannerButton = styled(Box)(({ theme }) => ({
        marginTop: '25px',
        padding: "10px 15px",
        borderRadius: '4px',
        border: '2px solid #f0f0f0',
        color: '#f0f0f0',
        textTransform: 'capitalize',
        fontWeight: 'bold',
        transition: ' all 0.3s',
        cursor: 'pointer',
        '&:hover': {
            border: '2px solid #3820c9',
            background: '#3820c9',
            color: '#fff',
        }
    }));


    const settings = {
        autoplay: true,
        arrows: false,
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear"
    };


    return (
        <BannerLayout>
            <Container maxWidth="lg">
                <Slider style={{ marginTop: '-16px' }}  {...settings}>
                    <Box >
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Box sx={{ mt: { xs: 5, sm: 10 } }}>
                                    <Typography variant='h3' sx={{ color: '#f0f0f0', fontSize: { xs: "32px", sm: "40px" } }}>Good health is the root of all happiness</Typography>
                                    <Link to='AllDoctors' style={{ textDecoration: 'none' }}>
                                        <BannerButton sx={{ textAlign: 'center', width: "150px" }}>Make Appointment</BannerButton>
                                    </Link>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                                    <img src={doctorImg} alt="" width="80%" />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Box sx={{ mt: { xs: 5, sm: 10 } }}>
                                    <Typography variant='h3' sx={{ color: '#f0f0f0', fontSize: { xs: "32px", sm: "44px" } }}>Good health is the root of all happiness</Typography>
                                    <Link to='AllDoctors' style={{ textDecoration: 'none' }}>
                                        <BannerButton sx={{ textAlign: 'center', width: "150px" }}>Make Appointment</BannerButton>
                                    </Link>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                                    <img src={doctorImg2} alt="" width="80%" />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Slider>
            </Container>
        </BannerLayout >
    );
};

export default HomeBanner;