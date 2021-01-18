import cartActionTypes from './cart-types'
import { groupSameItemsInCart, decreaseQtyAndDeleteItem } from './cart-utils'

const INITIAL_STATE = {
    hidden: true,
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
        case cartActionTypes.DECREASE_QTY_AND_DELETE_ITEM:
            return {
                ...state,
                cartItems: decreaseQtyAndDeleteItem(state.cartItems, action.payload)
            }
        case cartActionTypes.DELETE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
            }
        case cartActionTypes.CLEAR_CART:
            return {
                ...state,
                cartItems: []
            }
        case cartActionTypes.SET_CART_FROM_FIREBASE:
            return {
                ...state,
                cartItems: action.payload
            }
        default:
            return state
    }
}

export default cartReducer