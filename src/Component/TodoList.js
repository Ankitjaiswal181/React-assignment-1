import React,{useState} from 'react'
import './TodoList.css'

const TodoList = (props) => {
    const [input,setInput]=useState('');
    const handleSubmit=e=>{
        e.preventDefault();
        // console.log(e.target.value);
      
        props.onSubmit({
            id:Math.floor(Math.random()*1000),
            text:input
        });
        setInput('');
    };
    const handleChange=e=>{
        // console.log(e.target.value);
        setInput(e.target.value);
    }
    return (
        <div className='d-flex form '> 
            <form className='todo-form d-flex' onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder="What will you do today?"
            value={input}
            name="text"
            className='todo-input'
            onChange={handleChange}/>
            <button className="todo-button btn-primary">ADD</button>
            </form>
            
        </div>
    )
}

export default TodoList
