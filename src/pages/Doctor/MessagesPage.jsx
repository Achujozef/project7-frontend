import React from 'react'
import Leftnav from '../../components/Doctor/LeftNav/Leftnav'

import ChatComponent from '../../components/Doctor/Messages/Messages'
function MessagesPage() {
  return (
    <div className='flex'>
        <Leftnav/>
        <ChatComponent/>
    </div>
  )
}

export default MessagesPage