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
import { Button, TableHead, Typography } from "@mui/material";
import { useState } from "react";
import '../Doctor.css';


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

export default function TodayPatientList({ apptData }) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: "#ccc",
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
                        <StyledTableCell align="left">Patient Id</StyledTableCell>
                        <StyledTableCell align="left">Patient Name</StyledTableCell>
                        <StyledTableCell align="left">Age</StyledTableCell>
                        <StyledTableCell align="left">Phone</StyledTableCell>
                        <StyledTableCell align="left">Appt Date</StyledTableCell>
                        <StyledTableCell align="left">Booking Date</StyledTableCell>
                        <StyledTableCell align="left">Action</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(rowsPerPage > 0
                        ? apptData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : apptData
                    ).map((data, index) => (
                        <StyledTableRow key={index}>
                            <StyledTableCell align="left">{data.patientId}</StyledTableCell>
                            <StyledTableCell align="left">{data.patientName}</StyledTableCell>
                            <StyledTableCell align="left">{data.patientAge}</StyledTableCell>
                            <StyledTableCell align="left">{data.patientPhone}</StyledTableCell>
                            <StyledTableCell align="left">
                                {data.apptDate}
                                <Typography>{data?.startTime} - {data?.endTime}</Typography>
                            </StyledTableCell>
                            <StyledTableCell align="left">{data.bookingDate}</StyledTableCell>
                            <Button color='info'>View</Button>
                        </StyledTableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            sx={{ border: "none", color: "black", background: "#ccc" }}
                            rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                            colSpan={12}
                            count={apptData.length}
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
