import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import style from "./EditableSpan.module.css"

type EditableSpanPropsType = {
    value: string
    onChange: (newValue: string) => void
}

export const EditableSpan = React.memo((props: EditableSpanPropsType) => {
    const {value, onChange} = props
    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(value);

    const activateEditMode = () => {
        setEditMode(true);
        setTitle(value);
    }

    const activateViewMode = () => {
        setEditMode(false);
        onChange(title);
    }

    const onInputTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onInputKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            setTitle(e.currentTarget.value)
            activateViewMode()
        }
    }

    return (
        <div className={style.WrapEditableSpan}>
            {editMode
                ? <input
                    className={style.Input}
                    value={title}
                    onChange={onInputTitleChange}
                    onKeyPress={onInputKeyPress}
                    autoFocus
                    onBlur={activateViewMode}
                />
                : <div className={style.Text} onDoubleClick={activateEditMode}>{value}</div>
            }
        </div>
    )
});
