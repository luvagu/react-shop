import React, { useState } from 'react'
import { connect } from 'react-redux'

import { signUpStart } from '../../redux/user/user-actions'

import FormInput from '../formInput/FormInput'
import FormButton from '../formButton/FormButton'

import { SignUpContainer } from './SignUpStyles'


function SignUp({ signUpStart }) {
    const [userCredentials, setUserCredentials] = useState({ displayName: '', email: '', password: '', confirmPassword: '' })

    const { displayName, email, password, confirmPassword } = userCredentials

    const handleSubmit = async (e) => {
        e.preventDefault()

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

    const handleChange = async (e) => {
        const { name, value } = e.target
        setUserCredentials({ ...userCredentials, [name]: value })
    }

    return (
        <SignUpContainer>
            <h2>I do not have an account</h2>
            <span>Sign Up is easy and only takes a few seconds</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput 
                    type ='text'
                    name ='displayName'
                    value ={displayName}
                    onChange ={handleChange}
                    label = 'Diplay Name'
                    required
                />
                <FormInput 
                    type ='email'
                    name ='email'
                    value ={email}
                    onChange ={handleChange}
                    label = 'Email'
                    required
                />
                <FormInput 
                    type ='password'
                    name ='password'
                    value ={password}
                    onChange ={handleChange}
                    label = 'Password'
                    required
                />
                <FormInput 
                    type ='password'
                    name ='confirmPassword'
                    value ={confirmPassword}
                    onChange ={handleChange}
                    label = 'Confirm Password'
                    required
                />
                <FormButton type='submit'>Sign Up</FormButton>
            </form>
        </SignUpContainer>
    )
}

const mapDispatchToProps = (dispatch) => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp)
