import React from 'react';
import useAuth from '../../Hooks/useAuth';
import AdminHome from './Admin/AdminHome';
import DoctorHome from './Doctor/DoctorHome';
import PatientHome from './Patient/PatientHome';

const DashboardHome = () => {
    const { user } = useAuth();
    return (
        <div>
            {
                user[0].role === 'admin' && <>
                    <AdminHome></AdminHome>
                </>
            }
            {
                user[0].role === 'doctor' && <>
                    <DoctorHome></DoctorHome>
                </>
            }
            {
                user[0].role === 'patient' && <>
                    <PatientHome></PatientHome>
                </>
            }
        </div>
    );
};

export default DashboardHome;