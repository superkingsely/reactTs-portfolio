import React from 'react'
import '../Header/Header.css'

const Header = () => {
  return (
    <header>
        <div className="header-content">
        <a href="logo"></a>
        <nav>
            <ul>
                <li><a href="home">home</a></li>
                <li><a href="about">about</a></li>
                <li><a href="contact">contact</a></li>
            </ul>
        </nav>
        </div>
    </header>
  )
}

export default Header