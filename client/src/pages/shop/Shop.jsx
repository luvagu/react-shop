import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchCollectionsStart } from '../../redux/shop/shop-actions'

import CatalogOverviewContainer from '../../containers/catalogOverview/CatalogOverviewContainer'
import CatalogCollectionsContainer from '../../containers/catalogCollections/CatalogCollectionsContainer'

const Shop = ({ fetchCollectionsStart, match }) => {
    
    useEffect(() => {
        fetchCollectionsStart()
    }, [fetchCollectionsStart])

    return (
        <div>
            <Route exact path={`${match.path}`} component={CatalogOverviewContainer} />
            <Route path={`${match.path}/:collectionId`} component={CatalogCollectionsContainer} />
        </div>
    )
    
}

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(Shop)
