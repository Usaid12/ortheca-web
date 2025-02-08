import React from 'react'
import Layout from '../../components/layout/Layout'
import { Accordion } from 'react-bootstrap';
import { MdHelpOutline } from "react-icons/md";


const Help = () => {
    return (
        <Layout>
            <div className='row'>
                <div className='col-lg-8'>
                    <div className='title-wrapper'>
                        <h4>Help</h4>
                        <p>Feel free to consult our documentation below if you need any additional help in setting up the platform or require additional information regarding some of the features and/or workflows</p>
                    </div>
                </div>
                <div className='col-lg-8'>
                    <div className='widget-content'>
                        <div className='faqs-box'>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header><MdHelpOutline /> Question - Documentation</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header><MdHelpOutline /> Question - Documentation</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header><MdHelpOutline /> Question - Documentation</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header><MdHelpOutline /> Question - Documentation</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='widget-content'>
                        <div className='disclamer-box'>
                            <h5>Get in touch</h5>
                            <p>if you need any additional help please contact us using the button below</p>
                            <p>Out available hours are Mon-Fri 6AM-5PM</p>
                        </div>
                    </div>
                </div>
            </div >
        </Layout >
    )
}

export default Help