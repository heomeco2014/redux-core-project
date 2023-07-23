import Form, { Field, FormFooter } from '@atlaskit/form'
import TextField from '@atlaskit/textfield'
import Select from '@atlaskit/select'
import Button, { ButtonGroup, LoadingButton } from '@atlaskit/button'
import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../../redux/actions'

const options = [
    { label: 'High', value: 'High' },
    { label: 'Medium', value: 'Medium' },
    { label: 'Low', value: 'Low' },
]
const AddItem = () => {
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todoList)
    const handleSubmit = (data, form) => {
        const id = todos.length + 1
        const title = data.Todo
        const priority = data.prioritySelect.value
        const done = false
        if (title.trim() !== '') {
            dispatch(
                addTodo({
                    id,
                    title,
                    priority,
                    done,
                })
            )
            form.reset()
        }
    }
    return (
        <div className="">
            <Form onSubmit={handleSubmit}>
                {({ formProps, submitting }) => (
                    <form {...formProps}>
                        <Field name="Todo" label="" defaultValue="">
                            {({ fieldProps: { id, ...rest }, error }) => (
                                <Fragment>
                                    <TextField appearance="standard" placeholder="Todo here" {...rest} />
                                </Fragment>
                            )}
                        </Field>
                        <Field name="prioritySelect" label="" defaultValue={[]}>
                            {({ fieldProps: { id, ...rest }, error }) => (
                                <Fragment>
                                    <Select inputId={id} {...rest} options={options} />
                                </Fragment>
                            )}
                        </Field>
                        <FormFooter>
                            <ButtonGroup>
                                <LoadingButton type="submit" appearance="primary" isLoading={submitting}>
                                    Add
                                </LoadingButton>
                            </ButtonGroup>
                        </FormFooter>
                    </form>
                )}
            </Form>
        </div>
    )
}

export default AddItem
