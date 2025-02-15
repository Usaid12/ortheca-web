import React from 'react'
import { MdOutlineNotificationsActive } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import PatientLayout from '../../components/layout/Client';

const PatientNotifications = () => {
    return (
        <PatientLayout>
            <div className='row '>
                <div className='col-lg-12'>
                    <div className='title-wrapper'>
                        <h4 className='text-red-400'>Notifications</h4>
                        <p>Here all of your notifications - highlighted are the ones that have not been read</p>
                    </div>
                </div>
                <div className='col-lg-12'>
                    <div className='widget-content'>
                        <div className='notification-box'>
                            <MdOutlineNotificationsActive />
                            <h6>Paula Dunsley has completed the form 12B</h6>
                        </div>
                        <div className='notification-box'>
                            <FaCircleUser />
                            <h6>Paula Dunsley has completed the form 12B</h6>
                        </div>
                        <div className='notification-box'>
                            <FaCircleUser />
                            <h6>Paula Dunsley has completed the form 12B</h6>
                        </div>
                    </div>
                </div>
            </div>
        </PatientLayout>
    )
}

export default PatientNotifications