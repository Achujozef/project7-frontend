import React from 'react'
import Leftnav from '../../components/User/LeftNav/Leftnav'
import DoctorProfile from '../../components/User/DoctorProfile/DoctorProfile'
import RightNotification from '../../components/User/RightNotification/RightNotification'
import { useParams } from 'react-router-dom';
function DoctorProfilepage() {
  const { id } = useParams();

  return (
    <div className='flex'>

        <Leftnav/>

<DoctorProfile if={id}/>
<RightNotification/>
    </div>
  )
}

export default DoctorProfilepage