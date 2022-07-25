import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PatientUpdateForm from '../../../Components/Dashboard/patient/PatientUpdateForm';
import { LayoutContiner } from '../../../styles/MetarialStyles';
import Axios from 'axios';
import Swal from 'sweetalert2';

const UpdatePatientInfo = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const navigate = useNavigate()

    const [patientInfo, setPatientInfo] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/singlePatient/${id}`)
            .then(res => res.json())
            .then(data => setPatientInfo(data[0]))
    }, [id]);


    const updatePatient = e => {
        Axios.put(`http://localhost:5000/patientUpdate/${id}`, data)
            .then((res) => {
                if (res.status === 200) {
                    navigate('/Dashboard/patientprofile')
                    Swal.fire({
                        icon: 'success',
                        title: 'Ok',
                        text: 'Successfully Profile Updated',
                        timer: 1500,
                        showCancelButton: false,
                        showConfirmButton: false,
                    })
                }
            });
        e.preventDefault();
    };


    return (
        <LayoutContiner>
            {(patientInfo.length !== 0) &&
                <PatientUpdateForm
                    data={data}
                    setData={setData}
                    patient={patientInfo}
                    updatePatient={updatePatient}
                ></PatientUpdateForm>
            }

        </LayoutContiner>
    );
};

export default UpdatePatientInfo;