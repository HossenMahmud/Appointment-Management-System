import { Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import DoctorInfoItem from './DoctorInfoItem';
import ServiceItem from './ServiceItem';


const DoctorAboutInfo = () => {

    const educations = [
        {
            id: 1,
            label2: 'American Dental Medical University',
            label3: 'BDS',
            label1: '1998 - 2003',
        },
        {
            id: 2,
            label2: 'American Dental Medical University',
            label3: 'MDS',
            label1: '2003 - 2005',
        }
    ]

    const experiences = [
        {
            id: 1,
            label2: 'Glowing Smiles Family Dental Clinic',
            label1: 'Dhaka',
            label3: '2010 - Present (5 Years)',
        },
        {
            id: 1,
            label2: 'Comfort Care Dental Clinic',
            label1: 'Dhaka',
            label3: '2007 - 2010 (3 Years)',
        },
    ]

    const awards = [
        {
            id: 1,
            label2: 'Certificate For International Volunteer Service',
            label1: 'March 2011',
            label3: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            id: 2,
            label2: 'The Dental Professional of The Year Award',
            label1: 'May 2008',
            label3: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
    ]


    return (
        <Box>
            <Grid container spacing={3} >
                <Grid item xs={12}>
                    <Box sx={{ mb: 3 }}>
                        <Typography variant='h6'>About Me</Typography>
                        <Typography variant='body' sx={{ fontSize: '14px' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box>
                        <Typography variant='h6'>Education</Typography>

                        {
                            educations.map(education => <DoctorInfoItem id={education.id} data={education}></DoctorInfoItem>)
                        }

                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box>
                        <Typography variant='h6'>Work & Experience</Typography>

                        {
                            experiences.map(experience => <DoctorInfoItem id={experience.id} data={experience}></DoctorInfoItem>)
                        }

                    </Box>
                </Grid>

                <Grid item xs={12}>
                    <Box>
                        <Typography variant='h6'>Awards</Typography>

                        {
                            awards.map(award => <DoctorInfoItem id={award.id} data={award}></DoctorInfoItem>)
                        }

                    </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Box>
                        <Typography variant='h6'>Services</Typography>
                        <Stack
                            direction="column"
                            justifyContent="start"
                            spacing={2}
                        >
                            <ServiceItem value={'Tooth cleaning'}></ServiceItem>
                            <ServiceItem value={'Root Canal Therapy'}></ServiceItem>
                            <ServiceItem value={'Composite Bonding'}></ServiceItem>
                            <ServiceItem value={'Fissure Sealants'}></ServiceItem>
                            <ServiceItem value={'Implants'}></ServiceItem>
                            <ServiceItem value={'Fissure Sealants'}></ServiceItem>
                        </Stack>
                    </Box>
                </Grid>


                <Grid item xs={12} sm={6}>
                    <Box>
                        <Typography variant='h6'>Specializations</Typography>
                        <Stack
                            direction="column"
                            justifyContent="start"
                            spacing={2}
                        >
                            <ServiceItem value={'Children Care'}></ServiceItem>
                            <ServiceItem value={'Dental Care'}></ServiceItem>
                            <ServiceItem value={'Oral and Maxillofacial Surgery'}></ServiceItem>
                            <ServiceItem value={'Orthodontist'}></ServiceItem>
                            <ServiceItem value={'Periodontist'}></ServiceItem>
                            <ServiceItem value={'Prosthosontics'}></ServiceItem>
                        </Stack>
                    </Box>
                </Grid>


            </Grid>
        </Box>
    );
};

export default DoctorAboutInfo;