import React from 'react'
import Button from './Button'
import image from "../assets/element.svg"
import img from "../assets/image1.png"
function Home() {
  return (
    <div className='home'>
        <div>
            <img src={image} className='img' alt="image description" />
        </div>
        <div className='section'>
        <div className='heroSection'>
            <h2 className='heading'>Virtual healthcare for you</h2>
            <p className='para'>
            Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone
            </p>
            <Button color="" text="consult today"  marginTop="30px"/>
        </div>
        <div>
            <img src={img} className='imgs' alt="Image description" />
        </div>
        </div>
    </div>
  )
}

export default Home