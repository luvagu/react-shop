import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart-selectors'

import CheckoutItem from '../../components/checkoutItem/CheckoutItem'

import './Checkout.scss'
import StripeButton from '../../components/stripeButton/StripeButton'

function Cart({ cartItems, cartTotal }) {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            { cartItems.map(cartItem => (<CheckoutItem key={cartItem.id} cartItem={cartItem} />)) }
            <div className="total">Total: ${cartTotal}</div>
            <StripeButton ammount={cartTotal} />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({ 
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
})

export default connect(mapStateToProps)(Cart)
