import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

function UserProtectedRoutes() {
  const authState = useSelector(state => state.userauth)
  return (
    authState.userauth ? <Outlet/> : <Navigate to='/userlogin'/>

  )
}

export default UserProtectedRoutes