import React from 'react'

import { connect } from 'react-redux'
import { addItemToCart } from '../../redux/cart/cart-actions'

import FormButton from '../formButton/FormButton'

import './CollectionItem.scss'

function CollectionItem({ item, addItemToCart }) {
    const { imageUrl, name, price } = item
    return (
        <div className="collection-item">
            <div className="image" style={{backgroundImage: `url(${imageUrl})`}} />
            <div className="item-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <FormButton onClick={() => addItemToCart(item)} inverted>Add to Cart</FormButton>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addItemToCart: (item) => dispatch(addItemToCart(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)
