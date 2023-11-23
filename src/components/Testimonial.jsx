import React from 'react'

function Testimonial() {
  return (
    <div>
        <div className='test'>
            <div className='customer'>
                <h2 className='customerHeading'>What our customer are saying</h2>
                <div className='lines'></div>
                <div className='photoHeading'>
                    <div className='photoFlex'>
                        <img src="" className='photo' alt="" />
                        <div>
                        <h4 className='text-white text-3xl font-bold'>Edward Newgate</h4>
                        <p className='text-lg font-light leading-10 not-italic text-white'>Founder Circle</p>
                        </div>
                    </div>
                    <p className='photoPara'>
                    “Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls,or administrative hassle) and securely”
                    </p>

                </div>
                    <img src="./src/assets/Images/element2.png" className='customerImage' alt="" />
                    <img src="./src/assets/Images/element.png" className='customerImages' alt="" />
            </div>
            <div className='icons'>
            <i className='bx bx-left-arrow-alt'></i>
            <img src="./src/assets/Images/slider.png"  className='iconsImage'alt="" />
            <i className='bx bx-right-arrow-alt' ></i>
            </div>
        </div>
        
    </div>
  )
}

export default Testimonial