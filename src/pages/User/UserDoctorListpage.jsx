import React from 'react'
import Leftnav from '../../components/User/LeftNav/Leftnav'
import DoctorsList from '../../components/User/DoctorsList/DoctorsList'
import RightNotification from '../../components/User/RightNotification/RightNotification'

function UserDoctorListpage() {
  return (
    <div className='flex'>

        <Leftnav/>

<DoctorsList/>
<RightNotification/>
    </div>
  )
}

export default UserDoctorListpage