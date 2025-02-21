import React from "react";
import { MdOutlineNotificationsActive } from "react-icons/md";
import PatientLayout from "../../components/layout/Client";

const PatientNews = () => {
  return (
    <PatientLayout>
      <div className="row">
        <div className="col-lg-12">
          <div className="title-wrapper">
            <h4>News</h4>
            <p>
              Here we will send updates on all new features and development
              progress for Medi Connect
            </p>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="widget-content">
            <div className="notification-box">
              <MdOutlineNotificationsActive />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                }}
              >
                <h4>Update v1.0.1.2</h4>
                <p>Medi Connect is offering sale this get your appointment</p>
              </div>
            </div>
            <div className="notification-box">
              <MdOutlineNotificationsActive />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                }}
              >
                <h4>Update v1.0.1.2</h4>
                <p>Medi Connect is offering sale this get your appointment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PatientLayout>
  );
};

export default PatientNews;
