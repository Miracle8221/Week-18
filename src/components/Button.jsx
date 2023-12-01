import React from 'react'


function Button({color, text, margin, marginTop,}) {
  const buttonStyles = {
    backgroundColor: color,
    marginLeft: margin,
    marginRight: margin,
    marginTop,
  }
  return (
    <button className='btn' style={buttonStyles}>{text}</button>
  )
}

export default Button