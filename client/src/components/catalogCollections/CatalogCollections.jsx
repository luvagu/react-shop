import React from 'react'
import CollectionItem from '../catalogCollectionItem/CatalogCollectionItem'
import { withRouter } from 'react-router-dom'

import { CatalogCollectionsContainer, CollectionItemsContainer, TitleContainer } from './CatalogCollectionsStyles'

const CatalogCollections = ({ title, items, routeName, history, match }) => {
    return (
        <CatalogCollectionsContainer>
            <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>{title}</TitleContainer>
            <CollectionItemsContainer>
                {items.filter((item, i) => i < 4).map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </CollectionItemsContainer>
        </CatalogCollectionsContainer>
    )
}

export default withRouter(CatalogCollections)
