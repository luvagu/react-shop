import React, { Component } from 'react'
import FormInput from '../formInput/FormInput'

import './SignIn.scss'

export default class SignIn extends Component {
    constructor() {
        super()
    
        this.state = {
             email: '',
             password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({ email: '', password: '' })
    }

    handleChange = e => {
        const { value, name } = e.target
        this.setState({ [name]: value })
    }
    
    render() {
        return (
            <div className="sign-in">
                <h2>I'm an existing customer</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput id="email" type="email" name="email" value={this.state.email} handleChange={this.handleChange} label="email" required='required' />
                    <FormInput id="password" type="password" name="password" value={this.state.email} handleChange={this.handleChange} label="password" required='required' />
                    <button type="submit">Sign In</button>
                </form>
            </div>
        )
    }
}
