import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchCollectionsStartAsync } from '../../redux/shop/shop-actions'

import CatalogOverviewContainer from '../../containers/catalogOverview/CatalogOverviewContainer'
import CatalogCollectionsContainer from '../../containers/catalogCollections/CatalogCollectionsContainer'

class Shop extends Component {

    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props

        fetchCollectionsStartAsync()
    }

    render() {
        const { match } = this.props
        return (
            <div>
                <Route exact path={`${match.path}`} component={CatalogOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} component={CatalogCollectionsContainer} />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(null, mapDispatchToProps)(Shop)
