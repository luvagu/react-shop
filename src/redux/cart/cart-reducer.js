import cartActionTypes from './cart-types'
import { groupSameItemsInCart } from './cart-utils'

const INITIAL_STATE = {
    hidden: false,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case cartActionTypes.ADD_ITEM_TO_CART:
            return {
                ...state,
                cartItems: groupSameItemsInCart(state.cartItems, action.payload)
            }
        default:
            return state
    }
}

export default cartReducer