import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Layout from '../../components/layout/Layout'
import { CiSearch } from "react-icons/ci";
import { FaFilePdf } from "react-icons/fa";

const Forms = () => {

    const [showModal, setShowModal] = useState(false);

    const closeModal = () => {
        setShowModal(false);
    };
    return (
        <Layout>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className='title-wrapper'>
                        <h4>Forms</h4>
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
                                <button className='theme-btn btn btn-primary' onClick={() => setShowModal(true)}>Upload Forms</button>
                            </div>
                            <table className='table patients-table'>
                                <thead>
                                    <tr>
                                        <th>File</th>
                                        <th>Status</th>
                                        <th>Date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className='file-icon'>
                                                <FaFilePdf /> <span>Fever Form</span>
                                            </div>
                                        </td>
                                        <td><span className='badge bg-success'>Active</span></td>
                                        <td>3-29-2024</td>
                                        <td>
                                            <div className='d-flex gap-2 align-items-center'>
                                                <NavLink to='/' className='btn btn-primary bg-blue btn-sm'>View</NavLink>
                                                <NavLink to='/' className='btn btn-danger  btn-sm'>Delete</NavLink>
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
                {showModal && (<>
                    <Modal closeModal={closeModal} />
                    <div className='modal-dropshadow'></div>
                </>
                )}
            </div>
        </Layout>
    )
}


const Modal = ({ closeModal }) => {
    const handleCloseModal = () => {
        closeModal();
    }

    return (
        <div className='event-delete-modal text-center'>
            <h4>Upload Form </h4>
            <label htmlFor="uploadForm" className='uploadFormLabel'>
                <div>
                    <FaFilePdf /> Upload File
                    <input type="file" hidden id='uploadForm' />
                </div>
                {/* <div className='file-previewr'>
                    <img src="https://img.freepik.com/free-vector/illustration-application-form_53876-18193.jpg" alt="form" />
                </div> */}
            </label>
            <div className='w-100'>
                <button className='theme-btn mt-3 btn btn-primary w-100'>Save</button>
                <button className='theme-btn mt-3 btn btn-danger w-100' onClick={handleCloseModal}>Close</button>
            </div>
        </div>
    );
};

export default Forms
