import React from 'react'

import { connect } from 'react-redux'
import { selectCatalogCollection } from '../../redux/shop/shop-selectors'

import CatalogCollectionItem from '../../components/catalogCollectionItem/CatalogCollectionItem'

import './CatalogCollection.scss'

function CatalogCollection({ collection }) {
    const { title, items } =  collection
    return (
        <div className="catalog-collection">
            <h2 className="title">{title}</h2>
            <div className="items">
                {items.map(item => (
                    <CatalogCollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCatalogCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CatalogCollection)
