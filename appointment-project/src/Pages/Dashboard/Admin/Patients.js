import React from 'react';
import PatientsList from '../../../Components/Dashboard/admin/PatientsList';
import { LayoutContiner } from '../../../styles/MetarialStyles';

const Patients = () => {
    return (
        <LayoutContiner>
            <PatientsList></PatientsList>
        </LayoutContiner>
    );
};

export default Patients;