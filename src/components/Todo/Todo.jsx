import { Checkbox } from '@atlaskit/checkbox'
import { SimpleTag as Tag } from '@atlaskit/tag'
import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleTodo } from '../../redux/actions'
const Todo = ({ todo }) => {
    const { id, title, done, priority } = todo
    const dispatch = useDispatch()
    const onChange = useCallback(() => {
        dispatch(toggleTodo(id))
    }, [id])
    return (
        <div className={`flex justify-between ${done ? 'line-through' : ''} `}>
            <Checkbox isChecked={done} label={title} value={title} onChange={onChange} />
            <Tag text={priority} />
        </div>
    )
}

export default Todo
