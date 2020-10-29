import React from 'react'
import CollectionItem from '../catalogCollectionItem/CatalogCollectionItem'
import { withRouter } from 'react-router-dom'

import './CatalogCollections.scss'

function CatalogCollections({ title, items, routeName, history, match }) {
    return (
        <div className="catalog-collections">
            <h1 onClick={() => history.push(`${match.url}/${routeName}`)} className="title">{title}</h1>
            <div className="collection-items">
                {items.filter((item, i) => i < 4).map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

export default withRouter(CatalogCollections)
