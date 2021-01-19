import React from 'react'

import { FormButtonContainer } from './FormButtonStyles'

const FormButton = ({ children, ...props }) => {
    return (
        <FormButtonContainer {...props}>{children}</FormButtonContainer>
    )
}

export default FormButton
