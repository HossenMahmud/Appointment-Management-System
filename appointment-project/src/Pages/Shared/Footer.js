import styled from '@emotion/styled';
import { Container, Divider, Grid, Link, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import logo from '../../assets/images/Logo1.png'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css'

const Footer = () => {

    const FooterContainer = styled(Box)(({ theme }) => ({
        paddingTop: '50px',
        backgroundColor: "#183153",
    }));

    const SocialIconContainer = styled(Box)(({ theme }) => ({
        width: '35px',
        height: '35px',
        backgroundColor: "#3820c9",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: "15px 2px 15px 2px",
        border: '1px solid #3820c9',
        transition: ' all 0.5s',
        '&:hover': {
            backgroundColor: '#52CBF3',
            border: '1px solid #f0f0f0',
        }

    }));

    const FooterLink = styled(Link)(({ theme }) => ({
        textDecoration: 'none',
        fontSize: '16px',
        color: '#fff',
        transition: ' all 0.5s',
        paddingRight: '10px',
        '&:hover': {
            color: "#3820c9",
        }

    }));


    return (
        <FooterContainer>
            <Container maxWidth="xl">
                <Grid container>
                    <Grid item xs={12} sm={10} md={8} sx={{ mx: 'auto' }} >
                        <Box sx={{ textAlign: 'center' }}>

                            <img src={logo} alt="" width="160px" />

                            <Box>
                                <Stack
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={1}
                                    sx={{ my: 1 }}
                                >
                                    <Link href="#" underline="none" >
                                        <SocialIconContainer>
                                            <FacebookOutlinedIcon />
                                        </SocialIconContainer>
                                    </Link>
                                    <Link href="#" underline="none" >
                                        <SocialIconContainer>
                                            <InstagramIcon />
                                        </SocialIconContainer>
                                    </Link>
                                    <Link href="#" underline="none" >
                                        <SocialIconContainer>
                                            <TwitterIcon />
                                        </SocialIconContainer>
                                    </Link>
                                    <Link href="#" underline="none" >
                                        <SocialIconContainer>
                                            <LinkedInIcon />
                                        </SocialIconContainer>
                                    </Link>
                                </Stack>
                            </Box>

                            <Box className="search-holder">
                                <input type="email" placeholder='Enter Email' name='email' />
                                <button className='sercribe-btn'>Subscribe</button>
                            </Box>

                            <Box>
                                <Stack
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={1}
                                    sx={{ my: 1, flexWrap: 'wrap' }}
                                >
                                    <FooterLink href="#">
                                        About Us
                                    </FooterLink>
                                    <FooterLink href="#">
                                        Blog
                                    </FooterLink>
                                    <FooterLink href="#">
                                        Doctor
                                    </FooterLink>
                                    <FooterLink href="#">
                                        Our Clinc
                                    </FooterLink>
                                    <FooterLink href="#">
                                        FAQ
                                    </FooterLink>
                                    <FooterLink href="#">
                                        Contct Us
                                    </FooterLink>
                                    <FooterLink href="#">
                                        Terms and Conditions
                                    </FooterLink>
                                </Stack>
                            </Box>

                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ mt: 3 }}>
                            <Divider sx={{ borderColor: '#5f5f5f' }} />
                            <Box sx={{ textAlign: 'center', py: 3 }}>
                                <Typography sx={{ color: '#fff' }}>
                                    © 2022 Wiztechbd All Rights Reserved.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </FooterContainer >
    );
};

export default Footer;