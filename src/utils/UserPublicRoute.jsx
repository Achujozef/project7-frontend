import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

function UserPublicRoutes() {
  const authState = useSelector(state => state.userauth)
  return (
    !authState.userauth ? <Outlet/> : <Navigate to='/userhome'/>
  )
}

export default UserPublicRoutes