import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import { TableBox, TableHeading } from '../../../../styles/MetarialStyles';
import { TableBody } from '@mui/material';
import MyAppointmentTable from './MyAppointmentTable';


const MyAppointment = ({ apptData }) => {
    return (
        <TableBox>
            <TableContainer component={Paper} sx={{ borderRadius: 'none' }}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableHeading>
                            <TableCell>Doctor Name</TableCell>
                            <TableCell align="left">Appt Date</TableCell>
                            <TableCell align="left">Booking Date</TableCell>
                            <TableCell align="left">Status</TableCell>
                            <TableCell align="left">Action</TableCell>
                        </TableHeading>
                    </TableHead>
                    <TableBody>

                        {
                            apptData?.map(appdata => <MyAppointmentTable
                                key={appdata?.id}
                                apptData={appdata}
                            >
                            </MyAppointmentTable>)
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </TableBox>
    );
};
export default MyAppointment;