import React from 'react'
import element2 from "../assets/element2.png"
import element from "../assets/element.png"
import slider from "../assets/slider.png"
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
                    <img src={element2} className='customerImage' alt="Image description" />
                    <img src={element} className='customerImages' alt="Image description" />
            </div>
            <div className='icons'>
            <i className='bx bx-left-arrow-alt'></i>
            <img src={slider}  className='iconsImage'alt="Image description" />
            <i className='bx bx-right-arrow-alt' ></i>
            </div>
        </div>
    </div>
  )
}
export default Testimonial
        
