import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import style from "./AddTodoForm.module.css"

export type AddItemFormPropsType = {
    addItem: (title: string) => void
    isUniqueTodo: (title: string) => boolean
}

export const AddTodoForm = React.memo(({addItem, isUniqueTodo}: AddItemFormPropsType) => {
    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)


    const onAddItemClick = () => {
        if (isUniqueTodo(title)) {
            setError("Todo already exists!");
            return null
        }

        if (title.trim() !== "") {
            addItem(title);
            setTitle("");
        } else {
            setError("Title is required");
        }
    }

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setError("")
        setTitle(e.currentTarget.value)
    }

    const onInputKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (error !== null) {
            setError(null);
        }
        if (e.charCode === 13) {
            onAddItemClick();
        }
    }

    return <div className={style.Wrap}>
        <div className={style.Inner}>
            <input className={style.Input}
                   placeholder={"New todo"}
                   value={title}
                   onChange={onInputChange}
                   onKeyPress={onInputKeyPress}
            />
            <button className={style.BtnAdd} onClick={onAddItemClick}>Add</button>
            <div className={style.ErrorMsg}>{error}</div>
        </div>

    </div>
})
