import React from 'react'
import './Navi.css'
import logo from  '../../Source_Image/logo.png'

const Navi = () => {
  return (
    <div>
        <nav className='container'>
             <img src={logo} alt=''/>
             <ul>
                <li>Home</li>
                <li>Program</li>
                <li>About Us</li>
                <li>Campus</li>
                <li>Testimonials</li>
                <li> <button className='btn'>Contact us</button></li>

             </ul>


        </nav>
      
      
    </div>
  )
}

export default Navi
