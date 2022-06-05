import React from 'react';
import { LayoutContiner } from '../../../styles/MetarialStyles';
import DoctorsList from '../../../Components/Dashboard/admin/DoctorsList'

const Doctors = () => {
    return (
        <LayoutContiner>
            <DoctorsList></DoctorsList>
        </LayoutContiner>
    );
};

export default Doctors;