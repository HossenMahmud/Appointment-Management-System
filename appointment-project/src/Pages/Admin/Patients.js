import React from 'react';
import PatientsList from '../../Components/admin/PatientsList';
import { LayoutContiner } from '../../styles/MetarialStyles';

const Patients = () => {
    return (
        <LayoutContiner>
            <PatientsList></PatientsList>
        </LayoutContiner>
    );
};

export default Patients;