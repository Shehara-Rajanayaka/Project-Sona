import React from 'react'
import { useDispatch } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
  // const dispatch = useDispatch()
  // let auth = {'token':false,}

  //  React.useEffect(() => {
  //   localStorage.setItem("localAuthData", "test")
  //  },[])
    
  const [localAuthData, setLocalAuthData] = React.useState(localStorage.getItem('localAuthData'))


  return (
    // localAuthData?<Outlet/>:<Navigate to="/login"/>
  <Outlet/>
  )
}

export default PrivateRoutes