import React, { useState } from "react";
import PatientLayout from "../../components/layout/Client";

const PatientAppointment = () => {
  const doctors = ["Dr. Smith", "Dr. Johnson", "Dr. Williams", "Dr. Brown"];
  const consultations = [
    "General Checkup",
    "Dental",
    "Cardiology",
    "Dermatology",
  ];

  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedConsultation, setSelectedConsultation] = useState("");

  return (
    <PatientLayout>
      <div className="h-[100vh] overflow-y-auto pb-[180px]">
        <div className=" p-8 w-full max-w-3xl">
          <h2 className="text-[36px] font-bold mb-2">Book An Appointment</h2>
          <p className="text-[#959393] mb-6 text-[10px]">
            Create a patient record by entering their name and contact
            information. This will send an email with a pre-consultation form
            they must complete to book an appointment.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Consultation</label>
              <select
                className="border p-2 h-[60px] rounded w-full"
                value={selectedConsultation}
                onChange={(e) => setSelectedConsultation(e.target.value)}
              >
                <option value="">Select Consultation</option>
                {consultations.map((consultation, index) => (
                  <option key={index} value={consultation}>
                    {consultation}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Doctor Name</label>
              <select
                className="border p-2 h-[60px] rounded w-full"
                value={selectedDoctor}
                onChange={(e) => setSelectedDoctor(e.target.value)}
              >
                <option value="">Select Doctor</option>
                {doctors.map((doctor, index) => (
                  <option key={index} value={doctor}>
                    {doctor}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Patient Name</label>
              <input
                placeholder="Enter your name"
                type="text"
                className="border h-[60px] p-2 rounded w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email ID</label>
              <input
                placeholder="Enter your email"
                type="email"
                className="border h-[60px] p-2 rounded w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700">Phone Number</label>
              <input
                placeholder="Enter your phone number"
                type="text"
                className="border h-[60px] p-2 rounded w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700">Date</label>
              <input
                placeholder="Enter the date"
                type="date"
                className="border h-[60px] p-2 rounded w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700">Time</label>
              <input
                placeholder="Enter the time"
                type="time"
                className="border h-[60px] p-2 rounded w-full"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-gray-700">Note</label>
            <textarea
              placeholder="Enter a note"
              className="border h-[200px] p-2 rounded w-full"
            ></textarea>
          </div>
          <button className="bg-pink-500 text-white p-1  h-[60px] rounded w-[35%] mt-4 hover:bg-pink-600">
            Submit Appointment
          </button>
        </div>
      </div>
    </PatientLayout>
  );
};

export default PatientAppointment;
