import React from 'react'
import Layout from '../../../components/layout/Layout'
import { NavLink } from 'react-router-dom'
import { CiSearch } from 'react-icons/ci'

const Patients = () => {
    return (
        <Layout >
            <div className='row min-w-fit min-h-fit'>
                <div className='col-lg-12'>
                    <div className='title-wrapper'>
                        <h4>Patients</h4>
                    </div>
                </div>
                <div className='col-lg-8'>
                    <div className='widget-content'>
                        <div className='patients-table-box overflow-x-auto'>
                            <div className='mb-3 d-flex align-items-center justify-content-end gap-3'>
                                <div className='filter-search'>
                                    <input type="text" placeholder='Search...' />
                                    <CiSearch />
                                </div>
                                <NavLink to='/patients/add-patients' className='theme-btn btn btn-primary ms-auto truncate'>Add Patient</NavLink>
                            </div>
                            <table className='table patients-table '>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Status</th>
                                        <th>Date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div>
                                                <img src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1711756800&semt=ais" alt="" />
                                                <span>John</span>
                                            </div>
                                        </td>
                                        <td><span className='badge bg-success'>Active</span></td>
                                        <td>3-29-2024</td>
                                        <td><NavLink to='/patients/5' className='btn btn-primary bg-blue btn-sm'>View</NavLink></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div>
                                                <img src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1711756800&semt=ais" alt="" />
                                                <span>John</span>
                                            </div>
                                        </td>
                                        <td><span className='badge bg-success'>Active</span></td>
                                        <td>3-29-2024</td>
                                        <td><NavLink to='/patients/5' className='btn btn-primary bg-blue btn-sm'>View</NavLink></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div>
                                                <img src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1711756800&semt=ais" alt="" />
                                                <span>John</span>
                                            </div>
                                        </td>
                                        <td><span className='badge bg-success'>Active</span></td>
                                        <td>3-29-2024</td>
                                        <td><NavLink to='/patients/5' className='btn btn-primary bg-blue btn-sm'>View</NavLink></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div>
                                                <img src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1711756800&semt=ais" alt="" />
                                                <span>John</span>
                                            </div>
                                        </td>
                                        <td><span className='badge bg-success'>Active</span></td>
                                        <td>3-29-2024</td>
                                        <td><NavLink to='/patients/5' className='btn btn-primary bg-blue btn-sm'>View</NavLink></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='widget-content'>
                        <div className='disclamer-box'>
                            <h5>Disclaimer</h5>
                            <p>Create patient record by entering their name and contact information</p>
                            <p>This will send an email with a pre-consultation form they must complete to book an appointment on the calendar</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Patients