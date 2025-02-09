import React from "react";
import { NavLink } from "react-router-dom";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineForm } from "react-icons/ai";
import { MdInfoOutline } from "react-icons/md";
import { LiaBriefcaseMedicalSolid } from "react-icons/lia";
import { IoChatbubblesOutline } from "react-icons/io5";

const ClientSidebar = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/patient/appointments">
            <RxDashboard /> <span>Appointments</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/patient/" end>
            <RxDashboard /> <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/patient/calender">
            <IoCalendarNumberOutline /> <span>Calender</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/patient/prescription">
            <LiaBriefcaseMedicalSolid /> <span>Prescription</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/patient/notification">
            <MdOutlineNotificationsActive /> <span>Notifications</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/patient/chat">
            <IoChatbubblesOutline /> <span>Chat</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/patient/news">
            <AiOutlineForm /> <span>News</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/patient/profile">
            <FaRegUser /> <span>Profile</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/patient/help">
            <MdInfoOutline /> <span>Help</span>
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default ClientSidebar;
