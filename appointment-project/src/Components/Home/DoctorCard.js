import styled from '@emotion/styled';
import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GradeIcon from '@mui/icons-material/Grade';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// import WatchLaterIcon from '@mui/icons-material/WatchLater';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { Link } from "react-router-dom";
import { ButtonMake } from '../../styles/MetarialStyles';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './DoctorCard.css';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    root: {
        background: "#454064"
    },
    dots: {
        bottom: -40,
        "& li.slick-active button::before": {
            color: "blue"
        },
        "& li": {
            "& button::before": {
                fontSize: "16px",
                color: "black",
                opacity: 0.8
            }
        }
    }
}));

const DoctorCard = ({ doctors }) => {
    const CardLayout = styled(Box)(({ theme }) => ({
        backgroundColor: "#fff",
        border: '1px solid #f0f0f0',
        borderRadius: '4px',
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
    const classes = useStyles();
    const settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        dotsClass: `slick-dots ${classes.dots}`,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (

        <Slider {...settings}>
            {
                doctors.slice(0, 5).map(doctor => (
                    <CardLayout >
                        <Box sx={{ p: 1 }}>
                            {/* Doctor Image */}
                            <Box className="img-container">
                                <img style={{ display: 'block', transition: ' transform .4s', overflow: 'hidden', }} src={doctor.image} alt="" width="100%" />
                            </Box>

                            {/* Doctor Info */}
                            <Box sx={{ my: 2 }}>
                                <Stack
                                    direction="row"
                                    justifyContent="left"
                                    alignItems="center"
                                    spacing={2}
                                >
                                    <DoctorName>{doctor.firstName} {doctor.lastName}</DoctorName>
                                    <CheckCircleIcon sx={{ fontSize: '18px', color: '#20C0F3' }} />
                                </Stack>

                                <Typography sx={{ fontSize: '12px', color: '#757575' }}>
                                    {doctor.specialist}
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
                                        <Typography sx={{ fontSize: '12px', color: '#757575' }}>{doctor.address}</Typography>
                                    </Stack>

                                    {/* <Stack direction="row" justifyContent="left" alignItems="center" spacing={1} >
                                        <WatchLaterIcon sx={{ fontSize: '12px', color: '#757575' }} />
                                        <Typography sx={{ fontSize: '12px', color: '#757575' }}>{doctor.time}</Typography>
                                    </Stack> */}

                                    <Stack direction="row" justifyContent="left" alignItems="center" spacing={1} >
                                        <MonetizationOnIcon sx={{ fontSize: '12px', color: '#757575' }} />
                                        <Typography sx={{ fontSize: '12px', color: '#757575' }}>300-400</Typography>
                                    </Stack>
                                </Box>

                                <Box>
                                    <Link to={`doctordetails/${doctor.id}`} style={{ textDecoration: 'none' }}>
                                        <ButtonMake sx={{ mr: 1, mb: 1 }}>View Profile</ButtonMake>
                                    </Link>
                                    <ButtonMake sx={{ mb: 1 }}>Book Now</ButtonMake>
                                </Box>
                            </Box>
                        </Box>
                    </CardLayout>

                ))
            }

        </Slider>

    );
};

export default DoctorCard;