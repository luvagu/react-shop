import { all, call, put, select, takeLatest } from 'redux-saga/effects'

import { getUserCartRef } from '../../firebase/firebase.utils'

import userActionTypes from '../user/user-types'
import { selectCurrentUser } from '../user/user-selectors'

import { clearCart, setCartFromFirebase } from './cart-actions'
import { selectCartItems } from './cart-selectors'
import cartActionTypes from './cart-types'

export function* clearCartOnSignOut() {
    yield put(clearCart())
}

export function* updateCartInFirebase() {
    const currentUser = yield select(selectCurrentUser)

    if (currentUser) {
        try {
            const { segments } = currentUser.id.f_.path
            // console.log('userId', segments[1])
            const cartRef = yield getUserCartRef(segments[1])
            const cartItems = yield select(selectCartItems)
            yield cartRef.update({ cartItems })
        } catch (error) {
            console.log(error)
        }
    }
}

export function* checkCartFromFirebase({ payload: user }) {
    const { segments } = user.id.f_.path
    // console.log('userId', segments[1])

    const cartRef = yield getUserCartRef(segments[1])
    const cartSnapshot = yield cartRef.get()
    yield put(setCartFromFirebase(cartSnapshot.data().cartItems))
}

export function* onSignOutSuccess() {
    yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export function* onUserSignIn() {
    yield takeLatest(userActionTypes.SIGN_IN_SUCCESS, checkCartFromFirebase);
}

export function* onCartChange() {
    yield takeLatest(
      [
        cartActionTypes.ADD_ITEM_TO_CART,
        cartActionTypes.DECREASE_QTY_AND_DELETE_ITEM,
        cartActionTypes.DELETE_ITEM_FROM_CART
      ],
      updateCartInFirebase
    )
}

export function* cartSagas() {
    yield all([call(onSignOutSuccess), call(onUserSignIn), call(onCartChange)])
}