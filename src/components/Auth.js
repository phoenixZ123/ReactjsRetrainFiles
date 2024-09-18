import React, { useState, useContext } from 'react'
import { children } from 'react'
import { createContext } from 'react'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('')

    const Login = (user) => {
        setUser(user)

    }
    const Logout = () => {
        setUser(null)
    }
    return (

        <AuthContext.Provider value={{ user, Login, Logout }}>
            {children}
        </AuthContext.Provider>

    )
}


export const useContextAuth = () => {
    return useContext(AuthContext)
}
