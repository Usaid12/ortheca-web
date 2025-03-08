import React from 'react'
import ChatList from './ChatList'
import ChatBox from './ChatBox'
import PatientLayout from '../../../components/layout/Client'

const PatientChat = () => {
    return (
        <PatientLayout style={{ padding: 0 }}>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className='client-chatbox'>
                        <ChatList />
                        <ChatBox />
                    </div>
                </div>
            </div>
        </PatientLayout>
    )
}

export default PatientChat