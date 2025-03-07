import React, { useState } from 'react'
import './Background.css'
import video_1 from '../../Assets/video1.mp4'
import image_1 from '../../Assets/image1.png'
import image_2 from '../../Assets/image2.png'
import image_3 from '../../Assets/image3.png'

const Background = ({playStatus,heroCount}) => {

    if (playStatus){
        return(
            <video className='background fade-in' autoPlay loop muted>
                <source src={video_1} type='video/mp4'/>
            </video>
        )
    }
    else if(heroCount===0)
    {
        return <img src={image_1} className='background fade-in' alt="" />
    }
    else if(heroCount===1)
        {
            return <img src={image_2} className='background fade-in' alt="" />
        }
        else if(heroCount===2)
            {
                return <img src={image_3} className='background fade-in' alt="" />
            }

}
 
export default Background
