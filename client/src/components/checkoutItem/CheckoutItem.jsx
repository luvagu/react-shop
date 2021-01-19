import React from 'react'

import { connect } from 'react-redux'
import { addItemToCart, decreaseQuantity, deleteItemFromCart } from '../../redux/cart/cart-actions'

import { CheckoutItemContainer, ImageContainer, ItemInfoContainer, QuantityContainer, RemoveButton } from './CheckoutItemStyles'

const CheckoutItem = ({ cartItem, deleteItem, addItemToCart, decreaseQuantity }) => {
    const { imageUrl, name, quantity, price } = cartItem
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={name} />
            </ImageContainer>
            <ItemInfoContainer>{name}</ItemInfoContainer>
            <QuantityContainer>
                <div onClick={() => decreaseQuantity(cartItem)}>&#10094;</div>
                <span>{quantity}</span>
                <div onClick={() => addItemToCart(cartItem)}>&#10095;</div>
            </QuantityContainer>
            <ItemInfoContainer>{price}</ItemInfoContainer>
            <RemoveButton onClick={() => deleteItem(cartItem)}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

const mapDispatchToProps = (dispatch) => ({ 
    addItemToCart: (item) => dispatch(addItemToCart(item)),
    decreaseQuantity: (item) => dispatch(decreaseQuantity(item)),
    deleteItem: (item) => dispatch(deleteItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
