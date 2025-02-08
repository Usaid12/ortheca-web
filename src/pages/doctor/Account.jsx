import React from 'react'
import Layout from '../../components/layout/Layout'
import { CiImageOn } from "react-icons/ci";

const Account = () => {
    return (
        <Layout>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className='title-wrapper'>
                        <h4>Account</h4>
                    </div>
                </div>
                <div className='col-lg-12'>
                    <div className='widget-content'>
                        <form action="">
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <h6>Your Profile  Picture</h6>
                                    <label htmlFor="accountImage" className='accountImage'>
                                        <CiImageOn />
                                        <input type="file" hidden id='accountImage' />
                                    </label>
                                </div>
                                <div className='col-lg-6'>
                                    <label htmlFor="">Enter Name</label>
                                    <input type="text" placeholder='Enter Name' />
                                </div>
                                <div className='col-lg-6'>
                                    <label htmlFor="">Email</label>
                                    <input type="email" placeholder='Email' />
                                </div>
                                <div className='col-lg-6'>
                                    <label htmlFor="">Phone</label>
                                    <input type="tel" placeholder='Phone' />
                                </div>
                                <div className='col-lg-6'>
                                    <label htmlFor="">Password</label>
                                    <input type="password" placeholder='Password' />
                                </div>
                                <div className='col-lg-12'>
                                    <button type='button' className='theme-btn btn btn-primary ms-auto'>Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Account