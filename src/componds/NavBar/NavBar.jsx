import React from 'react'
import './NavBar.css';
import logo from '../../Source_Image/logo.png';



const NavBar = () => {
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

             </ul>


        </nav>
        
       
       
        
      
    </div>
  )
}

export default NavBar
