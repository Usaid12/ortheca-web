import React, { useState } from 'react'
import Layout from '../../../components/layout/Layout'
import { NavLink } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import Modal from 'react-bootstrap/Modal';

const PatientsPrescription = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Layout>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className='title-wrapper'>
                        <h4>Prescription</h4>
                    </div>
                </div>
                <div className='col-lg-8'>
                    <div className='widget-content'>
                        <div className='patients-table-box'>
                            <div className='mb-3 d-flex align-items-center justify-content-end gap-3 '>
                                <div className='filter-search'>
                                    <input type="text" placeholder='Search...' />
                                    <CiSearch />
                                </div>
                                <NavLink to='/prescription/create-prescription' className='theme-btn btn btn-primary'>Create Prescription</NavLink>
                            </div>
                            <table className='table patients-table'>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div>
                                               John
                                            </div>
                                        </td>
                                        <td>3-29-2024</td>
                                        <td><span className='badge bg-success'>Active</span></td>
                                        <td>
                                            <div className='d-flex gap-2 align-items-center'>
                                                <button className='btn btn-primary bg-blue btn-sm' onClick={handleShow}>View</button>
                                                <button className='btn btn-danger  btn-sm'>Delete</button>
                                            </div>
                                        </td>
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
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Prescription</Modal.Title>
                </Modal.Header>
                <Modal.Body className='p-0'>
                    <div className='d-flex align-items-center gap-3 border-bottom p-3'>
                        <div>
                            <h6>Disease</h6>
                            Fever
                        </div>
                    </div>
                    <div className='p-3'>
                        <h6>Prescription</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aliquid, eos inventore iure accusantium blanditiis provident, delectus suscipit nesciunt, nostrum ut praesentium ratione perspiciatis modi ullam iusto. Velit, enim impedit.</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-danger  btn-sm' onClick={handleClose}>Close</button>
                </Modal.Footer>
            </Modal>
        </Layout>
    )
}

export default PatientsPrescription