import React from "react";
import { CiImageOn } from "react-icons/ci";
import PatientLayout from "../../components/layout/Client";

const PatientProfile = () => {
  return (
    <PatientLayout>
      <div className="row">
        <div className="col-lg-12">
          <div className="title-wrapper">
            <h4>Account</h4>
          </div>
        </div>
        <div className="col-lg-12 pb-[200px] h-[100vh] overflow-auto">
          <div className="widget-content">
            <form action="">
              <div className="row">
                <div className="col-lg-12">
                  <h6>Your Profile Picture</h6>
                  <label htmlFor="accountImage" className="accountImage">
                    <CiImageOn />
                    <input type="file" hidden id="accountImage" />
                  </label>
                </div>
                <div className="col-lg-6">
                  <label htmlFor="">Full Name</label>
                  <input type="text" placeholder="Enter Name" />
                </div>
                <div className="col-lg-6">
                  <label htmlFor="">Email</label>
                  <input type="email" placeholder="Email" />
                </div>
                <div className="col-lg-6">
                  <label htmlFor="">Username</label>
                  <input type="text" placeholder="Username" />
                </div>
                <div className="col-lg-6">
                  <label htmlFor="">Phone Number</label>
                  <input type="tel" placeholder="Phone Number" />
                </div>
                <div className="col-lg-6">
                  <label htmlFor="">Address</label>
                  <input type="text" placeholder="Address" />
                </div>
                <div className="col-lg-6">
                  <label htmlFor="">Age</label>
                  <input type="text" placeholder="Age" />
                </div>
                <div className="col-lg-6">
                  <label htmlFor="">Language</label>
                  <input type="text" placeholder="Select Language" />
                </div>
                <div className="col-lg-6">
                  <label htmlFor="">Health Care Number</label>
                  <input type="text" placeholder="Health Care Number" />
                </div>
                <div className="col-lg-12">
                  <button
                    type="button"
                    className="theme-btn btn btn-secondary ms-auto"
                  >
                    Update Profile
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </PatientLayout>
  );
};

export default PatientProfile;
