import { Box } from '@mui/system';
import React from 'react';
import './DoctorInfoItem.css';

const DoctorInfoItem = ({ data }) => {
    return (
        <Box className="item-list">
            <Box className="single-item">
                <Box className="year">
                    <span>{data.label1}</span>
                </Box>
                <h4 className="university-name">
                    {data.label2}
                </h4>
                <p className="degree">{data.label3}</p>
            </Box>
        </Box>
    );
};

export default DoctorInfoItem;