import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import Todoitems from './Todoitems'

const Todo = () => {

  const [todoList,setTodoList]=useState(localStorage.getItem("todos")?
  JSON.parse(localStorage.getItem("todos")) : []);

  const inputRef=useRef();

  const add=()=>{
    const inputText=inputRef.current.value.trim();


    if (inputText===""){
      return null;
    }



    const newTodo={
      id: Date.now(),
      text:inputText,
      isComplete:false,
    }
    setTodoList((prev)=> [...prev,newTodo]);
    inputRef.current.value="";

  }

  const deleteTodo=(id)=>{ 
    setTodoList((prVTodos)=>{
     return prVTodos.filter((todo)=> todo.id !==id)
    })
  }


  const toggle=(id)=>{
    setTodoList((prevTodos)=>{
      return prevTodos.map((todo)=>{
        if (todo.id===id){
          return {...todo,isComplete: !todo.isComplete}
        }
        return todo;
      })
    })
  }
// برای اینکه رفرش کردیم محتواها باقی بمونن
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todoList));
    
  },[todoList])
  return (
    <div className='todo-box'>

      {/* -----------------title--------------------- */}
      <div className='title-text'>
        <img className='todolist-icon' src={todo_icon} alt="" />
        <h1>To-Do List</h1>
      </div>
      {/* --------------------input box------------------------ */}
      <div className='input-box'>
        <input ref={inputRef} className='input-items flex-1' type="text" placeholder='Add your task' />
        <button onClick={add} className='add-btn'>ADD +</button>
      </div>
      {/* ---------------------todo list------------------------------ */}
      <div>
      {todoList.map((item,index)=>{
        return <Todoitems key={index} text={item.text} id={item.id}
        isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle}/>
      })}
      </div>
      
    </div>
  )
}

export default Todo
