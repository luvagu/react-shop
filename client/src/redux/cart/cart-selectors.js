import { createSelector } from 'reselect'

const selectCart = (state) => state.cart

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartDropDownHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((ac, cv) => ac + cv.quantity, 0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((ac, cv) => ac + (cv.price * cv.quantity), 0)
)
