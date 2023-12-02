import React from 'react'
import Button from './Button'
import image3 from "../assets/image3.png"
import element from "../assets/element.svg"
import image from "../assets/image4.png"

function Heath() {
  return (
    <div className='heathsHead'>
        <div className='heathHeading'>
            <div>
                <img src={image3} className='heathImage' alt="Image description" />
            </div>
            <div className='care'>
                <h3 className='heathCare'>Leading healthcare providers</h3>
                <div className='line'></div>
                <p className='heathPara'>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver</p>
                <Button color="" text="Learn more" margin="auto" marginTop="30px" />
            </div>
        </div>
        
            <img src={element} className='appImg' alt="Image description" />
        <div className='heaths'>
            <div className='care'>
                <h3 className='heathCares'>Download our mobile apps</h3>
                <div className='line'></div>
                <p className='heathPara'>Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely</p>
            <Button color="" text="Download" margin="auto" marginTop="30px" />
            </div>
            <div>
                <img src={image} className='heathImages' alt="Image description" />
            </div>
        </div>
    </div>
  )
}

export default Heath