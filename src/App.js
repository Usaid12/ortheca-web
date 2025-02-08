import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Dashboard from "./pages/doctor/Dashboard";
import Patients from "./pages/doctor/patients/Patients";
import AddPatients from "./pages/doctor/patients/AddPatients";
import PatientDetails from "./pages/doctor/patients/PatientDetails";
import PatientNotes from "./pages/doctor/patients/PatientNotes";
import Notifications from "./pages/doctor/Notifications";
import Calendars from "./pages/doctor/Calendars";
import Account from "./pages/doctor/Account";
import Notes from "./pages/doctor/notes/Notes";
import CreateNote from "./pages/doctor/notes/CreateNote";
import Forms from "./pages/doctor/Forms";
import Help from "./pages/doctor/Help";
import CreatePrescription from "./pages/doctor/prescription/CreatePrescription";
import PatientsPrescription from "./pages/doctor/patients/PatientsPrescription";
import Prescription from "./pages/doctor/prescription/Prescription";
import Chat from "./pages/doctor/chats/Chat";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>

          <Route path="/patients" element={<Patients />}></Route>
          <Route path="/patients/:id" element={<PatientDetails />} />
          <Route path="/patient/notes/:id" element={<PatientNotes />} />
          <Route
            path="/patients/add-patients"
            element={<AddPatients />}
          ></Route>
          <Route
            path="/patients/prescription/:id"
            element={<PatientsPrescription />}
          ></Route>
          <Route
            path="/prescription/create-prescription"
            element={<CreatePrescription />}
          ></Route>
          <Route path="/prescription" element={<Prescription />}></Route>

          <Route path="/calendar" element={<Calendars />}></Route>
          <Route path="/notifications" element={<Notifications />}></Route>
          <Route path="/account" element={<Account />}></Route>
          <Route path="/notes" element={<Notes />}></Route>
          <Route path="/notes/create-note" element={<CreateNote />}></Route>
          <Route path="/forms" element={<Forms />}></Route>
          <Route path="/chat" element={<Chat />}></Route>
          <Route path="/help" element={<Help />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
