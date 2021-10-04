
const todosReducer=(state=[],action)=>{
    switch (action.type) {
        case "add":
            action.e.preventDefault()
            state.push({task:document.querySelector("#newTask").value,isDone:false,id:Math.random()})
            document.querySelector("#newTask").value=''
            document.querySelector("#submit").disabled=true
            return [...state]
        case "deleting":
            return state.filter(c=>c.id!==action.payload)  
        case "done":
            return state.map(c=>(c.id===action.payload)? {...c,isDone:!c.isDone}:c)
        case "editting":
            state.find(c=>c.id===action.payload).task= action.e.target.value || state.find(c=>c.id===action.payload).task 
            action.e.target.style.display='none'
            action.e.target.value=''
            return [...state]
        case "clearAll":
            document.querySelector("#newTask").value=''
            return []
        default:
            return state    
    }
}

export default todosReducer;