import React, { ChangeEvent, useCallback } from 'react'
import { EditableSpan } from "../EditableSpan";
import {
    changeTodoStatusAC,
    changeTodoTitleAC,
    removeTodoAC,
    TodoType
} from "../../store/reducers/todo-reducer";
import { useDispatch } from "react-redux";
import style from "./Todo.module.css"

export const Todo = React.memo((props: TodoType) => {
        const {id, title, completed} = props
        const dispatch = useDispatch()

        const styleWrap = `${style.WrapTodo} ${props.completed ? style.todoCompleted : ""}`

        const onTodoStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
            const newStatus = e.currentTarget.checked
            dispatch(changeTodoStatusAC(id, newStatus))
        }
        const OnTodoTitleChange = useCallback((title: string) =>
                dispatch(changeTodoTitleAC(id, title)),
            [ id, dispatch ])

        const onRemoveTodoClick = useCallback(() =>
            dispatch(removeTodoAC(id)), [ id, dispatch ])

        return (
            <div className={styleWrap}>
                <input
                    className={style.CheckBox}
                    type="checkbox"
                    checked={completed}
                    onChange={onTodoStatusChange}
                />

                <div className={style.TodoInfo}>
                    <EditableSpan value={title} onChange={OnTodoTitleChange}/>
                </div>

                <button className={style.BtnDel} onClick={onRemoveTodoClick}/>

            </div>
        )
    }
)
