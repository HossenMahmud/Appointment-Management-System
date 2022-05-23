import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar, Box, Button, Typography } from '@mui/material';
import { TableBox, TableHeading } from '../../../styles/MetarialStyles';
import Img from '../../../assets/images/profile.jpg'
import VisibilityIcon from '@mui/icons-material/Visibility';
import PrintIcon from '@mui/icons-material/Print';
import styled from '@emotion/styled';
// import './doctorTable.css';

function createData(date, name, createdby, speciality) {
    return { date, name, createdby, speciality };
}

const rows = [
    createData('14 Nov 2022', 'Prescription1', 'Dr Ruby Perrin', 'Urology'),
    createData('14 Nov 2022', 'Prescription2', 'Dr Ruby Perrin', 'Urology'),
    createData('14 Nov 2022', 'Prescription3', 'Dr Ruby Perrin', 'Urology'),
    createData('14 Nov 2022', 'Prescription4', 'Dr Ruby Perrin', 'Urology'),
    createData('14 Nov 2022', 'Prescription5', 'Dr Ruby Perrin', 'Urology'),

];

const MyPrescription = () => {
    const ViewButton = styled(Button)(({ theme }) => ({
        backgroundColor: "#f0f0f0",
        borderColor: '#f0f0f0',
        textTransform: 'capitalize',
        color: '#26af48',
        padding: '0px 3px',
        '&:hover': {
            backgroundColor: '#52CBF3',
            borderColor: '#52CBF3',
            boxShadow: 'none',
            color: '#fff',
        }
    }));
    const PrintButton = styled(Button)(({ theme }) => ({
        backgroundColor: "#f0f0f0",
        borderColor: '#f0f0f0',
        textTransform: 'capitalize',
        color: '#1409e8',
        padding: '0px 3px',
        [theme.breakpoints.only('xs')]: {
            marginTop: '10px'
        },
        '&:hover': {
            backgroundColor: '#52CBF3',
            borderColor: '#52CBF3',
            boxShadow: 'none',
            color: '#fff',
        }
    }));
    return (
        <TableBox>
            {/* <Box sx={{ borderBottom: "1px solid #eaeaea", py: 1 }}>
                <Typography variant='h6' sx={{ ml: 2 }}>Doctors List</Typography>
            </Box> */}
            <TableContainer component={Paper} sx={{ borderRadius: 'none' }}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableHeading>
                            <TableCell>Date</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Created By</TableCell>
                            <TableCell align="left">Action</TableCell>
                        </TableHeading>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left">{row.date}</TableCell>
                                <TableCell align="left">{row.name}</TableCell>

                                <TableCell align="left" sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar alt="Remy Sharp" src={Img} sx={{ mr: 1 }} />
                                    <Box>
                                        <Typography variant='body' sx={{ display: 'block' }}>    {row.createdby}</Typography>
                                        <Typography variant='body' sx={{ color: '#20C0F3' }}>  {row.speciality}</Typography>
                                    </Box>
                                </TableCell>

                                <TableCell>
                                    <ViewButton sx={{ mr: 1, }} size='small' startIcon={<VisibilityIcon />}>
                                        View
                                    </ViewButton>
                                    <PrintButton size='small' startIcon={<PrintIcon />}>
                                        Print
                                    </PrintButton>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </TableBox>
    );
};
export default MyPrescription;