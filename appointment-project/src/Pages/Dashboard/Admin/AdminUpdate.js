import styled from '@emotion/styled';
import { Button, Grid, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { FormLayout, LogRegiButton, TextFieldMake } from '../../../styles/MetarialStyles';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    maxWidth: {
        xs: '300px',
        sm: '400px'
    },
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
    borderRadius: '2px',
};

export const UpdateBtn = styled(Button)(({ theme }) => ({
    backgroundColor: "green",
    borderColor: 'green',
    textTransform: 'capitalize',
    color: '#fff',
    padding: '0px 3px',
    '&:hover': {
        backgroundColor: '#52CBF3',
        borderColor: '#52CBF3',
        boxShadow: 'none',
        color: '#fff',
    }
}));

const AdminUpdate = ({ id, condition, setCondition }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [data, setData] = useState([])

    const [admin, setAdmin] = useState(null);
    useEffect(() => {
        fetch(`https://doctor-appointment-server.rpi.gov.bd/admin/${id}`)
            .then(res => res.json())
            .then(data => setAdmin(data[0]))
    }, [id]);

    const AdminUpdate = e => {
        axios.put(`https://doctor-appointment-server.rpi.gov.bd/AdminUpdate/${id}`, data)
            .then((res) => {
                if (res.status === 200) {
                    setCondition(!condition)
                    setOpen(false)
                    Swal.fire({
                        icon: 'success',
                        title: 'Ok',
                        text: 'SuccessFully Updated',
                        timer: 1500,
                        showCancelButton: false,
                        showConfirmButton: false,
                    })
                }
            });
        e.preventDefault();
    };

    return (
        <>
            <UpdateBtn onClick={handleOpen} sx={{ mb: { xs: 1, sm: 0 } }}>Update</UpdateBtn>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {
                    (admin !== null) && <Box sx={style}>
                        <Box id="modal-modal-description" sx={{ mt: 2 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Box sx={{ mt: 2 }}>
                                        <Box sx={{ textAlign: "center", py: 2, backgroundColor: 'blue', color: '#fff' }}>
                                            <Typography>Admin Update</Typography>
                                        </Box>

                                    </Box>
                                    <FormLayout component="form" onSubmit={AdminUpdate}>
                                        <Box>
                                            <TextFieldMake
                                                size="small"
                                                type='text'
                                                name='userName'
                                                label='Admin Name'
                                                fullWidth
                                                defaultValue={admin.userName}
                                                onChange={(e) =>
                                                    setData({
                                                        ...data,
                                                        [e.target.name]: e.target.value,
                                                    })
                                                }
                                            ></TextFieldMake>

                                            <TextFieldMake
                                                size="small"
                                                type='email'
                                                name='email'
                                                label='Email'
                                                defaultValue={admin.email}
                                                fullWidth
                                                onChange={(e) =>
                                                    setData({
                                                        ...data,
                                                        [e.target.name]: e.target.value,
                                                    })
                                                }
                                            ></TextFieldMake>

                                            <TextFieldMake
                                                size="small"
                                                type='text'
                                                name='password'
                                                label='Create Password'
                                                defaultValue={admin.password}
                                                fullWidth
                                                onChange={(e) =>
                                                    setData({
                                                        ...data,
                                                        [e.target.name]: e.target.value,
                                                    })
                                                }
                                            ></TextFieldMake>
                                            <LogRegiButton variant="contained" fullWidth type='submit'>Update</LogRegiButton>
                                        </Box>

                                    </FormLayout>
                                </Grid>
                            </Grid>

                        </Box>
                    </Box>
                }

            </Modal>
        </>
    )
};

export default AdminUpdate;