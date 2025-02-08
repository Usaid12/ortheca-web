import React from 'react'
import { RiSendPlaneFill } from "react-icons/ri";

const ChatBox = () => {
  return (
    <div className='chat-inbox'>
      <div className='chat-inbox-header'>
        <img src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1711756800&semt=ais" className='chat-image' alt="profile" />
        <div className='chat-detail'>
          <h6>Ahmed Raza</h6>
        </div>
      </div>
      <div className='chat-body'>
      </div>
      <div className='chat-footer'>
        <input type="text" placeholder='Type your message' />
        <div className='send-message'>
          <RiSendPlaneFill />
        </div>
      </div>
    </div>
  )
}

export default ChatBox