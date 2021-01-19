import React from 'react'

import { connect } from 'react-redux'
import { addItemToCart } from '../../redux/cart/cart-actions'

import { AddToCartButton, BackgroundImage, CollectionFooterContainer, CollectionItemContainer, NameContainer, PriceContainer } from './CatalogCollectionItemStyles'

const CatalogCollectionItem = ({ item, addItemToCart }) => {
    const { imageUrl, name, price } = item
    return (
        <CollectionItemContainer>
            <BackgroundImage className="image" imageUrl={imageUrl} />
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>${price}</PriceContainer>
            </CollectionFooterContainer>
            <AddToCartButton onClick={() => addItemToCart(item)} inverted>Add to Cart</AddToCartButton>
        </CollectionItemContainer>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addItemToCart: (item) => dispatch(addItemToCart(item))
})

export default connect(null, mapDispatchToProps)(CatalogCollectionItem)
