import React from 'react'
import { useState } from 'react'
import './Footer.css'
import contact from '../../Source_Image/contact.png'
import email from '../../Source_Image/email.png'
import location from '../../Source_Image/location.png'

const Footer = () => {
    const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "605b533f-9f31-43e8-bef9-6e3744049250");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
    
  return (
    <div>
         <div className='footers'>
        <div className='contact'>
           <h2>Contact Us</h2>
           <h1>Get in Touch</h1>
        </div>
        <div className="footer">
          <div className="left-side">
            <h2>Send a Message</h2>
            <p>As America’s first university, Penn has a that dates back to 1740 and shares many ties with the colonial city of Philadelphia and the birth of our nation.</p>
            <ul>
              <li><img src={contact} alt="" /> +1 123-456-8890</li>
              <li><img src={email} alt="" /> Pennsylvania@Usa</li>
              <li><img src={location} alt="" />201 Old Main, University Park, PA 16802, USA</li>
            
            </ul>
           </div>


          <div className="left-side">
            <form onSubmit={onSubmit}>
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
            <span>{result}</span>
          

          </div>
        

        </div>
        







      </div>
      
    
  )
      
    </div>
  )
}

export default Footer
