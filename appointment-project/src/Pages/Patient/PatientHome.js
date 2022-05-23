import React from 'react';
import HomeFilter from '../../Components/patient/PatientHome/HomeFilter';
import PatientCard from '../../Components/patient/PatientHome/PatientCard';
import { LayoutContiner } from '../../styles/MetarialStyles';

const PatientHome = () => {
    return (
        <LayoutContiner>
            <PatientCard></PatientCard>
            <HomeFilter></HomeFilter>
        </LayoutContiner >
    );
};

export default PatientHome;