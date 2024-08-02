import React from 'react'
import Resume from '../component/Resume'

const Header = () => {
  return (
    <div className="headersection">
        <div className="left">
            <div className="title">
                <h2>HI JOSEPH</h2>
            </div>
        </div>
        <div className="center">
            <ul>
                <li><a harf="#home" >HOME</a></li>
                <li><a harf="#projects">PROJECT</a></li>
                <li><a harf="#home" >ABOUT</a></li>
                <li><a harf="#home" >CONTACT</a></li>
            </ul>
        </div>
        <div className="search">
            <input type='text' placeholder='search..'/>
        </div>
        <div className="right">
            <div className="signin">
                Signin / Signup
            </div>
            <div className="cart">
              <Resume />
              
            </div>
        </div>
    </div>
  )
}

export default Header
