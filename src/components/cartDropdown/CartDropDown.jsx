import React from 'react'
import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart-selectors'
import { toggleCartHidden } from '../../redux/cart/cart-actions'

import FormButton from '../formButton/FormButton'
import CartItem from '../cartItem/CartItem'

import './CartDropDown.scss'

function CartDropDown({ cartItems, history, dispatch }) {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length
                        ? cartItems.map(item => (<CartItem key={item.id} item={item} />))
                        : (<span className="empty-message">Your cart is empty</span>)
                }
            </div>
            <FormButton 
                onClick={() => { 
                        history.push('/checkout')
                        dispatch(toggleCartHidden())
                    }
                } 
                type="button"
            >
                Go to Checkout
            </FormButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({ cartItems: selectCartItems })

export default withRouter(connect(mapStateToProps)(CartDropDown))
