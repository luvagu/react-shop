import React from 'react'
import FormButton from '../formButton/FormButton'
import './CollectionItem.scss'

function CollectionItem({ imageUrl, name, price }) {
    return (
        <div className="collection-item">
            <div className="image" style={{backgroundImage: `url(${imageUrl})`}} />
            <div className="item-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <FormButton className="custom-button" type="button" inverted>Add to Cart</FormButton>
        </div>
    )
}

export default CollectionItem
