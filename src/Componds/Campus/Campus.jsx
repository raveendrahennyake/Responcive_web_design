import React from 'react'
import './Campus.css'
import gallary3 from '../../Source_Image/gallery-3.png'
import gallary2 from  '../../Source_Image/gallery-2.png'
import gallary1 from '../../Source_Image/gallery1.png'
import gallary4 from '../../Source_Image/gallery-4-.png'
const Campus = () => {
  return (
    <div className='campus'>
        <h2>Image Gallarys</h2>
        <h1>University of Pennsylvania</h1>
        <div className="gallary">

            <img src={gallary4}alt=''/>
            <img src={gallary1}alt=''/> 
            <img src={gallary2}alt=''/>
            <img src={gallary3}alt=''/>
        
        </div>
         <button className='btn-dark'> More Details</button>
         <div className='testomonical'>
          <h2>TESTIMONIALS</h2>
         <h1>What Student Says</h1>
         </div>
         


        
      
    </div>
  )
}

export default Campus
