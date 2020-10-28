import React from 'react'

import { connect } from 'react-redux'
import { deleteItemFromCart, decreaseQuantity, addItemToCart } from '../../redux/cart/cart-actions'

import './CheckoutItem.scss'

function CheckoutItem({ cartItem, deleteItem, addItemToCart, decreaseQuantity }) {
    const { imageUrl, name, quantity, price } = cartItem
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt={name} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => decreaseQuantity(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItemToCart(cartItem)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => deleteItem(cartItem)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({ 
    deleteItem: (item) => dispatch(deleteItemFromCart(item)),
    addItemToCart: (item) => dispatch(addItemToCart(item)),
    decreaseQuantity: (item) => dispatch(decreaseQuantity(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
