import React from 'react'
import Button from './Button'

function Home() {
  return (
    <div>
        <div>
            <img src="./src/assets/Images/element.svg" className='img' alt="" />
        </div>
        <div className='section'>
        <div className='heroSection'>
            <h2 className='heading'>Virtual healthcare for you</h2>
            <p className='para'>
            Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone
            </p>
            <Button className='btns'>Consult today</Button>
        </div>
        <div>
            <img src="./src/assets/Images/image1.png" className='imgs' alt="" />
        </div>
        </div>
    </div>
  )
}

export default Home