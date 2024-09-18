import React, { children } from 'react'
import { NavLink, Navigate, useLocation } from 'react-router-dom'
import { useContextAuth } from './Auth'

export const RequireAuth = () => {
    const location = useLocation()
    const auth = useContextAuth()
    if (!auth.use) {
        return <Navigate to='/login' state={{ path: location.pathname }}></Navigate>
    }
    return children
}
