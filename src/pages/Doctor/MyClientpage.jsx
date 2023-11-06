import React from 'react'
import Appointment from '../../components/Doctor/MyClient/MyClient'
import Leftnav from '../../components/Doctor/LeftNav/Leftnav'

export default function MyClientpage() {
  return (
    <>

<div className="flex">
      <Leftnav /> {/* Render the Leftnav component */}

      <Appointment /> {/* Render the Appointment component */}
    </div>
    </>
  )
}
