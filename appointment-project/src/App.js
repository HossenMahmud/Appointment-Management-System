import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from '@mui/material';
import { Layout } from './Components/layout/Layout'
import { theme } from './theme/index';
import Login from './Pages/LoginRegistration/Login'
import PatientRegister from './Pages/LoginRegistration/PatientRegister';
import DoctorRegister from './Pages/LoginRegistration/DoctorRegister';
import AdminHome from './Pages/Admin/AdminHome';
import AllAppointments from './Pages/Admin/AllAppointments';
import Doctors from './Pages/Admin/Doctors';
import Patients from './Pages/Admin/Patients';
import DoctorHome from './Pages/Doctor/DoctorHome';
import MyPatients from './Pages/Doctor/MyPatients';
import Appointments from './Pages/Doctor/Appointments';
import DoctorProfileSetting from './Pages/Doctor/DoctorProfileSetting';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>

            {/* Admin all Routes */}
            <Route path="/" element={<AdminHome />}></Route>
            <Route path="/allappointments" element={<AllAppointments />}></Route>
            <Route path="/doctors" element={<Doctors />}></Route>
            <Route path="/patients" element={<Patients />}></Route>

            {/* Auth all Routes */}
            <Route path="/login" element={<Login />}></Route>
            <Route path="/patientRegister" element={<PatientRegister />}></Route>
            <Route path="/doctorRegister" element={<DoctorRegister />}></Route>


            {/* Doctor all Routes */}
            <Route path="/doctorhome" element={<DoctorHome />}></Route>
            <Route path="/mypatients" element={<MyPatients />}></Route>
            <Route path="/appointments" element={<Appointments />}></Route>
            <Route path="/doctorprofile" element={<DoctorProfileSetting />}></Route>

          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
