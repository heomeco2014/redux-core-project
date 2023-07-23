import React, { Fragment, useEffect, useState } from 'react'
import Textfield, { TextFieldColors } from '@atlaskit/textfield'
import Form, { Field, FormFooter, HelperMessage } from '@atlaskit/form'
import { useDispatch, useSelector } from 'react-redux'
import { searchTodo } from '../../redux/actions'
import { searchTextSelector } from '../../redux/selector'
const Search = () => {
    const dispatch = useDispatch()

    const handleSearchTextChange = (e) => {
        setFieldValue(e.target.value)
        dispatch(searchTodo(e.target.value))
    }
    const [fieldValue, setFieldValue] = useState('')

    return (
        <div>
            <Form>
                {({ formProps }) => (
                    <form {...formProps}>
                        <Field label="Search" name="example-text">
                            {({ fieldProps }) => (
                                <Fragment>
                                    <Textfield appearance="standard" label="Standard" placeholder="Search your todo here" {...fieldProps} value={fieldValue} onChange={handleSearchTextChange} />
                                </Fragment>
                            )}
                        </Field>
                    </form>
                )}
            </Form>
        </div>
    )
}

export default Search
