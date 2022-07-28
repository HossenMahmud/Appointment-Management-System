import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UpdateScheduleForm from './UpdateScheduleForm';

const UpdateSchedule = () => {
    const { id } = useParams();
    const [schedule, setSchedule] = useState(null);
    useEffect(() => {
        fetch(`https://doctor-appointment-server.rpi.gov.bd/singleSchedule/${id}`)
            .then(res => res.json())
            .then(data => setSchedule(data[0]))
    }, [id]);
    return (
        <div>
            {
                (schedule !== null) && <UpdateScheduleForm schedule={schedule}></UpdateScheduleForm>
            }
        </div>
    );
};

export default UpdateSchedule;