import React from 'react'
import './footer.css'
import contact from '../../Source_Image/contact.png'
import email from '../../Source_Image/email.png'
import location from '../../Source_Image/locations.png'


const footer = () => {
  return (
      <div className='footers'>
        <div className='contact'>
           <h2>Contact Us</h2>
           <h1>Get in Touch</h1>
        </div>
        <div className="footer">
          <div className="left-side">
            <h2>Send a Message</h2>
            <p>As America’s first university, Penn has a history that dates back to 1740 and shares many ties with the colonial city of Philadelphia and the birth of our nation.</p>
            <ul>
              <li><img src={contact} alt="" /> +1 123-456-8890</li>
              <li><img src={email} alt="" /> Pennsylvania@Usa</li>
              <li><img src={location} alt="" />201 Old Main, University Park, PA 16802, USA</li>
            
            </ul>
           </div>


          <div className="left-side">
            <form>
              <label>Your name</label>
              <input type='text' placeholder='your name'/>
               <label>Phone Number</label>
              <input type='text' placeholder='Phone Number'/>
               <label>Your email</label>
              <input type='text' placeholder='your email'/>
              <label>Write your message</label>
              <textarea name='message' rows="10" cols="30" placeholder="Enter your message" ></textarea>
               <button className='btn-dark'> Submit</button>
             
             
             

            </form>
          

          </div>

        </div>
        







      </div>
      
    
  )
}

export default footer
