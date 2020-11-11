import React, { Component } from 'react'
import { connect } from 'react-redux'

import { signUpStart } from '../../redux/user/user-actions'

import FormInput from '../formInput/FormInput'
import FormButton from '../formButton/FormButton'

import { SignUpContainer } from './SignUpStyles'


class SignUp extends Component {
    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''    
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        const { signUpStart } = this.props
        const { displayName, email, password, confirmPassword } = this.state

        if (password !== confirmPassword) {
            alert('Passwords don\'t match')
            return
        }
        
        signUpStart({ displayName, email, password })

        // try {
        //     const { user } = await auth.createUserWithEmailAndPassword(email, password)

        //     await createUserProfileDocument(user, { displayName })

        //     this.setState({
        //         displayName: '',
        //         email: '',
        //         password: '',
        //         confirmPassword: ''
        //     })

        // } catch (error) {
        //     console.log(error)
        // }
    }

    handleChange = async (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state

        return (
            <SignUpContainer>
                <h2>I do not have an account</h2>
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
            </SignUpContainer>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp)
