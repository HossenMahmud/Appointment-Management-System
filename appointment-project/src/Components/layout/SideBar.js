import { Box, Drawer, Typography, useMediaQuery } from '@mui/material';
import HouseIcon from '@mui/icons-material/House';
import { NavItem } from './NavItem';
import { useStyle } from '../../styles/MetarialStyles';


const items = [
    {
        href: '/',
        icon: (<HouseIcon fontSize="small" sx={{ color: '#f1f1f1' }} />),
        title: 'Dashboard'
    },
    {
        href: '/allappointments',
        icon: (<HouseIcon fontSize="small" sx={{ color: '#f1f1f1' }} />),
        title: 'Appointments'
    },
    {
        href: '/doctors',
        icon: (<HouseIcon fontSize="small" sx={{ color: '#f1f1f1' }} />),
        title: 'Doctors'
    },
    {
        href: '/patients',
        icon: (<HouseIcon fontSize="small" sx={{ color: '#f1f1f1' }} />),
        title: 'Patients'
    },


    {
        href: '/doctorhome',
        icon: (<HouseIcon fontSize="small" sx={{ color: '#f1f1f1' }} />),
        title: 'Doctor Home'
    },
    {
        href: '/mypatients',
        icon: (<HouseIcon fontSize="small" sx={{ color: '#f1f1f1' }} />),
        title: 'My Patients'
    },
    {
        href: '/appointments',
        icon: (<HouseIcon fontSize="small" sx={{ color: '#f1f1f1' }} />),
        title: 'Appointments'
    },
    {
        href: '/doctorprofile',
        icon: (<HouseIcon fontSize="small" sx={{ color: '#f1f1f1' }} />),
        title: 'Profile Setting'
    },

];

export default function SideBar({ open, onClose }) {
    const style = useStyle();
    const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
        defaultMatches: true,
        noSsr: false
    });


    const content = (
        <>
            <Box
                className={style.sidebar}
            >
                <Box sx={{ width: '100%', textAlign: "center", py: 2.2 }}>
                    <Typography variant='h5' sx={{ color: "#f1f1f1", fontweight: 'bold', letterSpacing: "4px" }}>Appointment</Typography>
                </Box>

                <Box sx={{
                    flexGrow: 1,
                    mt: 2,
                }}>
                    {items.map((item) => (
                        <NavItem
                            key={item.title}
                            icon={item.icon}
                            href={item.href}
                            title={item.title}
                            onClose={onClose}
                        />
                    ))}
                </Box>
            </Box>
        </>
    );

    if (lgUp) {
        return (
            <Drawer
                variant="permanent"
                anchor="left"
                open
                PaperProps={{
                    sx: {
                        width: 250,
                        border: 'none',
                    }
                }}
            >
                {content}
            </Drawer>

        );
    }

    return (
        <Drawer
            variant="temporary"
            anchor="left"
            onClose={onClose}
            open={open}
            PaperProps={{
                sx: {
                    width: 250,
                    border: 'none',
                }
            }}
        >
            {content}
        </Drawer>

    );
};