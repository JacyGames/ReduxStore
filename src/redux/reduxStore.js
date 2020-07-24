import {combineReducers, createStore} from "redux";
import {itemsReducer} from "./reducers/itemsReducer";


export const store = createStore(
    combineReducers({itemsReducer}));

