import React from 'react'
import './program.css'
import Image10 from '../../Source_Image/Image10.png'
import Image20 from '../../Source_Image/Image20.png'
import Image from '../../Source_Image/Image.png'
import capcation1 from '../../Source_Image/capcation1.png'
import caturen2 from '../../Source_Image/capturene2.png'
import capcation3 from '../../Source_Image/capcation3.png'



const program = () => {
  return (
    <div className='programs'>
        
            <div className='program'>
                <img id='image1' src={Image20} alt=''/>
                <div className='capcation'>
                     <img src={capcation1} alt=''/>
                      <p>Graducations</p>

                </div>
            
                
            </div>
            <div className='program'>
                <img src={Image} alt=''/>
                <div className='capcation'>
                     <img src={caturen2} alt=''/>
                     <p>Master Degree</p>

                </div>
                 

            </div>
            <div className='program'>
                 <img src={Image10} alt=''/>
                 <div className='capcation'>
                     <img src={capcation3} alt=''/>
                      <p>Under Graguation</p>


                 </div>

            </div>
             
            
            

           


       
      

        
        
      
    </div>
  )
}

export default program
