import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from '@mui/material';
import { Layout } from './Components/layout/Layout'
import { theme } from './theme/index';
import Login from './Pages/LoginRegistration/Login'
import PatientRegister from './Pages/LoginRegistration/PatientRegister';
import DoctorRegister from './Pages/LoginRegistration/DoctorRegister';
import AllAppointments from './Pages/Dashboard/Admin/AllAppointments';
import Doctors from './Pages/Dashboard/Admin/Doctors';
import Patients from './Pages/Dashboard/Admin/Patients';
import MyPatients from './Pages/Dashboard/Doctor/MyPatients';
import Appointments from './Pages/Dashboard/Doctor/Appointments';
import DoctorProfileSetting from './Pages/Dashboard/Doctor/DoctorProfileSetting';
import PatientProfileSetting from './Pages/Dashboard/Patient/PatientProfileSetting';
import AuthProvider from './Context/AuthProvider';
import HomePage from './Pages/Home/HomePage';
import AllDoctors from '../src/Pages/AllDoctors/AllDoctors'
import DoctorDetails from '../src/Pages/AllDoctors/DoctorDetails'
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AdminRoute from './AdminRoute/AdminRoute';
import DashboardHome from './Pages/Dashboard/DashboardHome';


function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AuthProvider>

          <Routes>

            {/* Home page all Routes */}
            <Route path="/" element={<HomePage />}></Route>
            <Route path="alldoctors" element={<AllDoctors />}></Route>
            <Route path="doctordetails" element={<DoctorDetails />}></Route>

            {/* Auth all Routes */}
            <Route path="login" element={<Login />}></Route>
            <Route path="patientRegister" element={<PatientRegister />}></Route>
            <Route path="doctorRegister" element={<DoctorRegister />}></Route>


            {/* Admin all Routes */}
            <Route path="/Dashboard" element={<PrivateRoute><Layout /> </PrivateRoute>}>

              <Route index element={<DashboardHome />}></Route>

              {/* Admin all Routes */}
              <Route path="allappointments" element={<AdminRoute><AllAppointments /></AdminRoute>}></Route>
              <Route path="doctors" element={<AdminRoute><Doctors /></AdminRoute>}></Route>
              <Route path="patients" element={<AdminRoute><Patients /></AdminRoute>}></Route>

              {/* Doctor all Routes */}
              <Route path="mypatients" element={<MyPatients />}></Route>
              <Route path="appointments" element={<Appointments />}></Route>
              <Route path="doctorprofile" element={<DoctorProfileSetting />}></Route>

              {/* Patient all Routes */}
              <Route path="patientprofile" element={<PatientProfileSetting />}></Route>

            </Route>

          </Routes>

        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
