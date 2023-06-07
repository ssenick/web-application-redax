import {createStore, combineReducers} from "redux";
import {cashReducer} from "./cashReduser";
import {customerReducer} from "./customerReduser";


const rootReducer = combineReducers({
   cash: cashReducer,
   customer: customerReducer
})


export const store = createStore(rootReducer)
