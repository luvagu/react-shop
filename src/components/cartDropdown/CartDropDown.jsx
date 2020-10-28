import React from 'react'
import { connect } from 'react-redux'

import FormButton from '../formButton/FormButton'
import CartItem from '../cartItem/CartItem'

import './CartDropDown.scss'

function CartDropDown({ cartItems }) {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.map(item => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>
            <FormButton type="button">Go to Checkout</FormButton>
        </div>
    )
}

const mapStateToProps = ({ cart: { cartItems } }) => ({ cartItems })

export default connect(mapStateToProps)(CartDropDown)
