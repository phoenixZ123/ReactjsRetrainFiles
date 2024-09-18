import React from 'react'
import { useContextAuth } from './Auth'
import { useNavigate } from 'react-router-dom'
// import { FiMoreHorizontal } from "react-icons/fi";

export const Detail = () => {
    const auth = useContextAuth()
    const nav = useNavigate()

    const handleLogout = () => {
        auth.Logout()
        nav('/')
    }

    return (
        <div>Welcome
            <button onClick={handleLogout}>Log out</button></div>
    )
}
