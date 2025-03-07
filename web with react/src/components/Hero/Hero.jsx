import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>We Ensure better education for a better world</h1>
        <p>                I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to 
                add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. </p>

        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>        
                
      </div>
    </div>
  )
}

export default Hero
