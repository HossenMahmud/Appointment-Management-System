import styled from '@emotion/styled';
import { Container, Grid, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from "react-router-dom";
const SubHeaderBg = styled(Box)(({ theme }) => ({
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '20px 0px',
    backgroundColor: 'rgba(10, 24, 81, 0.55)',
    marginTop: '5px',

    '&::before': {
        content: '""',
        position: 'absolute',
        height: '100 %',
        width: '100 %',
        left: '0',
        top: '0',
        background: '#fff',
    }
}));

const SubNav2 = ({ link, linkName, linkTwo, linkNameTwo, to }) => {
    return (
        <Container maxWidth="lg">
            <SubHeaderBg>
                <Grid container>
                    <Grid item xs={12}>
                        <Box sx={{ textAlign: 'center' }}>

                            <Stack
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                                spacing={2}
                            >
                                <Link to={`${link}`} style={{ textDecoration: 'none' }}>
                                    <Typography sx={{ color: '#f1f1f1' }}>{linkName}</Typography>
                                </Link>
                                <ArrowRightAltIcon sx={{ color: '#f1f1f1' }} />
                                <Link to={`${linkTwo}`} style={{ textDecoration: 'none' }}>
                                    <Typography sx={{ color: '#f1f1f1' }}>{linkNameTwo}</Typography>
                                </Link>
                                <ArrowRightAltIcon sx={{ color: '#f1f1f1' }} />
                                <Typography sx={{ color: '#f1f1f1' }}>{to}</Typography>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </SubHeaderBg>
        </Container>
    );
};

export default SubNav2;