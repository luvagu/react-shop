import React from 'react'
import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart-selectors'
import { toggleCartHidden } from '../../redux/cart/cart-actions'

import CartItem from '../cartItem/CartItem'

import { CartDropdownButton, CartDropDownContainer, CartItems, EmptyMessage } from './CartDropDownStyles'

function CartDropDown({ cartItems, history, dispatch }) {
    return (
        <CartDropDownContainer>
            <CartItems>
                { cartItems.length
                    ? cartItems.map(item => (<CartItem key={item.id} item={item} />))
                    : (<EmptyMessage>Your cart is empty</EmptyMessage>)
                }
            </CartItems>
            <CartDropdownButton 
                type="button" 
                onClick={() => { 
                    history.push('/checkout')
                    dispatch(toggleCartHidden()) }
                }
            >
                Go to Checkout
            </CartDropdownButton>
        </CartDropDownContainer>
    )
}

const mapStateToProps = createStructuredSelector({ cartItems: selectCartItems })

export default withRouter(connect(mapStateToProps)(CartDropDown))
