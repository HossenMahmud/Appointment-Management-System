import { Box, Container, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ButtonMake, NavbarRoot } from '../../styles/MetarialStyles';
// import profile from '../../assets/images/profile.jpg';
import { Link, useNavigate } from "react-router-dom";
import useAuth from '../../Hooks/useAuth'
import { useState } from 'react';

export const NavBar = ({ sidebartoggle }) => {
    const user = useAuth();
    const navigate = useNavigate();

    const Logout = () => {
        localStorage.clear();
        navigate('/');
        window.location.reload();
    }
    return (
        <>
            <NavbarRoot>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                onClick={sidebartoggle}
                                sx={{
                                    display: {
                                        xs: 'inline-flex',
                                        lg: 'none',
                                        color: '#1B5A90'
                                    }
                                }}
                            >
                                <MenuIcon fontSize="large" />
                            </IconButton>
                        </Box>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            {/* <IconButton sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src={profile} />
                            </IconButton> */}
                            <Stack
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                                spacing={1}
                            >
                                <Typography sx={{ color: "black", fontSize: '16px' }}>{user[0]?.userName}</Typography>
                                {
                                    user[0] ? <ButtonMake variant='contained' onClick={Logout}>Logout</ButtonMake> : <Link to='/login' style={{ textDecoration: 'none', fontSize: '18px', color: '#f1f1f1', fontWeight: 'bold' }}>Login</Link>
                                }

                            </Stack>
                        </Box>


                    </Toolbar>
                </Container>

            </NavbarRoot>
        </>
    );
};

