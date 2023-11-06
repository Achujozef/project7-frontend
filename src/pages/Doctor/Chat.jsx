import React from 'react'
import Leftnav from '../../components/Doctor/LeftNav/Leftnav'
import MessageListComponent from '../../components/Doctor/Messages/Chat'

function Chat() {
  return (
    <div className='flex'>
        <Leftnav/>
        <MessageListComponent/>
    </div>
  )
}

export default Chat