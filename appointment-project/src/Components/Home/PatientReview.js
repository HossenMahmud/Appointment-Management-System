import styled from '@emotion/styled';
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ReviewImg from '../../assets/images/review-bg.jpg';
import review1 from '../../assets/images/P-review1.jpg';
import review2 from '../../assets/images/p-review2.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const PatientReview = () => {
    const ReviewLayout = styled(Box)(({ theme }) => ({
        padding: '50px 0px',
        backgroundImage: `url(${ReviewImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }));


    const settings = {
        autoplay: true,
        arrows: false,
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear",
    };

    const Reviews = [
        {
            id: 1,
            "comment": " Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus vero rerum, nihil corporis, ducimus reprehenderit, eum illo laboriosam sed maxime sunt est sequi repellendus id consectetur officia dolore hic similique.",
            "name": "Jannatul Hia",
            "type": "Patient",
            "img": `${review1}`
        },
        {
            id: 1,
            "comment": " Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus vero rerum, nihil corporis, ducimus reprehenderit, eum illo laboriosam sed maxime sunt est sequi repellendus id consectetur officia dolore hic similique.",
            "name": "Tammana Hia",
            "type": "Patient",
            "img": `${review2}`
        }
    ]

    return (
        <ReviewLayout>
            <Container maxWidth="lg">
                <Slider style={{ marginTop: '-16px' }}  {...settings}>

                    {
                        Reviews.map(review => (
                            <Box>
                                <Grid container>
                                    <Grid item xs={12} sm={10} sx={{ mx: 'auto' }}>
                                        <Box sx={{ p: 2, textAlign: 'center' }}>
                                            <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
                                                <img src={review.img} alt="" width={120} style={{ borderRadius: '50%', border: '5px solid blue' }} />
                                            </Box>

                                            <Box>
                                                <Typography variant='body' sx={{ color: '#f0f0f0' }}>
                                                    {review.comment}
                                                </Typography>
                                                <Box sx={{ mt: 3 }}>
                                                    <Typography variant='h5' sx={{ color: '#fff', fontWeight: 'bold' }}>   {review.name}</Typography>
                                                    <Typography variant='body' sx={{ color: '#f1f1f1' }}> {review.type}</Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        ))
                    }

                </Slider>
            </Container>
        </ReviewLayout >
    );
};

export default PatientReview;