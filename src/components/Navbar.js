import React from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'
import { useContextAuth } from './Auth'



export const Navbar = () => {
    const auth = useContextAuth()

    const linkactive = ({ isActive }) => {
        return {
            color: isActive && 'cyan'
        }

    }
    return (
        <div >
            <nav style={{
                backgroundColor: 'purple', padding: '5px',
                display: 'flex', justifyContent: 'center', alignItems: 'center',


            }} >
                <span style={{
                color: 'white', fontWeight: 'bolder',
                fontSize: '20px', marginRight: '30px',
            }}>Code Week
                </span>
                <ul style={{ display: 'flex'}}>


                    {
                        !auth.user ? <div><NavLink to='/' style={linkactive} >Home
                        </NavLink>
                            <NavLink to='/login' >Courses</NavLink>
                            <NavLink to='/login' >Tutorials</NavLink>
                            <NavLink to='/login' >LiveStreams</NavLink>
                            <NavLink to='/login' >UserDetails</NavLink>
                        </div>
                            :
                            <div><NavLink to='/' style={linkactive}>Home
                            </NavLink>
                                <NavLink style={linkactive} to='/courses' >Courses</NavLink>
                                <NavLink style={linkactive} to='/tutorials' >Tutorials</NavLink>
                                <NavLink style={linkactive} to='/livestreams' >LiveStreams</NavLink>
                                <NavLink style={linkactive} to='/detail' >UserDetails</NavLink>
                            </div>

                    }




                </ul>
            </nav>
        </div >
    )
}
