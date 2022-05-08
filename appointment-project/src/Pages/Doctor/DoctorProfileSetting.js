import React, { useState } from 'react';
import DoctorProfileForm from '../../Components/doctor/DoctorProfileForm';
import { LayoutContiner } from '../../styles/MetarialStyles';
import axios from "axios";


const DoctorProfileSetting = () => {
    const [data, setData] = useState([]);
    const [image, setImage] = useState([]);
    const [preview, setPreview] = useState("");

    const [educationFeilds, setEducationFeilds] = useState([
        { degree: '', institude: '', passingYear: '' }
    ]);

    const handleEducation = (e, index) => {
        let eduData = [...educationFeilds];
        eduData[index][e.target.name] = e.target.value;
        setEducationFeilds(eduData);
    }

    const addEducationFields = () => {
        let object = {
            degree: '',
            institude: '',
            passingYear: ''
        }

        setEducationFeilds([...educationFeilds, object])
    }

    const removeFields = (index) => {
        let data = [...educationFeilds];
        data.splice(index, 1)
        setEducationFeilds(data)
    }



    const handleImageSet = (e) => {
        const selectImg = e.target.files[0];
        setImage(selectImg);
        const imgPreview = URL.createObjectURL(selectImg);
        setPreview(imgPreview);

    }

    const handleSubmit = () => {
        const newData = {
            ...data,
            image: image,
            education: educationFeilds
        };

        const formData = new FormData();
        for (const key in newData) {
            formData.append(key, newData[key]);
        }

        if (data !== null && data.File !== undefined) {
            axios.post("http://localhost:5000/doctorProfile", formData).then((res) => {
                if (res.status === 200) {
                }
            });
        } else {
            alert("Please Enter all data");
        }
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
                addFields={addEducationFields}
                removeFields={removeFields}
            ></DoctorProfileForm>
        </LayoutContiner >
    );
};

export default DoctorProfileSetting;