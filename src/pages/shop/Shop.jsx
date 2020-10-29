import React from 'react'
import { Route } from 'react-router-dom'

import CatalogOverview from '../../components/catalogOverview/CatalogOverview'
import Category from '../category/Category'

function Shop() {
    return (
        <div>
            <Route exact path={`${match.path}`} component={CatalogOverview}></Route>
            <Route path={`${match.path}/:categoryId`} component={Category}></Route>
        </div>
    )
}

export default Shop
