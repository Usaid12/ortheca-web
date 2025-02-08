import React from 'react'
import Layout from '../../../components/layout/Layout'
import ChatList from './ChatList'
import ChatBox from './ChatBox'

const Chat = () => {
    return (
        <Layout style={{ padding: 0}}>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className='chatbox'>
                        <ChatList />
                        <ChatBox />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Chat