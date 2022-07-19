import React from 'react';
import { useRef } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { LayoutContiner } from '../../../../styles/MetarialStyles';
import { Box } from '@mui/system';

const AppointmentDownloadPage = () => {
    const inputRef = useRef(null);
    const printDocument = () => {
        html2canvas(inputRef.current).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF();
            pdf.addImage(imgData, "JPEG", 0, 0);
            pdf.save("Appointment.pdf");
        });
    };
    return (
        <>
            <LayoutContiner>
                <Box>
                    <Box>
                        <button onClick={printDocument}>Download</button>
                    </Box>
                    <Box id="divToPrint" ref={inputRef}>
                        <div>Note: Here the dimensions of div are same as A4</div>
                        <div>You Can add any component here</div>
                    </Box>
                </Box>
            </LayoutContiner>
        </>
    );
};

export default AppointmentDownloadPage;



