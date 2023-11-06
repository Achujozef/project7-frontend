import React from 'react'
import Leftnav from '../../components/User/LeftNav/Leftnav'
import TopNav from '../../components/User/TopNav/TopNav'
import RightNotification from '../../components/User/RightNotification/RightNotification'

import Feeds from '../../components/User/Feeds/Feeds'
function UserHomepage() {
  return (
    <div className='flex'>

        <Leftnav/>

<Feeds/>
<RightNotification/>
    </div>
  )
}

export default UserHomepage