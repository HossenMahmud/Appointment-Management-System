import React, { useState } from 'react';
import PatientProfileForm from '../../../Components/Dashboard/patient/PatientProfileForm';
import { LayoutContiner } from '../../../styles/MetarialStyles';
import Axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddPatientInfo = () => {
    const [data, setData] = useState(null);
    const [img, setImg] = useState();
    const [preview, setPreview] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();


    const handleImageSet = (e) => {
        const selectImg = e.target.files[0];
        setImg(selectImg);
        const imgPreview = URL.createObjectURL(selectImg);
        setPreview(imgPreview);
    }
    const handleSubmit = e => {
        const newData = { ...data, userId: id, image: img, role: 'patient' }
        const formData = new FormData();
        for (const key in newData) {
            formData.append(key, newData[key]);
        }
        if (newData !== null && newData.image !== undefined) {
            Axios.post("http://localhost:5000/addPatientInfo", formData).then((res) => {
                if (res.status === 200) {
                    navigate('/Dashboard/patientprofile');
                    Swal.fire({
                        icon: 'success',
                        title: 'Ok',
                        text: 'Successfully Profile Created',
                        timer: 1500,
                        showCancelButton: false,
                        showConfirmButton: false,
                    })
                }
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Data Missing',
                text: 'Please Enter all data',
                timer: 1500,
                showCancelButton: false,
                showConfirmButton: false,
            })
        }
        e.preventDefault();
    };
    return (
        <LayoutContiner>
            <PatientProfileForm
                handleSubmit={handleSubmit}
                data={data}
                setData={setData}
                preview={preview}
                handleImageSet={handleImageSet}
            >

            </PatientProfileForm>
        </LayoutContiner>
    );
};

export default AddPatientInfo;