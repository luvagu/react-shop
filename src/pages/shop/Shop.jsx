import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import { connect } from 'react-redux'
import { updateCollections } from '../../redux/shop/shop-actions'

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

import Spinner from '../../components/spinner/Spinner'
import CatalogOverview from '../../components/catalogOverview/CatalogOverview'
import CatalogCollection from '../catalogCollection/CatalogCollection'

const CatalogOverviewLoading = Spinner(CatalogOverview)
const CatalogCollectionLoading = Spinner(CatalogCollection)

class Shop extends Component {

    state = {
        loading: true
    }

    unsubscribeFromSnapshot = null

    componentDidMount() {
        const { updateCollections } = this.props
        const collectionRef = firestore.collection('collections')

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collectionsMap)
            this.setState({ loading: false })
        })
    }

    render() {
        const { match } = this.props
        const { loading } = this.state
        return (
            <div>
                <Route exact path={`${match.path}`} render={(props) => <CatalogOverviewLoading isLoading={loading} {...props} /> } ></Route>
                <Route path={`${match.path}/:collectionId`} render={(props) => <CatalogCollectionLoading isLoading={loading} {...props} /> }></Route>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(Shop)
