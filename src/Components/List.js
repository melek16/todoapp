import React,{useEffect, useRef, useState} from "react"


const List=()=>{
    const [todos, setTodos] =useState([]);
    const check=()=>{
        document.querySelector("#submit").disabled=!document.querySelector("#newTask").value && true
      } 
    const add=(e)=>{
        e.preventDefault()
        todos.push({task:document.querySelector("#newTask").value,isDone:false,id:Math.random()})
        document.querySelector("#newTask").value=''
        document.querySelector("#submit").disabled=true
        setTodos([...todos])
        
      }
    const done=(done_id)=>{
        setTodos(todos.map(c=>(c.id===done_id)? {task:c.task,isDone:!c.isDone,id:c.id}:c))
    } 
    const deleting=(deleted_id)=>{
      setTodos(todos.filter(c=>c.id!==deleted_id))
    }
    let edit_block=useRef()
    const edit=(e)=>{
      edit_block.current.style.display='block'
      edit_block.current.focus()
      
    }
    const editting=(e,edit_id)=>{
        todos.find(c=>c.id===edit_id).task= e.target.value || todos.find(c=>c.id===edit_id).task 
        setTodos([...todos])
        edit_block.current.style.display='none'
        edit_block.current.value=''
  }
    const clearAll=()=>{
        setTodos([]) 
        document.querySelector("#newTask").value=''
    }
    useEffect(()=>{
      if(todos.every(c=>c.isDone) && todos.length){
        alert("Congrats!! Another Day Full of Productivity!!")
        
      }
    })

      return (
        <div className="List">
          <form  onSubmit={(e)=>add(e)}>
            <input placeholder=" New Task" type="text" id="newTask" maxLength="14" onKeyUp={check} />
            <input type="submit" value="Add" id="submit" disabled/>
          </form>
          <ul>
          {todos.map((c,i)=><li id={i} style={{color:(c.isDone && "green") || "black",textDecoration:(c.isDone && "line-through") || "none"}}>
              {c.task}
              <input placeholder={c.task} ref={edit_block} className="edit_input" type="text" maxLength="14" onKeyUp={(e)=> {if(e.which===13){editting(e,c.id)}}} onBlur={e=>editting(e,c.id)}/>
              <div className="buttons">
              <button className="check" onClick={()=>done(c.id)}>
              <svg  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill={(c.isDone && "green") || "#e9e9e9"} d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"></path></svg>
              </button>
              <button className="delete" onClick={()=>deleting(c.id)}><svg    role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="#f00" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
              </button>
              <button className="edit" onClick={e=>edit(e)}><svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#D1D1D1" d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"></path></svg></button>
              </div>
              </li>)} 
          </ul>
          {(!todos.length)?"Your list is empty, nothing to do yet! ": <button id="ClearAll" onClick={clearAll}>Clear All</button>}
        
    
        </div>
      )
    }

  export default List