import React from 'react';
import { LayoutContiner } from '../../styles/MetarialStyles';
import DoctorDetailsTop from '../../Components/AllDoctors/DoctorDetails/DoctorDetailsTop'
import DoctorDetailsInfo from '../../Components/AllDoctors/DoctorDetails/DoctorAboutInfo';



const DoctorDetails = () => {

    return (

        <LayoutContiner>
            <DoctorDetailsTop></DoctorDetailsTop>
            <DoctorDetailsInfo />
        </LayoutContiner >

    );
};

export default DoctorDetails;