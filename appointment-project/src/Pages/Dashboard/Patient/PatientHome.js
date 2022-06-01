import React from 'react';
import HomeFilter from '../../../Components/Dashboard/patient/PatientHome/HomeFilter';
import PatientCard from '../../../Components/Dashboard/patient/PatientHome/PatientCard';
import { LayoutContiner } from '../../../styles/MetarialStyles';

const PatientHome = () => {
    return (
        <LayoutContiner>
            <PatientCard></PatientCard>
            <HomeFilter></HomeFilter>
        </LayoutContiner >
    );
};

export default PatientHome;