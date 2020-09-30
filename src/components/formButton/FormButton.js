import React from 'react'
import './FormButton.scss'

function FormButton({ children, ...options }) {
    return (
        <button className="form-button" {...options}>{children}</button>
    )
}

export default FormButton
