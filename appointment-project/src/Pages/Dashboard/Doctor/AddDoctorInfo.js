import React, { useState } from 'react';
import { LayoutContiner } from '../../../styles/MetarialStyles';
import Axios from 'axios';
import DoctorProfileForm from '../../../Components/Dashboard/doctor/DoctorProfileForm'
import useAuth from '../../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddDoctorInfo = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const userId = user?.id;
    const email = user?.email;
    const [data, setData] = useState(null);
    const [image, setImage] = useState([]);
    const [preview, setPreview] = useState("");
    const [educationFeilds, setEducationFeilds] = useState([
        { degree: '', institude: '', passingYear: '' }
    ]);

    const [clinicFeilds, setClinicFeilds] = useState([
        { clinicName: '', clinicAddress: '' }
    ]);



    const handleEducation = (e, index) => {
        let eduData = [...educationFeilds];
        eduData[index][e.target.name] = e.target.value;
        setEducationFeilds(eduData);
    }
    const handleClinic = (e, index) => {
        let clinicData = [...clinicFeilds];
        clinicData[index][e.target.name] = e.target.value;
        setClinicFeilds(clinicData);
    }

    const addEducationFields = () => {
        let object = {
            degree: '',
            institude: '',
            passingYear: ''
        }

        setEducationFeilds([...educationFeilds, object])
    }
    const addClinicFields = () => {
        let object = {
            clinicName: '',
            clinicAddress: '',
        }

        setClinicFeilds([...clinicFeilds, object])
    }

    const removeEduFields = (index) => {
        let data = [...educationFeilds];
        data.splice(index, 1)
        setEducationFeilds(data)
    }
    const removeClinicFields = (index) => {
        let data = [...clinicFeilds];
        data.splice(index, 1)
        setClinicFeilds(data)
    }


    const handleImageSet = (e) => {
        const selectImg = e.target.files[0];
        setImage(selectImg);
        const imgPreview = URL.createObjectURL(selectImg);
        setPreview(imgPreview);

    }

    const handleSubmit = e => {
        const newData = {
            ...data,
            userId: userId,
            education: JSON.stringify(educationFeilds),
            clinic: JSON.stringify(clinicFeilds),
            image: image,
            status: 'Deactive',
            role: 'doctor',
            email: email,
        };

        const formData = new FormData();
        for (const key in newData) {
            formData.append(key, newData[key]);
        }
        if (newData !== null && newData.image !== undefined) {
            Axios.post("https://doctor-appointment-server.rpi.gov.bd/addDoctorInfo", formData).then((res) => {
                if (res.status === 200) {
                    navigate('/Dashboard/doctorprofile');
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
            <DoctorProfileForm
                handleSubmit={handleSubmit}
                data={data}
                setData={setData}
                preview={preview}
                handleImageSet={handleImageSet}

                educationFeilds={educationFeilds}
                setEducationFeilds={setEducationFeilds}
                handleEducation={handleEducation}
                addEduFields={addEducationFields}
                removeEduFields={removeEduFields}

                handleClinic={handleClinic}
                removeClinicFields={removeClinicFields}
                addClinincFields={addClinicFields}
                clinicFeilds={clinicFeilds}
                setClinicFeilds={setClinicFeilds}

            ></DoctorProfileForm>
        </LayoutContiner>
    );
};

export default AddDoctorInfo;