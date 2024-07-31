import React, { useRef } from 'react'
import './Testomonial.css'
import tr3 from '../../Source_Image/tr3.png'
import tr4 from '../../Source_Image/tr4.png'
import tr8 from '../../Source_Image/tr8.png'
import tr9 from '../../Source_Image/tr9.png'
import back from '../../Source_Image/back.png'
import next from '../../Source_Image/next.png'
const Testomonial = () => {
  const sliteforward=()=>{
    
    

  }
  const sliteBackward=()=>{

  }


  return (

        <div className='testonimal'>
             <img className='back-btn' src={back} alt=''/>
            <img className='next-btn' src={next} alt=''/>
            <div className="Sliders">
              <ul>
                <li>
                  <div className='Slider'>
                    <div className="user-info">
                      <img src={tr3} alt=''/>
                      <div>
                        <h2>Alexander Patrick</h2>
                        <span>Pennsylvania State University</span>
                        
                      </div>
                      <p>I believe it helps them stay punctual and keeps them on track with learning and reaching goals for their education, as well as providing breathing room for relaxation.</p>

                    </div>

                  </div>
                </li>


                <li>
                  <div className='Slider'>
                    <div className="user-info">
                      <img src={tr4} alt=''/>
                      <div>
                        <h2>Justin Richard</h2>
                        <span>Pennsylvania State University</span>
                        
                      </div>
                      <p>The office of personal counseling makes it very easy to reach out if you ever need mental help, and they host many events as well. The campus overall is very safe..</p>

                    </div>

                  </div>
                </li>


                <li>
                  <div className='Slider'>
                    <div className="user-info">
                      <img src={tr8} alt=''/>
                      <div>
                        <h2>Kendra Raymond</h2>
                        <span>Pennsylvania State University</span>
                        
                      </div>
                      <p>Don’t overthink it. College seems a lot more difficult than it actually is, just take everything one day at a time and you’ll have plenty of time to do things you like to do..</p>

                    </div>

                  </div>
                </li>


                <li>
                  <div className='Slider'>
                    <div className="user-info">
                      <img src={tr9} alt=''/>
                      <div>
                        <h2>Frank Raymond</h2>
                        <span>Pennsylvania State University</span>
                        
                      </div>
                      <p>The food is pretty decent. I wouldn’t say absolutely 5 star but it is pretty good for what it is, and you have plenty of options to choose from.</p>

                    </div>

                  </div>
                </li>


              </ul>


            </div>


            

        </div>
       
       
        
       
      
   
  )
}

export default Testomonial
