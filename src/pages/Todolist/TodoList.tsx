import React, { useCallback } from 'react';
import './TodoList.module.css';
import { useDispatch, useSelector } from "react-redux";
import style from "./TodoList.module.css"
import { addTodoAC, fetchTodolist, TodoType } from "../../store/reducers/todo-reducer";
import { AddTodoForm, Loader, Todo } from "../../Components";
import { IsLoadType, setIsFetchingTodosAC } from "../../store/reducers/app-reducer";
import { AppRootStateType } from "../../store";
import Pagination from "../../Components/Pagination/Pagination";
import { PaginationType, setCurrentPageAC } from "../../store/reducers/pagination-reducer";

function TodoList() {
    const dispatch = useDispatch()
    const todoList = useSelector<AppRootStateType, TodoType[]>(state => state.todoList)
    const isLoad = useSelector<AppRootStateType, IsLoadType>(state => state.app.isLoad)
    const isFetchingTodos = useSelector<AppRootStateType, boolean>(state => state.app.isFetchingTodos)
    const pagination = useSelector<AppRootStateType, PaginationType>(state => state.pagination)


    if(!isFetchingTodos) {
        dispatch(fetchTodolist())
        dispatch(setIsFetchingTodosAC(true))
    }

    let todosCurrentPage = todoList.slice(pagination.startTodo, pagination.endTodo)

    if( isLoad === 'succeeded' && todosCurrentPage.length === 0) {
        dispatch(setCurrentPageAC(pagination.currentPage-1))
    }


    const addTodoHandler = useCallback((title: string) =>
        dispatch(addTodoAC(title)), [ dispatch ])

    const isUniqueTodo = (title: string) =>
        todoList.some(todo => todo.title === title)


    return (
        <div className={style.WrapApp}>
            <AddTodoForm addItem={addTodoHandler} isUniqueTodo={isUniqueTodo}/>

            <div className={style.WrapTodoList}>
                <div className={style.InnerTodoList}>
                    {!todoList.length && isLoad === 'succeeded' && <span>No todos</span>}
                    {isLoad === 'loading' && <Loader/>}
                    {todosCurrentPage.map(todo => <Todo key={todo.id} {...todo} />)}
                </div>
            </div>
            <Pagination countTodos={todoList.length} {...pagination} />

        </div>
    );
}

export default TodoList;

