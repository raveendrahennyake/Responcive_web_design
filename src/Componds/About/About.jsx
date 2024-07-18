import React from 'react'
import './About.css'
import about from '../../Source_Image/about.png'
import play from '../../Source_Image/play.png'

const About = () => {
  return (
    <div className='About'>
       
            <div className="left_site">
                <img className='aboutimage' src={about} alt=''/>
                 <img id='image5' className='play_image' src={play}alt=''/>
            </div>
        
            <div className="right_side">
                 <h2>ABOUT UNIVERSITY</h2>
                <h1>Penn’s History</h1>

                <p>Penn’s undergraduate students have the opportunity to pursue 90 majors across four schools. They also often engage across disciplines, forging new paths in research and scholarship.</p>

                 <p>Penn is the largest university with a program that enables eligible undergraduates to receive grant-based financial aid packages for eight semesters. The program applies to traditional, dependent students in the four undergraduate schools, who are pursuing their first baccalaureate degree.</p>
                 





            </div>
        </div>     


      
   
  )
}

export default About
