import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { LayoutContiner } from '../../../styles/MetarialStyles';

import DoctorUpdateForm from '../../../Components/Dashboard/doctor/DoctorUpdateForm'

const DoctorUpdateInfo = () => {
    const { id } = useParams();
    const [doctorInfo, setDoctorInfo] = useState([]);
    useEffect(() => {
        fetch(`https://doctor-appointment-server.rpi.gov.bd/singleDoctor/${id}`)
            .then(res => res.json())
            .then(data => setDoctorInfo(data[0]))
    }, [id]);

    return (
        <LayoutContiner>
            {(doctorInfo.length !== 0) &&
                <DoctorUpdateForm
                    doctorInfo={doctorInfo}
                    id={id}
                >
                </DoctorUpdateForm>
            }

        </LayoutContiner>
    );
};

export default DoctorUpdateInfo;