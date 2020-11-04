import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionLoaded } from '../../redux/shop/shop-selectors'

import Spinner from '../../components/spinner/Spinner'
import CatalogCollections from '../../components/catalogCollections/CatalogCollections'

const mapStateToProps = createStructuredSelector({ isLoading: (state) => !selectCollectionLoaded(state) })

const CatalogCollectionsContainer = compose(
    connect(mapStateToProps),
    Spinner
)(CatalogCollections)

export default CatalogCollectionsContainer