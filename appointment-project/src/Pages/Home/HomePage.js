import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import AboutUs from './AboutUs';
import Banner from './Banner';
import Doctor from './Doctor';
import Reviews from './Reviews';

const HomePage = () => {

    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Doctor></Doctor>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
}


export default HomePage;