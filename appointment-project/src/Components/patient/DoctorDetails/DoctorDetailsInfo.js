import styled from '@emotion/styled';
import { Box } from '@mui/system';
import React from 'react';
import DoctorAboutInfo from './DoctorAboutInfo';
import DoctorClinik from './DoctorClinik';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const DoctorDetailsInfo = () => {
    const BgLayoutBox = styled(Box)(({ theme }) => ({
        backgroundColor: "#ADE7F7",
        borderRadius: '4px',
        padding: '20px',
        marginTop: '40px',
        boxShadow: ' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        [theme.breakpoints.only('xs')]: {
            padding: '5px',
        },
    }));

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <BgLayoutBox>


            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Overview" value="1" sx={{ color: '#000', fontWeight: 'bold' }} />
                            <Tab label="Location" value="2" sx={{ color: '#000', fontWeight: 'bold' }} />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <DoctorAboutInfo></DoctorAboutInfo>
                    </TabPanel>
                    <TabPanel value="2">
                        <DoctorClinik></DoctorClinik>
                    </TabPanel>

                </TabContext>
            </Box >
        </BgLayoutBox >
    );
};

export default DoctorDetailsInfo;