import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

const Todoitems = ({text,id,isComplete,deleteTodo,toggle}) => {
  return (
    <div className='items-box'>

      <div onClick={()=>{toggle(id)}} className='items-elements flex-1'>
        <img src={isComplete ? tick :not_tick} alt="" className='tick-image' />
        <p className={`items-text ${isComplete ? "line-through" : ""}`}>{text}</p>
      </div>

      <img onClick={()=>{deleteTodo(id)}} src={delete_icon} alt=""  className='delete-image'/>
    </div>
  )
}

export default Todoitems
