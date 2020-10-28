import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart-selectors'

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

const mapStateToProps = createStructuredSelector({ cartItems: selectCartItems })

export default connect(mapStateToProps)(CartDropDown)
