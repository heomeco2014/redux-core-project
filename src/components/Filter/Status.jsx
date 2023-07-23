import { RadioGroup } from '@atlaskit/radio'
import Form, { Field, FormFooter } from '@atlaskit/form'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterByStatus } from '../../redux/actions'
const statusItems = [
    { name: 'All', value: 'All', label: 'All' },
    { name: 'Completed', value: 'Completed', label: 'Completed' },
    { name: 'Todo', value: 'Todo', label: 'Todo' },
]
const Status = () => {
    const [status, setStatus] = useState()
    const dispatch = useDispatch()

    const handleStatusChange = (e) => {
        const selectedStatus = e.target.value
        setStatus(selectedStatus)
        console.log(selectedStatus)
        dispatch(filterByStatus(selectedStatus))
    }
    return (
        <div>
            <Form>
                {({ formProps }) => (
                    <form {...formProps}>
                        <Field label="Filter By Status" name="color" defaultValue="" isRequired>
                            {({ fieldProps }) => <RadioGroup {...fieldProps} options={statusItems} value={status} onChange={handleStatusChange} />}
                        </Field>
                    </form>
                )}
            </Form>
        </div>
    )
}

export default Status
