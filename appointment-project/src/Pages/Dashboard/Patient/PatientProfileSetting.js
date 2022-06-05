import React, { useState } from 'react';
import PatientProfileForm from '../../../Components/Dashboard/patient/PatientProfileForm';
import { LayoutContiner } from '../../../styles/MetarialStyles';
import useAuth from '../../../Hooks/useAuth';
import Axios from "axios";

const PatientProfileSetting = () => {
    const { user } = useAuth()
    const [data, setData] = useState(null);
    const [img, setImg] = useState();
    const [preview, setPreview] = useState("");
    const userId = user[0]?.id;

    const handleImageSet = (e) => {
        const selectImg = e.target.files[0];
        setImg(selectImg);
        const imgPreview = URL.createObjectURL(selectImg);
        setPreview(imgPreview);
    }

    const handleSubmit = e => {
        const newData = { ...data, userId: userId, image: img }
        const formData = new FormData();
        for (const key in newData) {
            formData.append(key, newData[key]);
        }
        if (newData !== null && newData.image !== undefined) {
            Axios.post("http://localhost:5000/profile", formData).then((res) => {
                if (res.status === 200) {
                    alert("Successfully Data Added");
                    e.target.reset();
                }
            });
        } else {
            alert("Please Enter all data");
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

export default PatientProfileSetting;