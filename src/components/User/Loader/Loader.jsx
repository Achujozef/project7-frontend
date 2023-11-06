import React from 'react'
import Lottie from 'lottie-react'
import mylottie from '../../images/lottieAnimation/loti_loading.json'
function Loader() {
  return (
    <div className='w-full align-middle p-4'>
        <Lottie  animationData={mylottie} loop={true} />
    </div>
  )
}

export default Loader