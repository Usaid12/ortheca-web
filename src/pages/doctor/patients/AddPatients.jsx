import React from 'react'
import Layout from '../../../components/layout/Layout'

const AddPatients = () => {
    return (
        <Layout>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className='title-wrapper'>
                        <h4>Add Patient</h4>
                    </div>
                </div>
                <div className='col-lg-12'>
                    <div className='widget-content'>
                        <form action="">
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <label htmlFor="">Enter patient name</label>
                                    <input type="text" placeholder='Enter patient name' />
                                </div>
                                <div className='col-lg-6'>
                                    <label htmlFor="">Select Date</label>
                                    <input type="date" placeholder='Select Date' />
                                </div>
                                <div className='col-lg-6'>
                                    <label htmlFor="">Email</label>
                                    <input type="email" placeholder='Email' />
                                </div>
                                <div className='col-lg-6'>
                                    <label htmlFor="">Phone</label>
                                    <input type="tel" placeholder='Phone' />
                                </div>
                                <p>Enter patient information to set up their profile and automatically send out the pre-consultation. If there's not additional fields complete - make sure that there's an email on file and the remaining questions will be added to the questionnaire sent to complete their profile.</p>
                                <div className='col-lg-12'>
                                    <button type='button' className='theme-btn btn btn-primary ms-auto'>Add Patient</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AddPatients