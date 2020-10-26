import React from 'react'
import SignIn from '../../components/signIn/SignIn'
import SignUp from '../../components/signUp/SignUp'
import './SigninRegister.scss'

function SigninRegister() {
    return (
        <div className="sign-in-and-register">
            <SignIn />
            <SignUp />          
        </div>
    )
}

export default SigninRegister

