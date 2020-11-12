import React from 'react'

import { FormButtonContainer } from './FormButtonStyles'

function FormButton({ children, ...props }) {
    return (
        <FormButtonContainer {...props}>{children}</FormButtonContainer>
    )
}

export default FormButton
