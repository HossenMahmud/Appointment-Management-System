import React from 'react';
import MyPatientsCard from '../../../Components/Dashboard/doctor/MyPatientsCard';
import { LayoutContiner } from '../../../styles/MetarialStyles';

const MyPatients = () => {
    return (
        <LayoutContiner>
            <MyPatientsCard></MyPatientsCard>
        </LayoutContiner >
    );
};

export default MyPatients;