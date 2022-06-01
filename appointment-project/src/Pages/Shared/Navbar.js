import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from '../../assets/images/Logo1.png';
import { Link } from "react-router-dom";
import useAuth from '../../Hooks/useAuth';

const Navbar = () => {

    const user = useAuth();
    const Logout = () => {
        localStorage.clear();
        window.location.reload();
    }


    const [anchorElNav, setAnchorElNav] = React.useState(null);


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };



    return (
        <AppBar position="static" sx={{ backgroundColor: '#183153' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: '#fff',
                            textDecoration: 'none',
                        }}
                    >
                        <img src={logo} alt="" width="120px" />
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            sx={{ color: '#fff' }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <MenuItem >
                                    <Typography textAlign="center">Home</Typography>
                                </MenuItem>
                            </Link>
                            {/* <MenuItem >
                                <Typography textAlign="center">About Us</Typography>
                            </MenuItem> */}
                            <Link to="/alldoctors" style={{ textDecoration: 'none' }}>
                                <MenuItem >
                                    <Typography textAlign="center">Doctors</Typography>
                                </MenuItem>
                            </Link>
                            {
                                user[0] && <Link to="/Dashboard" style={{ textDecoration: 'none' }}>
                                    <MenuItem >
                                        <Typography textAlign="center">Dashboard</Typography>
                                    </MenuItem>
                                </Link>
                            }

                            {
                                user[0] ?
                                    <MenuItem onClick={Logout}>
                                        <Typography textAlign="center">Logout</Typography>
                                    </MenuItem> : <Link to="/login" style={{ textDecoration: 'none' }}>
                                        <MenuItem >
                                            <Typography textAlign="center">Login</Typography>
                                        </MenuItem>
                                    </Link>
                            }


                        </Menu>
                    </Box>


                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: '#fff',
                            textDecoration: 'none',
                        }}
                    >
                        <img src={logo} alt="" width="120px" />
                    </Typography>


                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', }, justifyContent: "right" }}>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <Button sx={{ my: 2, color: '#fff', display: 'block' }} >
                                Home
                            </Button>
                        </Link>
                        {/* <Button sx={{ my: 2, color: '#fff', display: 'block' }} >
                            About Us
                        </Button> */}
                        <Link to="/alldoctors" style={{ textDecoration: 'none' }}>
                            <Button sx={{ my: 2, color: '#fff', display: 'block' }} >
                                Doctors
                            </Button>
                        </Link>

                        {
                            user[0] && <Link to="/Dashboard" style={{ textDecoration: 'none' }}>
                                <Button sx={{ my: 2, color: '#fff', display: 'block' }} >
                                    Dashboard
                                </Button>
                            </Link>
                        }
                        {
                            user[0] ? <Button sx={{ my: 2, color: '#fff', display: 'block' }} onClick={Logout}>
                                Logout
                            </Button> : <Link to="/login" style={{ textDecoration: 'none' }}>
                                <Button sx={{ my: 2, color: '#fff', display: 'block' }} >
                                    Login
                                </Button>
                            </Link>
                        }

                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;