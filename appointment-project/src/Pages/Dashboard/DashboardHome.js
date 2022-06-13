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
                user.role === 'admin' && <>
                    <AdminHome></AdminHome>
                </>
            }
            {
                user.role === 'doctor' && <>
                    <DoctorHome></DoctorHome>
                </>
            }
            {
                user.role === 'patient' && <>
                    <PatientHome></PatientHome>
                </>
            }
        </div>
    );
};

export default DashboardHome;