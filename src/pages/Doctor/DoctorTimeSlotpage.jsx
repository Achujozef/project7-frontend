
import React from 'react'
import Leftnav from '../../components/Doctor/LeftNav/Leftnav'
import DoctorTimeSlot from '../../components/Doctor/DoctorTimeSlots/DoctorTimeSlots'
export default function Appoinmentpage() {
  return (
    <>

<div className="flex">
      <Leftnav /> 

      <DoctorTimeSlot /> 
    </div>
    </>
  )
}
