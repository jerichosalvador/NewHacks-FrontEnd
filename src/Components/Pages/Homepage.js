import React from 'react'
import Header from './Template/Header'

const Homepage = () => {
    return (
        <div>
            <h1 className='Sitetitle'>Networking Mentorship Tool - NMT.js</h1>
            <p className='stdescription'>Finding mentorship or protegees in fields in interests has never been easier than with our Networking Mentorship Tool, NMT.js. </p>
            <button className='connectnow'>Connect now</button>
            <Header />
        </div>
    )
}

export default Homepage