import React from 'react'
import CollectionItem from '../collectionItem/CollectionItem'

import './CatalogCollections.scss'

function CatalogCollections({ title, items }) {
    return (
        <div className="catalog-collections">
            <div className="title">{title}</div>
            <div className="collection-items">
                {items.filter((item, i) => i < 4).map(({id, ...itemKeys}) => (
                    <CollectionItem key={id} {...itemKeys} />
                ))}
            </div>
        </div>
    )
}

export default CatalogCollections
