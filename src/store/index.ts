
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import { todoReducer } from './reducers/todo-reducer';
import { appReducer } from "./reducers/app-reducer";
import { paginationReducer } from "./reducers/pagination-reducer";

const rootReducer = combineReducers({
    todoList: todoReducer,
    app: appReducer,
    pagination: paginationReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))


export type AppRootStateType = ReturnType<typeof store.getState>

// @ts-ignore
window.store = store;