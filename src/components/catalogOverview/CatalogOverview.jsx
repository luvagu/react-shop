import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCatalogCollectionOverview } from '../../redux/shop/shop-selectors'

import CatalogCollections from '../catalogCollections/CatalogCollections'

import './CatalogOverview.scss'

function CatalogOverview({ collections }) {
    console.log('collections', collections)
    return (
        <div className="catalog-overview">
            { collections.map(({id, ...collectionKeys}) => (<CatalogCollections key={id} {...collectionKeys} />)) }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({ collections: selectCatalogCollectionOverview})

export default connect(mapStateToProps)(CatalogOverview)





