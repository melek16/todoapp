const filterReducer=(state="All",action)=>{
    switch (action.type) {
        case "All":
            return "All"
        case "filterDone":
            return "Done"  
        case "filterUndone":
            return "Undone"
        default:
            return state 
    }
}

export default filterReducer