import React, { Component } from 'react'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

import FormInput from '../formInput/FormInput'
import FormButton from '../formButton/FormButton'

import './SignIn.scss'

class SignIn extends Component {
    constructor() {
        super()
    
        this.state = {
             email: '',
             password: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        const { email, password } = this.state

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '', password: '' })
        } catch (error) {
            console.log(error)
        }
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
                    <FormInput type="email" name="email" value={this.state.email} handleChange={this.handleChange} label="email" required='required' />
                    <FormInput type="password" name="password" value={this.state.password} handleChange={this.handleChange} label="password" required='required' />
                    <div className="buttons">
                        <FormButton type='submit'>Sign In</FormButton>
                        <FormButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</FormButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn