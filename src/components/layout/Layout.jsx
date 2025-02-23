import React, { useState } from "react";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import { FaBars } from "react-icons/fa"
const Layout = ({ children, style }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <>
      <Header type="doctor" />
      <main className="relative flex ">
        <button
          className="md:hidden p-2 absolute text-gray-600 top-[-40px] right-0 z-50
 "
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <FaBars size={24} />
        </button>
        <div
          className={`sidebar-content fixed inset-y-0 left-0 w-64 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } md:relative md:translate-x-0 md:block bg-white shadow-lg p-4 transition-transform duration-300 ease-in-out z-40`}
        >
          <Sidebar />
        </div>
        <div className="main-content flex-1" style={style}>
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;
