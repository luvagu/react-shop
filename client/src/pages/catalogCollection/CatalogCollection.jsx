import React from 'react'

import { connect } from 'react-redux'
import { selectCatalogCollection } from '../../redux/shop/shop-selectors'

import CatalogCollectionItem from '../../components/catalogCollectionItem/CatalogCollectionItem'
import { CatalogCollectionContainer, CollectionItemsContainer, CollectionTitle } from './CatalogCollectionStyles'

const CatalogCollection = ({ collection }) => {
    const { title, items } =  collection
    return (
        <CatalogCollectionContainer>
            <CollectionTitle>{title}</CollectionTitle>
            <CollectionItemsContainer>
                {items.map(item => (
                    <CatalogCollectionItem key={item.id} item={item} />
                ))}
            </CollectionItemsContainer>
        </CatalogCollectionContainer>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCatalogCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CatalogCollection)
