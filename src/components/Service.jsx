import React from 'react'
import Button from './Button'
import frame from "../assets/Frame.png"
import frame2 from "../assets/Frame2.png"
import frame3 from "../assets/Frame3.png"
import frame4 from "../assets/Frame4.png"
import frame5 from "../assets/Frame5.png"
import frame6 from "../assets/Frame6.png" 
import image2 from "../assets/image2.png"
import element from "../assets/element.png"

function Service() {
  return (
    <div className='serve'>
        <div className='serviceD'>
        <h1 className='servicesHead'>Our Services</h1>
        <div className='line'></div>
        <p className='servicePara'>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
        </div>
        <div>
         
         <div className='serviceAll'>
            <div className='frame'>
                <img src={frame} className='serviceframe' alt="Image description" />
                <h4 className='frameHeading'>Search doctor</h4>
                <p className='framePara'>Choose your doctor from thousands of specialist, general, and trusted hospitals</p>
            </div>
            <div className='frame'>
                <img src={frame2} className='pharmacyframe' alt="Image description" />
                <h4 className='frameHeading'>Online pharmacy</h4>
                <p className='framePara'>Buy  your medicines with our mobile application with a simple delivery system</p>
            </div>
            <div className='frame'>
                <img src={frame3} className='consultationframe' alt="Image description" />
                <h4 className='frameHeading'>Consultation</h4>
                <p className='framePara'>Free consultation with our trusted doctors and get the best recomendations</p>
            </div>
            <div className='frame'>
                <img src={frame4} className='detailsframe' alt="Image description" />
                <h4 className='frameHeading'>Details info</h4>
                <p className='framePara'>Free consultation with our trusted doctors and get the best recomendations</p>
            </div>
            <div className='frame'>
                <img src={frame5} className='emergencyframe' alt="Image description" />
                <h4 className='frameHeading'>Emergency care</h4>
                <p className='framePara'>You can get 24/7 urgent care for yourself or your children and yourlovely family</p>
            </div>
            <div className='frame'>
                <img src={frame6} className='trackingframe' alt="Image description" />
                <h4 className='frameHeading'>Tracking</h4>
                <p className='framePara'>Track and save your medical history and health data </p>
            </div>
          </div>
          <div>
            <img src={image2} className='serviceImage' alt="Image description" />
         </div> 
         <div>
            <img src={element} className='element' alt="Image description" />
         </div> 
         <Button color="" text="Learn more" margin="auto" marginTop="30px" /> 
        </div>
    </div>
  )
}

export default Service
