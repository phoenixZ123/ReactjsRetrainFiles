import React from 'react'
import { useState } from 'react'
import { useContextAuth } from './Auth'
import { useLocation, useNavigate } from 'react-router-dom'

export const Login = () => {
    const [user, setUser] = useState("")
    const auth = useContextAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const redirectPath = location.state?.path || '/';

    const handleLogin = () => {
        auth.Login(user)
        navigate(redirectPath, { replace: true })
    }

    return (
        <div>Login Here
            <form onSubmit={e => e.preventDefault()}>
                Username:<input type='text' placeholder='Enter your username'
                    onChange={(e) => setUser(e.target.value)} name='user'></input>
                Email: <input type='email' placeholder='Enter your email'
                    onChange={(e) => setUser(e.target.value)} name='email'></input>
                Password:<input type='password' placeholder='Enter your password'
                    onChange={(e) => setUser(e.target.value)}></input>
                <button onClick={handleLogin}>Login</button>
            </form>

        </div>
    )
}
