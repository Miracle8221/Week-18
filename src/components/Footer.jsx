import React from 'react'
import element3 from "../assets/element3.png"
import element from "../assets/element.png"

function Footer() {
  return (
    <div>
        <div className='footerBack'>
            <div>
                <div className='footerIcon'>
                <div className='container'>
                <div className='textBlock'>
                <h1 className=''>T</h1>
                </div>
                 </div>
                <h4>Trafalgar</h4>
                </div>
                <p className='trafalgarPara'>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
                <p className='trafalgarPara'>©Trafalgar PTY LTD 2020. All rights reserved</p>
            </div>
            <div>
                <h5 className='footerText'>Company</h5>
                <p className='footerPara'>about</p>
                <p className='footerPara'>Testimonials</p>
                <p className='footerPara'>Find a doctor</p>
                <p className='footerPara'>Apps</p>
            </div>
            <div>
                <h5 className='footerText'>Region</h5>
                <p className='footerPara'>Indonesia</p>
                <p className='footerPara'>Sinapore</p>
                <p className='footerPara'>HongKong</p>
                <p className='footerPara'>Canada</p>
                
            </div>
            <div>
                <h5 className='footerText'>Help</h5>
                <p className='footerPara'>Help center</p>
                <p className='footerPara'>Contact support</p>
                <p className='footerPara'>Instructions</p>
                <p className='footerPara'>How it works</p>
            </div>

        </div>
            <img src={element3} className='footerImage' alt="Image description" />
            <img src={element} className='footerImages' alt="Image description" />
    </div>
  )
}

export default Footer