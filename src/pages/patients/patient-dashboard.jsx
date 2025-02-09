import React, { useState } from "react";
import { PiUsersThree } from "react-icons/pi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LiaStickyNoteSolid } from "react-icons/lia";
import PatientLayout from "../../components/layout/Client";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const PatientDashboard = () => {
  const localizer = momentLocalizer(moment);

  const [allEvents, setAllEvents] = useState([
    {
      id: 0,
      title: "Meeting with Dr. Smith",
      start: new Date(2024, 1, 25, 10, 0), // Feb 25, 2024 at 10:00 AM
      end: new Date(2024, 1, 25, 11, 0), // Feb 25, 2024 at 11:00 AM
      patient: "John Doe",
    },
    {
      id: 1,
      title: "Dental Checkup: Sarah",
      start: new Date(2024, 1, 26, 14, 0), // Feb 26, 2024 at 2:00 PM
      end: new Date(2024, 1, 26, 15, 0), // Feb 26, 2024 at 3:00 PM
      patient: "Sarah Connor",
    },
    // Add more events as needed
  ]);

  return (
    <PatientLayout>
      <div
        className="row dashboard-cards-row"
        style={{
          height: "100vh",
          overflowY: "auto",
          paddingBottom: "180px",
        }}
      >
        <div className="col-lg-12">
          <div className="title-wrapper">
            <h4>Dashboard</h4>
            <span>Welcome Dr. Smith</span>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="widget-content">
            <div className="dashboard-cards bg-pink">
              <h3>Total Appointments</h3>
              <h5>200</h5>
              <PiUsersThree />
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="widget-content">
            <div className="dashboard-cards bg-blue">
              <h3>Prescriptions</h3>
              <h5>20</h5>
              <LiaStickyNoteSolid />
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="widget-content">
            <div className="dashboard-cards bg-blue">
              <h3>Notifications</h3>
              <h5>5</h5>
              <IoIosNotificationsOutline />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="title-wrapper">
              <h4>Calendar</h4>
              <p>
                Here are all our appointments scheduled by your patients list -
                you can also add tasks and events as you require by pressing on
                the 'Add' button
              </p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="widget-content table-responsive">
              <Calendar
                localizer={localizer}
                events={allEvents}
                startAccessor="start"
                endAccessor="end"
                selectable
                style={{ height: 500, opacity: 1 }}
                className="mt-4"
              />
            </div>
          </div>
        </div>
      </div>
    </PatientLayout>
  );
};

export default PatientDashboard;
