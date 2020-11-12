import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCatalogCollectionOverview } from '../../redux/shop/shop-selectors'

import CatalogCollections from '../catalogCollections/CatalogCollections'

import { CatalogOverviewContainer } from './CatalogOverviewStyles'

function CatalogOverview({ collections }) {
    return (
        <CatalogOverviewContainer>
            { collections.map(({id, ...collectionKeys}) => (<CatalogCollections key={id} {...collectionKeys} />)) }
        </CatalogOverviewContainer>
    )
}

const mapStateToProps = createStructuredSelector({ collections: selectCatalogCollectionOverview})

export default connect(mapStateToProps)(CatalogOverview)
