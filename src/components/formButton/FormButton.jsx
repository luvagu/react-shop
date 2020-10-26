import React from 'react'
import './FormButton.scss'

function FormButton({ children, isGoogleSignIn, ...options }) {
    return (
        <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} form-button`} {...options}>{children}</button>
    )
}

export default FormButton
