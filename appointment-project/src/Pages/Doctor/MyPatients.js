import React from 'react';
import MyPatientsCard from '../../Components/doctor/MyPatientsCard';
import { LayoutContiner } from '../../styles/MetarialStyles';

const MyPatients = () => {
    return (
        <LayoutContiner>
            <MyPatientsCard></MyPatientsCard>
        </LayoutContiner >
    );
};

export default MyPatients;