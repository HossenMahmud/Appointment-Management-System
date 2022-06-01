import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { Avatar, TableHead, Typography } from "@mui/material";
import Img from '../../../assets/images/profile.jpg';
import './Admin.css'


function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                ) : (
                    <KeyboardArrowLeft />
                )}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                ) : (
                    <KeyboardArrowRight />
                )}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}


function createData(doctorName, speciality, patientName, date, time, ammount) {
    return { doctorName, speciality, patientName, date, time, ammount };
}

const rows = [
    createData('Dr Rubby Prrrin', 'Urology', 'Rabin Malik', '22 Sept 2022', '11:00 AM - 11:15 AM', 50),
    createData('Dr Rubby Prrrin', 'Dental', 'Rabin Malik', '22 Sept 2022', '11:00 AM - 11:15 AM', 50),
    createData('Dr Rubby Prrrin', 'Cardiology', 'Rabin Malik', '22 Sept 2022', '11:00 AM - 11:15 AM', 50),
    createData('Dr Rubby Prrrin', 'Orthopaedics', 'Rabin Malik', '22 Sept 2022', '11:00 AM - 11:15 AM', 50),
    createData('Dr Rubby Prrrin', 'Orthopaedics', 'Rabin Malik', '22 Sept 2022', '11:00 AM - 11:15 AM', 50),
    createData('Dr Rubby Prrrin', 'Orthopaedics', 'Rabin Malik', '22 Sept 2022', '11:00 AM - 11:15 AM', 50),
    createData('Dr Rubby Prrrin', 'Orthopaedics', 'Rabin Malik', '22 Sept 2022', '11:00 AM - 11:15 AM', 50),
    createData('Dr Rubby Prrrin', 'Orthopaedics', 'Rabin Malik', '22 Sept 2022', '11:00 AM - 11:15 AM', 50),
    createData('Dr Rubby Prrrin', 'Orthopaedics', 'Rabin Malik', '22 Sept 2022', '11:00 AM - 11:15 AM', 50),
    createData('Dr Rubby Prrrin', 'Orthopaedics', 'Rabin Malik', '22 Sept 2022', '11:00 AM - 11:15 AM', 50),
    createData('Dr Rubby Prrrin', 'Orthopaedics', 'Rabin Malik', '22 Sept 2022', '11:00 AM - 11:15 AM', 50),
    createData('Dr Rubby Prrrin', 'Orthopaedics', 'Rabin Malik', '22 Sept 2022', '11:00 AM - 11:15 AM', 50),
    createData('Dr Rubby Prrrin', 'Orthopaedics', 'Rabin Malik', '22 Sept 2022', '11:00 AM - 11:15 AM', 50),
];

export default function AppointmentsList() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: "#ADE7F7",
            color: "#black",
            border: "none",
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
            border: "none",
            color: "gray",
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        "&:last-child td, &:last-child th": {
            border: 0,
        },
    }));


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <TableContainer component={Paper}>
            <Table
                sx={{
                    minWidth: 500,
                    background: "#fff",
                    color: "#3333",
                }}
                aria-label="custom pagination table"
            >
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="left">Doctor Name</StyledTableCell>
                        <StyledTableCell align="left">Speciality</StyledTableCell>
                        <StyledTableCell align="left">Patient Name</StyledTableCell>
                        <StyledTableCell align="left">Appoint Time</StyledTableCell>
                        <StyledTableCell align="left">Ammount</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(rowsPerPage > 0
                        ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : rows
                    ).map((row, index) => (
                        <StyledTableRow key={index}>
                            <StyledTableCell align="left" sx={{ display: 'flex', alignItems: 'center' }}>
                                <Avatar alt="Remy Sharp" src={Img} sx={{ mr: 1 }} />
                                {row.doctorName}
                            </StyledTableCell>
                            <StyledTableCell align="left">{row.speciality}</StyledTableCell>
                            <StyledTableCell align="left" sx={{ display: 'flex', alignItems: 'center' }}>
                                <Avatar alt="Remy Sharp" src={Img} sx={{ mr: 1 }} />
                                {row.patientName}
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                {row.date}
                                <Typography variant='h6' sx={{ fontSize: '12px', fontWeight: 'normal', color: '#00D0F1' }}>  {row.time}</Typography>
                            </StyledTableCell>
                            <StyledTableCell align="left">{row.ammount}</StyledTableCell>

                        </StyledTableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            sx={{ border: "none", color: "#black", background: "#ADE7F7" }}
                            rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                            colSpan={12}
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                                inputProps: {
                                    "aria-label": "rows per page",
                                },
                                native: true,
                            }}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
}
