import React from 'react'
import Button from './Button'

function Service() {
  return (
    <div>
        <div className='serviceD'>
        <h1 className='servicesHead'>Our Services</h1>
        <div className='line'></div>
        <p className='servicePara'>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
        </div>
        <div>
         
         <div className='serviceAll'>
            <div className='frame'>
                <img src="./src/assets/Images/Frame.png" className='serviceframe' alt="" />
                <h4 className='frameHeading'>Search doctor</h4>
                <p className='framePara'>Choose your doctor from thousands of specialist, general, and trusted hospitals</p>
            </div>
            <div className='frame'>
                <img src="./src/assets/Images/Frame2.png" className='pharmacyframe' alt="" />
                <h4 className='frameHeading'>Online pharmacy</h4>
                <p className='framePara'>Buy  your medicines with our mobile application with a simple delivery system</p>
            </div>
            <div className='frame'>
                <img src="./src/assets/Images/Frame3.png" className='consultationframe' alt="" />
                <h4 className='frameHeading'>Consultation</h4>
                <p className='framePara'>Free consultation with our trusted doctors and get the best recomendations</p>
            </div>
            <div className='frame'>
                <img src="./src/assets/Images/Frame4.png" className='detailsframe' alt="" />
                <h4 className='frameHeading'>Details info</h4>
                <p className='framePara'>Free consultation with our trusted doctors and get the best recomendations</p>
            </div>
            <div className='frame'>
                <img src="./src/assets/Images/Frame 5.png" className='emergencyframe' alt="" />
                <h4 className='frameHeading'>Emergency care</h4>
                <p className='framePara'>You can get 24/7 urgent care for yourself or your children and your
lovely family</p>
            </div>
            <div className='frame'>
                <img src="./src/assets/Images/Frame 6.png" className='trackingframe' alt="" />
                <h4 className='frameHeading'>Tracking</h4>
                <p className='framePara'>Track and save your medical history and health data </p>
            </div>
          </div>
          <div>
            <img src="./src/assets/Images/image2.png" className='serviceImage' alt="" />
         </div> 
         <div>
            <img src="./src/assets/Images/element.png" className='element' alt="" />
         </div> 
         <Button >learn more</Button> 
        </div>
    </div>

  )
}

export default Service