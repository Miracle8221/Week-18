import React from 'react'
import Button from './Button'

function Heath() {
  return (
    <div>
        <div className='heathHeading'>
            <div>
                <img src="./src/assets/Images/image3.png" className='heathImage' alt="" />
            </div>
            <div className='care'>
                <h3 className='heathCare'>Leading healthcare providers</h3>
                <div className='line'></div>
                <p className='heathPara'>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver</p>
                <Button>learn more</Button>
            </div>
        </div>
        
            <img src="./src/assets/Images/element.svg" className='appImg' alt="" />
        <div className='heaths'>
            <div className='care'>
                <h3 className='heathCares'>Download our 
mobile apps</h3>
                <div className='line'></div>
                <p className='heathPara'>Our dedicated patient engagement app and 
web portal allow you to access information instantaneously (no tedeous form, long calls, 
or administrative hassle) and securely</p>
                <Button>learn more</Button>
            </div>
            <div>
                <img src="./src/assets/Images/image3.png" className='heathImages' alt="" />
            </div>
        </div>
    </div>
  )
}

export default Heath