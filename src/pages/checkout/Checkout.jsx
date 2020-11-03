import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart-selectors'

import CheckoutItem from '../../components/checkoutItem/CheckoutItem'
import StripeButton from '../../components/stripeButton/StripeButton'

import { CheckoutContainer, CheckoutHeader, HeaderBlock, TotalContainer } from './CheckoutStyles'

function Cart({ cartItems, cartTotal }) {
    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            { cartItems.map(cartItem => (<CheckoutItem key={cartItem.id} cartItem={cartItem} />)) }
            <TotalContainer>Total: ${cartTotal}</TotalContainer>
            <StripeButton ammount={cartTotal} />
        </CheckoutContainer>
    )
}

const mapStateToProps = createStructuredSelector({ 
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
})

export default connect(mapStateToProps)(Cart)
