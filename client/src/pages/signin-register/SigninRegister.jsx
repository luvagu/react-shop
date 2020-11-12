import React from 'react'
import SignIn from '../../components/signIn/SignIn'
import SignUp from '../../components/signUp/SignUp'

import { SignInRegisterContainer } from './SigninRegisterStyles'

function SigninRegister() {
    return (
        <SignInRegisterContainer>
            <SignIn />
            <SignUp />          
        </SignInRegisterContainer>
    )
}

export default SigninRegister

