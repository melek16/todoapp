import React,{ Component } from "react"

export default class List extends Component{
    state={
      todos:[]
        }
      check(){
        document.querySelector("#submit").disabled=!document.querySelector("#newTask").value && true
      } 
      add(e){
        e.preventDefault()
        this.state.todos.push({task:document.querySelector("#newTask").value,isDone:false})
        document.querySelector("#newTask").value=''
        document.querySelector("#submit").disabled=true
        this.setState({todos:this.state.todos})
      }
    done(e,a){
        let i=e.target.parentNode.parentNode.id
        console.log(i)
        a.state.todos[i].isDone=!a.state.todos[i].isDone 
        a.setState({todos:a.state.todos}) 
        a.completedList(a) 
    } 
    delete(e,a){
      let i=e.target.parentNode.parentNode.id
      a.state.todos.splice(i,1)
      a.setState({todos:a.state.todos})
      console.log(a.state.todos)
      a.completedList(a)
    }
    clearAll(a){
        a.setState({todos:[]}) 
    }
  
    completedList(a){
      setTimeout(function(){
        if(a.state.todos.every(c=>c.isDone) && a.state.todos.length){
          alert("Congrats!! Another Day Full of Productivity!!")
        }
      },100)
     
    }
    render() {
      return (
        <div className="List">
          <form  onSubmit={(e)=>this.add(e)}>
            <input placeholder="New Task" type="text" id="newTask" onKeyUp={this.check}/>
            <input type="submit" value="Add" id="submit" disabled/>
          </form>
          <ul>
          {this.state.todos.map((c,i)=><li id={i} style={{color:(c.isDone && "green") || "black",textDecoration:(c.isDone && "line-through") || "none"}}>
              {c.task}
              <div className="buttons">
              <button className="check" onClick={(e)=>this.done(e,this)}>
              <svg  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill={(c.isDone && "green") || "#e9e9e9"} d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"></path></svg>
              </button>
              <button className="delete" onClick={(e)=>this.delete(e,this)}><svg    role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="#f00" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
              </button>
              </div>
              </li>)} 
          </ul>
           {
               (!this.state.todos.length)?"Your list is empty, nothing to do yet! ": <button id="ClearAll" onClick={()=>this.clearAll(this)}>Clear All</button>
           }
        
    
        </div>
      )
    }
   
    
  }