import React, { Component } from 'react'
import { connect } from 'react-redux'

// import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
import { googleSignInStart, emailSignInStart } from '../../redux/user/user-actions'

import FormInput from '../formInput/FormInput'
import FormButton from '../formButton/FormButton'

import { SignInButtons, SignInContainer } from './SignInStyles'

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        const { emailSignInStart } = this.props
        const { email, password } = this.state

        emailSignInStart({ email, password })
    }

    handleChange = e => {
        const { value, name } = e.target
        this.setState({ [name]: value })
    }
    
    render() {
        const { googleSignInStart } = this.props
        return (
            <SignInContainer>
                <h2>I'm an existing customer</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" value={this.state.email} handleChange={this.handleChange} label="email" required='required' />
                    <FormInput type="password" name="password" value={this.state.password} handleChange={this.handleChange} label="password" required='required' />
                    <SignInButtons>
                        <FormButton type='submit'>Sign In</FormButton>
                        <FormButton type='button' onClick={googleSignInStart} isGoogleSignIn>Sign In with Google</FormButton>
                    </SignInButtons>
                    
                </form>
            </SignInContainer>
        )
    }
}

const mapDispatchtoProps = (dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (emailAndPassword) => dispatch(emailSignInStart(emailAndPassword))
})

export default connect(null, mapDispatchtoProps)(SignIn)