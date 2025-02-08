import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoCalendarNumberOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { PiUserCirclePlus } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa6";
import { AiOutlineForm } from "react-icons/ai";
import { MdInfoOutline } from "react-icons/md";
import { LiaBriefcaseMedicalSolid } from "react-icons/lia";
import { IoChatbubblesOutline } from "react-icons/io5";


const Sidebar = () => {
    return (
        <>
            <ul>
                <li>
                    <NavLink to='/'><RxDashboard /> <span>Dashboard</span></NavLink>
                </li>
                <li>
                    <NavLink to="/patients"><PiUserCirclePlus /> <span>Patients</span></NavLink>
                </li>
                <li>
                    <NavLink to="/prescription"><LiaBriefcaseMedicalSolid /> <span>Prescription</span></NavLink>
                </li>
                <li>
                    <NavLink to="/calendar"><IoCalendarNumberOutline /> <span>Calendar</span></NavLink>
                </li>
                <li>
                    <NavLink to="/notifications"><MdOutlineNotificationsActive /> <span>Notifications</span></NavLink>
                </li>
                <li>
                    <NavLink to="/forms"><FaWpforms /> <span>Forms</span></NavLink>
                </li>
                <li>
                    <NavLink to="/notes"><AiOutlineForm /> <span>Notes</span></NavLink>
                </li>
                <li>
                    <NavLink to="/chat"><IoChatbubblesOutline /> <span>Chat</span></NavLink>
                </li>
                <li>
                    <NavLink to="/account"><FaRegUser /> <span>Account</span></NavLink>
                </li>
                <li>
                    <NavLink to="/help"><MdInfoOutline /> <span>Help</span></NavLink>
                </li>
            </ul>
        </>
    )
}

export default Sidebar