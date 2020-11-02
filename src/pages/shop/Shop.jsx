import React from 'react'
import { Route } from 'react-router-dom'

import CatalogOverview from '../../components/catalogOverview/CatalogOverview'
import CatalogCollection from '../catalogCollection/CatalogCollection'

function Shop({ match }) {
    return (
        <div>
            <Route exact path={`${match.path}`} component={CatalogOverview}></Route>
            <Route path={`${match.path}/:collectionId`} component={CatalogCollection}></Route>
        </div>
    )
}

export default Shop
