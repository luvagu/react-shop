import cartActionTypes from './cart-types'

export const toggleCartHidden = () => ({
    type: cartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItemToCart = (item) => ({
    type: cartActionTypes.ADD_ITEM_TO_CART,
    payload: item
})

export const decreaseQuantity = (item) => ({
    type: cartActionTypes.DECREASE_QTY_AND_DELETE_ITEM,
    payload: item
})

export const deleteItemFromCart = (item) => ({
    type: cartActionTypes.DELETE_ITEM_FROM_CART,
    payload: item
})

export const clearCart = () => ({
    type: cartActionTypes.CLEAR_CART
})