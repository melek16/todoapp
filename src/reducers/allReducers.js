import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import todosReducer from "./todosReducer";

const allReducers=combineReducers({
    todos:todosReducer,
    filter:filterReducer
})

export default allReducers