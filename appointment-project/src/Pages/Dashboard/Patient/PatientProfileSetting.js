import React, { useState } from 'react';
import PatientProfileForm from '../../../Components/Dashboard/patient/PatientProfileForm';
import { LayoutContiner } from '../../../styles/MetarialStyles';

const PatientProfileSetting = () => {
    const [data, setData] = useState([]);
    const [image, setImage] = useState([]);
    const [preview, setPreview] = useState("");

    const handleImageSet = (e) => {
        const selectImg = e.target.files[0];
        setImage(selectImg);
        const imgPreview = URL.createObjectURL(selectImg);
        setPreview(imgPreview);
    }
    const allData = { ...data, image: image, };


    return (
        <LayoutContiner>
            <PatientProfileForm
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