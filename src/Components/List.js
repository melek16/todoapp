// import React,{useEffect} from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { add, clearAll } from "../actions/actions"
import Filter from "./Filter"
import Task from "./Task"


const List=()=>{
    const filter = useSelector(state => state.filter)
    let todos=useSelector(state=>state.todos)
    console.log(todos)
    const dispatch =useDispatch()
    const check=()=>{
        document.querySelector("#submit").disabled=!document.querySelector("#newTask").value.trim() && true
      } 

    // useEffect(()=>{
    //   if(todos.every(c=>c.isDone) && todos.length){
    //     alert("Congrats!! Another Day Full of Productivity!!")
        
    //   }
    // })
    let showThis=(filter==="Done")? true:(filter==="Undone")? false:"All"
    let message=filter==="Done"? "You haven't done anything yet!":filter==="Undone"? "Nothing to do!":"Your list is empty, nothing to do yet! "
    let filteredList=todos.filter(c=>(showThis==="All")?c:(showThis===c.isDone)) 
    return (
        <div className="List">
          <form  onSubmit={(e)=>dispatch(add(e))}>
            <input placeholder=" New Task" type="text" id="newTask" maxLength="14" onKeyUp={check} />
            <input type="submit" value="Add" id="submit" disabled/>
          </form>
          <Filter/>
          <ul>
          {
            filteredList.map((c,i)=><Task c={c} key={i}/>)
          } 
          </ul>
          {(!filteredList.length) ? message: <button id="ClearAll" onClick={()=>dispatch(clearAll())}>Clear All</button>}
        
    
        </div>
      )
    }

  export default List