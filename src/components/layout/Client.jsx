import React, { useState } from "react";
import Header from "../layout/Header";
import ClientSidebar from "./client-sidebar";
import { FaBars } from "react-icons/fa";

const PatientLayout = ({ children, style }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Header type="client" />
      <main className="relative flex">
        <button
          className="md:hidden p-2 text-gray-600 fixed top-0 right-4 z-50 "
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <FaBars size={24} />
        </button>
        <div
          className={`client-sidebar-content fixed inset-y-0 left-0 w-64 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } md:relative md:translate-x-0 md:block bg-white shadow-lg p-4 transition-transform duration-300 ease-in-out z-40`}
        >
          <ClientSidebar />
        </div>
        <div className="main-content flex-1" style={style}>
          {children}
        </div>
      </main>
    </>
  );
};

export default PatientLayout;
