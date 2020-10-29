import React from 'react'
import CollectionItem from '../catalogCollectionItem/CatalogCollectionItem'

import './CatalogCollections.scss'

function CatalogCollections({ title, items }) {
    return (
        <div className="catalog-collections">
            <div className="title">{title}</div>
            <div className="collection-items">
                {items.filter((item, i) => i < 4).map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

export default CatalogCollections
