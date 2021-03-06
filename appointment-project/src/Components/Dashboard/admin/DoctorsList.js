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
import { Avatar, Button, TableHead } from "@mui/material";
import './Admin.css'
import { useState } from "react";
import { Link } from "react-router-dom";
import Axios from 'axios'

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


export default function DoctorsList({ doctors, condition, setCondition }) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: "#ADE7F7",
            color: "black",
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

    const handleActive = (id, e) => {
        const newData = {
            status: 'Active',
        }
        Axios.put(`https://doctor-appointment-server.rpi.gov.bd/doctorUpdate/${id}`, newData)
            .then((res) => {
                if (res.status === 200) {
                    setCondition(!condition);
                }
            });
        e.preventDefault();
    };
    const handleDeactive = (id, e) => {
        const newData = {
            status: 'Deactive',
        }
        Axios.put(`https://doctor-appointment-server.rpi.gov.bd/doctorUpdate/${id}`, newData)
            .then((res) => {
                if (res.status === 200) {
                    setCondition(!condition);
                }
            });
        e.preventDefault();
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
                        <StyledTableCell align="left">Phone Number</StyledTableCell>
                        <StyledTableCell align="left">View</StyledTableCell>
                        <StyledTableCell align="left">Status</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(rowsPerPage > 0
                        ? doctors.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : doctors
                    ).map((doctor) => (
                        <StyledTableRow key={doctor.id}>
                            <StyledTableCell align="left" sx={{ display: 'flex', alignItems: 'center' }}>
                                <Avatar alt="Remy Sharp" src={doctor.image} sx={{ mr: 1 }} />
                                {doctor.firstName}   {doctor.lastName}
                            </StyledTableCell>
                            <StyledTableCell align="left">{doctor.specialist}</StyledTableCell>
                            <StyledTableCell align="left">{doctor.phone} </StyledTableCell>
                            <StyledTableCell align="left">
                                <Link to={`doctorDetails/${doctor.id}`} style={{ textDecoration: 'none' }}>
                                    <Button variant="contained" size="small" color="info">Details</Button>
                                </Link>
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                {
                                    doctor.status === 'Active' && < Button onClick={() => handleDeactive(`${doctor.id}`)} variant="contained" size="small" color="success">Active</Button>
                                }
                                {
                                    doctor.status === 'Deactive' && < Button onClick={() => handleActive(`${doctor.id}`)} variant="contained" size="small" color="warning">Deactive</Button>
                                }
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            sx={{ border: "none", color: "black", background: "#ADE7F7" }}
                            rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                            colSpan={12}
                            count={doctors.length}
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
        </TableContainer >
    );
}
