import React from 'react'
import './Header.css'
import logo from '../../../logo-air.png'

function Header() {

    return (
        <header className="header">
            <div className={'wrapper'}>
                <img src={logo}/>
                <h1>Airport</h1>
            </div>

        </header>
    )
}

export default Header