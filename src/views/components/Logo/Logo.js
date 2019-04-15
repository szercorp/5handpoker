import React from 'react'
import './Logo.css'

const Logo = () => (
    <div className="Logo-Wrapper">
        <img className="Logo" src={require('../../../styles/AppStyles/Spade-Logo.jpg')} alt="Spade-Logo" />
        <h1 className="Title">5handpoker</h1>
    </div>
)

export default Logo