import React, { useState } from 'react'
import { connect } from 'react-redux'

// import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
import { googleSignInStart, emailSignInStart } from '../../redux/user/user-actions'

import FormInput from '../formInput/FormInput'
import FormButton from '../formButton/FormButton'

import { SignInButtons, SignInContainer } from './SignInStyles'

function SignIn({ emailSignInStart, googleSignInStart  }) {
    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' })
    
    const { email, password } = userCredentials

    const handleSubmit = async (e) => {
        e.preventDefault()
        emailSignInStart({ email, password })
    }

    const handleChange = (e) => {
        const { value, name } = e.target
        setUserCredentials({ ...userCredentials, [name]: value })
    }
    
    return (
        <SignInContainer>
            <h2>I'm an existing customer</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput type="email" name="email" value={email} handleChange={handleChange} label="email" required='required' />
                <FormInput type="password" name="password" value={password} handleChange={handleChange} label="password" required='required' />
                <SignInButtons>
                    <FormButton type='submit'>Sign In</FormButton>
                    <FormButton type='button' onClick={googleSignInStart} isGoogleSignIn>Sign In with Google</FormButton>
                </SignInButtons>
                
            </form>
        </SignInContainer>
    )
}

const mapDispatchtoProps = (dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (userCredentials) => dispatch(emailSignInStart(userCredentials))
})

export default connect(null, mapDispatchtoProps)(SignIn)