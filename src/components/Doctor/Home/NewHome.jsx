import React from 'react'
import Leftnav from '../LeftNav/Leftnav'
import ProfilePage from '../Profile/Profile'


export default function NewHome() {
  return (
    <div className='flex h-screen'>
      <Leftnav/>
      <ProfilePage/>

      </div>
  )
}
