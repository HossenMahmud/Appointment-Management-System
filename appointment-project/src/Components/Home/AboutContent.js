import React from 'react';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import { Grid, Stack, Typography } from '@mui/material';
import AboutImg from '../../assets/images/about.png';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CountUp from 'react-countup';


const AboutContent = () => {
    const AboutLayout = styled(Box)(({ theme }) => ({
        padding: '50px 0px',
    }));

    const AboutService = styled(Box)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
    }));
    const AboutText = styled(Typography)(({ theme }) => ({
        color: "#494949",
        fontSize: '15px',
        fontWeight: 'normal',
    }));

    const CounterBox = styled(Box)(({ theme }) => ({
        backgroundColor: '#183153',
        padding: '20px',
        borderRadius: '5px',
    }));

    const CounterDisit = styled(Box)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }));



    return (
        <AboutLayout>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Box>
                        <img src={AboutImg} alt="" width="90%" />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box>
                        <Typography variant='h4' sx={{ color: '#3820C9', mb: 2 }}>Doccure Booking System</Typography>
                        <AboutText >
                            Medvill medical is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text. Demoralized by the charms of pleasure so that moment to blinded by desire that they cannot foresee.Lorem Ipsum has been the industrys standard dummy text. Demoralized by the charms of pleasure so that moment to blinded by desire that they cannot foresee.
                        </AboutText>
                        <Box sx={{ my: 2 }}>
                            <AboutService>
                                <ChevronRightIcon sx={{ color: '#494949' }} />
                                <AboutText>24/7 hours support. </AboutText>
                            </AboutService>
                            <AboutService>
                                <ChevronRightIcon sx={{ color: '#494949' }} />
                                <AboutText> Only Qualified Doctors </AboutText>
                            </AboutService>
                            <AboutService>
                                <ChevronRightIcon sx={{ color: '#494949' }} />
                                <AboutText>99% client satisfaction. </AboutText>
                            </AboutService>
                            <AboutService>
                                <ChevronRightIcon sx={{ color: '#494949' }} />
                                <AboutText>Quality team always ready to help. </AboutText>
                            </AboutService>
                            <AboutService>
                                <ChevronRightIcon sx={{ color: '#494949' }} />
                                <AboutText>Emergency Service.  </AboutText>
                            </AboutService>
                        </Box>

                        <CounterBox>
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                                spacing={2}
                            >
                                <Box sx={{ textAlign: 'center' }}>
                                    <Typography variant='h5' sx={{ color: '#3820C9', fontWeight: 'bold', mb: 2 }}>
                                        <CounterDisit>
                                            <CountUp start={0} end={5} delay={2}>
                                                {({ countUpRef }) => (
                                                    <div>
                                                        <span ref={countUpRef} />
                                                    </div>
                                                )}
                                            </CountUp>
                                            K
                                        </CounterDisit>
                                    </Typography>
                                    <Typography variant='body' sx={{ fontWeight: "bold", color: '#f0f0f0' }}>Happy Patients</Typography>
                                </Box>
                                <Box sx={{ textAlign: 'center' }}>
                                    <Typography variant='h5' sx={{ color: '#3820C9', fontWeight: 'bold', mb: 2 }}>
                                        <CounterDisit>
                                            <CountUp start={0} end={75} delay={2}>
                                                {({ countUpRef }) => (
                                                    <div>
                                                        <span ref={countUpRef} />
                                                    </div>
                                                )}
                                            </CountUp>
                                            +
                                        </CounterDisit>

                                    </Typography>
                                    <Typography variant='body' sx={{ fontWeight: "bold", color: '#f0f0f0' }}>Expart Doctors</Typography>
                                </Box>
                                <Box sx={{ textAlign: 'center' }}>
                                    <Typography variant='h5' sx={{ color: '#3820C9', fontWeight: 'bold', mb: 2 }}>
                                        <CounterDisit>
                                            <CountUp start={0} end={10} delay={2}>
                                                {({ countUpRef }) => (
                                                    <div>
                                                        <span ref={countUpRef} />
                                                    </div>
                                                )}
                                            </CountUp>
                                            +
                                        </CounterDisit>
                                    </Typography>
                                    <Typography variant='body' sx={{ fontWeight: "bold", color: '#f0f0f0' }}>Total Departments</Typography>
                                </Box>

                            </Stack>
                        </CounterBox>

                    </Box>
                </Grid>
            </Grid>
        </AboutLayout >
    );
};

export default AboutContent;