import {v1} from 'uuid';
import { Dispatch } from "react";
import { todolistsAPI } from "../../api/todolist-api";
import { AppActionsType, setIsLoad } from "./app-reducer";



export type TodoType = {
    id: string,
    title: string,
    completed: boolean,
}

export type TodolistType = {
    todolist: TodoType[]
}

const initialState: TodoType[] = []



export const todoReducer = (state: TodoType[] = initialState, action: TodoActionsType): TodoType[] => {
    switch (action.type) {
        case 'ADD-TODO': {
            return [{
                id: action.id,
                title: action.title,
                completed: action.completed,
            }, ...state]
        }
        case 'ADD-TODOLIST': {
            return [...action.todolist, ...state]
        }
        case 'REMOVE-TODO': {
            return state.filter(todo => todo.id !== action.id)
        }
        case 'CHANGE-TODO-TITLE': {
            const todo = state.find(todo => todo.id === action.id);
            if (todo) {
                todo.title = action.title;
            }
            return [...state]
        }
        case 'CHANGE-TODO-COMPLETED': {
            const todoList = state.find(todo => todo.id === action.id);
            if (todoList) {
                todoList.completed = action.completed;
            }
            return [ ...state ]
        }

        default:
            return [...state];
    }
}

export const removeTodoAC = (id: string) =>
    ({type: 'REMOVE-TODO', id: id} as const)

export const addTodoAC = (title: string, id?: string, completed?: boolean) =>
    ({type: 'ADD-TODO', title: title, id: id? id: v1(), completed: !!completed} as const)

export const addTodoListAC = (todolist: TodoType[]) =>
    ({type: 'ADD-TODOLIST', todolist} as const)

export const changeTodoTitleAC = (id: string, title: string) =>
    ({type: 'CHANGE-TODO-TITLE', id: id, title: title} as const)

export const changeTodoStatusAC = (id: string, completed: boolean) =>
    ({type: 'CHANGE-TODO-COMPLETED', id: id, completed: completed} as const)


export const fetchTodolist = () => (dispatch: Dispatch<TodoActionsType>) => {
    dispatch(setIsLoad('loading'))
    todolistsAPI.getTodolists()
        .then((res) => {
            dispatch(addTodoListAC(res.data))
            dispatch(setIsLoad('succeeded'))

        })
        .catch((err) => {
            console.log(err)
            dispatch(setIsLoad('failed'))
        })
}



export type removeTodoAT = ReturnType<typeof removeTodoAC>
export type addTodoAT = ReturnType<typeof addTodoAC>
export type changeTodoTitleAT = ReturnType<typeof changeTodoTitleAC>
export type changeTodoStatusAT = ReturnType<typeof changeTodoStatusAC>
export type addTodoListAT = ReturnType<typeof addTodoListAC>

export type TodoActionsType =
    removeTodoAT
    | addTodoAT
    | changeTodoTitleAT
    | changeTodoStatusAT
    | AppActionsType
    | addTodoListAT
