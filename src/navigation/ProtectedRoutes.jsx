import React from 'react'
import { useDispatch } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {

    const [localAuthData, setLocalAuthData] = React.useState(localStorage.getItem('localAuthData'))

    return (
        localAuthData ? <Navigate to="/" /> : <Outlet />
    )
}

export default ProtectedRoutes