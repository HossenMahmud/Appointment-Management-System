import { Box, Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { FormLayout, LayoutContiner, LogRegiButton, TableBox, TableHeading, TextFieldMake } from '../../../styles/MetarialStyles';
import Swal from 'sweetalert2';
import styled from '@emotion/styled';
import AdminUpdate from './AdminUpdate';

const AdminDisplayBox = styled(Box)(({ theme }) => ({
    border: '1px solid #f0f0f0',
    borderRadius: '4px',
    padding: '20px',
}));

export const DeleteBtn = styled(Button)(({ theme }) => ({
    backgroundColor: "red",
    borderColor: 'red',
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

const MakeAdmin = () => {
    const [admin, setAdmin] = useState([]);
    const [condition, setCondition] = useState(true);
    useEffect(() => {
        axios.get('http://localhost:5000/allAdmin').then((res) => {
            setAdmin(res.data);
        });
    }, [condition]);

    const handleDelete = (id) => {
        Swal.fire({
            icon: 'error',
            title: 'Are You Sure?',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            confirmButtonColor: 'Crimson',
            cancelButtonColor: 'LightSeaGreen'
        }).then((result) => {
            if (result.value) {
                axios.delete(`http://localhost:5000/AdminDelete/${id}`).then((response) => {
                    setAdmin(
                        admin.filter((val) => {
                            return val.id !== id;
                        })
                    );
                });
            }
        })
    };


    const [data, setData] = useState([]);
    const Data = { ...data, role: 'admin' }
    const handleFormSubmit = e => {
        if (data.length !== 0) {
            axios.post("http://localhost:5000/register", Data).then(res => {
                if (res.status === 200) {
                    // navigate("/login");
                    setCondition(!condition)
                    Swal.fire({
                        icon: 'success',
                        title: 'Ok',
                        text: 'SuccessFully Created Admin',
                        timer: 1500,
                        showCancelButton: false,
                        showConfirmButton: false,
                    })
                }
            });
        } else {
            Swal.fire({
                icon: 'warning',
                text: 'Please Provide Value',
                timer: 1500,
                showCancelButton: false,
                showConfirmButton: false,
            })

        }

        e.preventDefault();
    }


    return (
        <LayoutContiner>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <AdminDisplayBox>
                        <TableBox>
                            <Box sx={{ borderBottom: "1px solid #eaeaea", py: 1, backgroundColor: 'blue', textAlign: 'center' }}>
                                <Typography sx={{ ml: 2, color: '#f0f0f0' }}>Admin List</Typography>
                            </Box>
                            <TableContainer component={Paper} sx={{ borderRadius: 'none' }}>
                                <Table sx={{ maxWidth: 650, }} aria-label="simple table">
                                    <TableHead>
                                        <TableHeading>
                                            <TableCell align="center">Admin Name</TableCell>
                                            <TableCell align="center">Email</TableCell>
                                            <TableCell align="center">Action</TableCell>
                                        </TableHeading>
                                    </TableHead>
                                    <TableBody>
                                        {admin.map((ad) => (
                                            <TableRow
                                                key={ad.id}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell align="center">{ad.userName}</TableCell>
                                                <TableCell align="center">{ad.email}</TableCell>
                                                <TableCell align="center">
                                                    <AdminUpdate id={ad.id} condition={condition} setCondition={setCondition}></AdminUpdate>
                                                    <DeleteBtn sx={{ ml: { sm: 1 } }} onClick={() => handleDelete(ad.id)} >Delete</DeleteBtn>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </TableBox>
                    </AdminDisplayBox>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box>
                        <FormLayout>
                            <Box sx={{ py: 2, backgroundColor: 'blue', textAlign: 'center', borderRadius: '5px' }}>
                                <Typography sx={{ color: '#f0f0f0' }}>Create New Admin</Typography>
                            </Box>
                            <Box component="form" onSubmit={handleFormSubmit}>
                                <TextFieldMake
                                    size="small"
                                    type='text'
                                    name='userName'
                                    label='Admin Name'
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
                                    type='email'
                                    name='email'
                                    label='Email'
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
                                    type='password'
                                    name='password'
                                    label='Create Password'
                                    fullWidth
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            [e.target.name]: e.target.value,
                                        })
                                    }
                                ></TextFieldMake>
                                <LogRegiButton variant="contained" fullWidth type='submit'>Submit</LogRegiButton>
                            </Box>

                        </FormLayout>
                    </Box>
                </Grid>

            </Grid>
        </LayoutContiner >
    );
};

export default MakeAdmin;