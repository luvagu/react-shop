import { takeLatest, put, all, call } from 'redux-saga/effects'

import userActionTypes from './user-types'
import { signInSuccess, signInFailure, signOutSuccess, signOutFailure, signUpFailure } from './user-actions'

import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils'

function* _getSnapshotFromUserAuth(userAuth, additionalData) {
    try {

        const userRef = yield call(createUserProfileDocument, userAuth, additionalData)
        const userSnapshot = yield userRef.get()
        yield put(signInSuccess({ id: userSnapshot, ...userSnapshot.data() }))

    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider)
        yield _getSnapshotFromUserAuth(user)
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield yield auth.signInWithEmailAndPassword(email, password)
        yield _getSnapshotFromUserAuth(user)
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* onEmailSignInStart() {
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser()
        if (!userAuth) return
        yield _getSnapshotFromUserAuth(userAuth)
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* onCheckUserSession() {
    yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* signUpWithEmail({ payload: { email, password, displayName } }) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password)
        yield _getSnapshotFromUserAuth(user, { displayName })
    } catch (error) {
        yield put(signUpFailure(error))
    }
}

export function* onSignUpStart() {
    yield takeLatest(userActionTypes.SIGN_UP_START, signUpWithEmail)
}

export function* signOut() {
    try {

        yield auth.signOut()
        yield put(signOutSuccess())

    } catch (error) {
        yield put(signOutFailure(error))
    }
}

export function* onSignOutStart() {
    yield takeLatest(userActionTypes.SIGN_OUT_START, signOut)
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart)
    ])
}