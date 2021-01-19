import React, { useEffect, lazy, Suspense } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchCollectionsStart } from '../../redux/shop/shop-actions'

import Spinner from '../../components/spinner/Spinner'

import { ShopPageContainer } from './ShopStyles'

const CatalogOverviewContainer = lazy(() => import('../../containers/catalogOverview/CatalogOverviewContainer'))
const CatalogCollectionsContainer = lazy(() => import('../../containers/catalogCollections/CatalogCollectionsContainer'))

const Shop = ({ fetchCollectionsStart, match }) => {
    
    useEffect(() => {
        fetchCollectionsStart()
    }, [fetchCollectionsStart])

    return (
        <ShopPageContainer>
            <Suspense fallback={<Spinner />}>
                <Route exact path={`${match.path}`} component={CatalogOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} component={CatalogCollectionsContainer} />
            </Suspense>
        </ShopPageContainer>
    )
}

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(Shop)
