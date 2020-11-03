import React from 'react'

import { FormInputField, FormLabel, InputGroupConatiner } from './FormInputStyles'

function FormInput({ handleChange, label, ...options }) {
    return (
        <InputGroupConatiner>
            <FormInputField onChange={handleChange} {...options} />
            {
                label && (<FormLabel className={options.value.length && 'shrink'}>{label}</FormLabel>)
            }
        </InputGroupConatiner>
    )
}

export default FormInput
