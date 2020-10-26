import React, { Component } from 'react'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import FormInput from '../formInput/FormInput'
import FormButton from '../formButton/FormButton'

import './SignUp.scss'

class SignUp extends Component {
    constructor() {
        super()

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''    
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        const { displayName, email, password, confirmPassword } = this.state

        if (password !== confirmPassword) {
            alert('Passwords don\'t match')
            return
        }

        try {

            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, { displayName })

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        } catch (error) {
            console.log(error)
        }
    }

    handleChange = async (e) => {

        const { name, value } = e.target

        this.setState({ [name]: value })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state

        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign Up is easy and only takes a few seconds</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput 
                        type ='text'
                        name ='displayName'
                        value ={displayName}
                        onChange ={this.handleChange}
                        label = 'Diplay Name'
                        required
                    />
                    <FormInput 
                        type ='email'
                        name ='email'
                        value ={email}
                        onChange ={this.handleChange}
                        label = 'Email'
                        required
                    />
                    <FormInput 
                        type ='password'
                        name ='password'
                        value ={password}
                        onChange ={this.handleChange}
                        label = 'Password'
                        required
                    />
                    <FormInput 
                        type ='password'
                        name ='confirmPassword'
                        value ={confirmPassword}
                        onChange ={this.handleChange}
                        label = 'Confirm Password'
                        required
                    />
                    <FormButton type='submit'>Sign Up</FormButton>
                </form>
            </div>
        )
    }
}

export default SignUp
