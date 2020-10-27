import React from 'react'

import FormButton from '../formButton/FormButton'

import './CartDropDown.scss'

function CartDropDown() {
    return (
        <div className="cart-dropdown">
            <div className="cart-items"></div>
            <FormButton type="button">Go to Checkout</FormButton>
        </div>
    )
}

export default CartDropDown
