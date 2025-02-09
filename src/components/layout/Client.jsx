import React from "react";
import Header from "../layout/Header";
import ClientSidebar from "./client-sidebar";

const PatientLayout = ({ children, style }) => {
  return (
    <>
      <Header type="client" />
      <main>
        <div className="client-sidebar-content">
          <ClientSidebar />
        </div>
        <div className="main-content" style={style}>
          {children}
        </div>
      </main>
    </>
  );
};

export default PatientLayout;
