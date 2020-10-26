import React from 'react'
import './FormInput.scss'

function FormInput({ handleChange, label, ...options }) {
    return (
        <div className="input-group">
            <input className="form-input" onChange={handleChange} {...options} />
            {
                label && (<label className={`${options.value.length && 'shrink'} form-input-label`}>{label}</label>)
            }
        </div>
    )
}

export default FormInput
