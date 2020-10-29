import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectShopCollections } from '../../redux/shop/shop-selectors'

import CatalogCollections from '../catalogCollections/CatalogCollections'

import './CatalogOverview.scss'

function CatalogOverview({ collections }) {
    return (
        <div className="catalog-overview">
            { collections.map(({id, ...collectionKeys}) => (<CatalogCollections key={id} {...collectionKeys} />)) }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({ collections: selectShopCollections})

export default connect(mapStateToProps)(CatalogOverview)





