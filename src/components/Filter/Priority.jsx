import Button from '@atlaskit/button'
import Form, { ErrorMessage, Field, FormFooter } from '@atlaskit/form'
import Select from '@atlaskit/select'
import { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterByPriority } from '../../redux/actions'

const options = [
    { label: 'High', value: 'High' },
    { label: 'Medium', value: 'Medium' },
    { label: 'Low', value: 'Low' },
]

const Priority = () => {
    const [priority, setPriority] = useState([])
    const dispatch = useDispatch()

    const handlePriorityChange = (selectedOptions) => {
        // Update the priority state with the selected options
        setPriority(selectedOptions)
        console.log('Selected Options:', selectedOptions)
        dispatch(filterByPriority(selectedOptions))
    }

    return (
        <div>
            <Form>
                {({ formProps }) => (
                    <form {...formProps}>
                        <Field name="icecream" label="Select Priority" defaultValue={[]}>
                            {({ fieldProps: { id, ...rest }, error }) => (
                                <Fragment>
                                    <Select inputId={id} {...rest} options={options} isMulti value={priority} onChange={handlePriorityChange} />
                                    {error && <ErrorMessage>{error}</ErrorMessage>}
                                </Fragment>
                            )}
                        </Field>
                    </form>
                )}
            </Form>
        </div>
    )
}

export default Priority
