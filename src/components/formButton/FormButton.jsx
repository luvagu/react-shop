import React from 'react'
import './FormButton.scss'

function FormButton({ children, isGoogleSignIn, inverted, ...options }) {
    return (
        <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} form-button`} {...options}>{children}</button>
    )
}

export default FormButton
