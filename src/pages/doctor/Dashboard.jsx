import React from 'react'
import Layout from '../../components/layout/Layout'
import { PiUsersThree } from "react-icons/pi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LiaStickyNoteSolid } from "react-icons/lia";

const Dashboard = () => {
    return (
        <Layout>
            <div className='row dashboard-cards-row'>
                <div className='col-lg-12'>
                    <div className='title-wrapper'>
                        <h4>Dashboard</h4>
                        <span>Welcome Dr. Smith</span>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='widget-content'>
                        <div className='dashboard-cards bg-pink'>
                            <h3>Total Patients</h3>
                            <h5>200</h5>
                            <PiUsersThree />
                        </div>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='widget-content'>
                        <div className='dashboard-cards bg-blue'>
                            <h3>Notes</h3>
                            <h5>20</h5>
                            <LiaStickyNoteSolid />
                        </div>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='widget-content'>
                        <div className='dashboard-cards bg-blue'>
                            <h3>Notifications</h3>
                            <h5>5</h5>
                            <IoIosNotificationsOutline />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard