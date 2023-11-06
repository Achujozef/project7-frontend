import React from 'react'
import Appointment from '../../components/Doctor/Appointment/Appointment'
import Leftnav from '../../components/Doctor/LeftNav/Leftnav'
export default function Appoinmentpage() {
  return (
    <>

<div className="flex">
      <Leftnav /> 

      <Appointment />
    </div>
    </>
  )
}
