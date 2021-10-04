export const add=(e)=>{
    return {
        type:"add",
        e:e
    }
}

export const deleting=(deleted_id)=>{
    return{
        type:"deleting",
        payload:deleted_id
    }
}
export const done=(done_id)=>{
    return{
        type:"done",
        payload:done_id
    }
}
export const editting=(e,edit_id)=>{
    return{
        type:"editting",
        payload:edit_id,
        e:e
    }
}
export const clearAll=()=>{
    return{
        type:"clearAll",
    }
}

export const All=()=>{
    return{
        type:"All",
    }
}

export const filterDone=()=>{
    return{
        type:"filterDone",
    }
}

export const filterUndone=()=>{
    return{
        type:"filterUndone",
    }
}
