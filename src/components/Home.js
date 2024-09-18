import React from 'react'
import img1 from '../assets/codeweek.png'
import w1 from '../assets/swift.png'
import w2 from '../assets/react.jpg'
import w3 from '../assets/figma.png'
import '../App.css'
export const Home = () => {

    return (
        <div style={{ position: 'relative' }}>
            <img src={require('../assets/codeweek.png')} alt='img1' ></img>
            <div className='absolute'>
                <h3 >Design and code <span style={{
                    color: 'cyan',
                    border: '2px solid white', margin: '10px', borderRadius: '5px'
                }}>Swift</span> app</h3>
                <p>
                    We force on industry leading platforms
                    so that u can be prepared for your next job. Then we teach all we can about them.
                </p>
                <div className='image'>
                    <a><img src={w1}></img></a>
                    <a><img src={w2}></img></a>
                    <a><img src={w3}></img></a>

                </div>
            </div>


        </div >
    )
}
