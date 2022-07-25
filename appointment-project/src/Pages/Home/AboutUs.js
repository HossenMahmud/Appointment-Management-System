import React from 'react';
import { Container } from '@mui/material';
import AboutContent from '../../Components/Home/AboutContent';
import useAuth from '../../Hooks/useAuth';

const AboutUs = () => {
    const { user } = useAuth();
    console.log(user)
    return (
        <Container maxWidth="lg">
            <AboutContent />
        </Container>

    );
};

export default AboutUs;