import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { All, filterDone, filterUndone } from '../actions/actions'

const Filter = () => {
    const filter = useSelector(state => state.filter)
    const dispatch = useDispatch()
    return (
        <div id="filter">
            <p>Show:</p>
            <button onClick={()=>dispatch(All())} className={filter==="All"? "selected":"notSelected"}>All</button>
            <button onClick={()=>dispatch(filterDone())} className={filter==="Done"? "selected":"notSelected"}>Done</button>
            <button onClick={()=>dispatch(filterUndone())} className={filter==="Undone"? "selected":"notSelected"}>Undone</button>
        </div>
    )
}

export default Filter
