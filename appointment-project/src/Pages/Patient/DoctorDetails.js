import React from 'react';
import { LayoutContiner } from '../../styles/MetarialStyles';
import DoctorDetailsTop from '../../Components/patient/DoctorDetails/DoctorDetailsTop'
import DoctorDetailsInfo from '../../Components/patient/DoctorDetails/DoctorDetailsInfo';



const DoctorDetails = () => {

    return (

        <LayoutContiner>
            <DoctorDetailsTop></DoctorDetailsTop>
            <DoctorDetailsInfo />
        </LayoutContiner >

    );
};

export default DoctorDetails;