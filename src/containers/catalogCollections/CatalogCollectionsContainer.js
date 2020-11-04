import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionLoaded } from '../../redux/shop/shop-selectors'

import Spinner from '../../components/spinner/Spinner'
import CatalogCollection from '../../pages/catalogCollection/CatalogCollection'

const mapStateToProps = createStructuredSelector({ isLoading: (state) => !selectCollectionLoaded(state) })

const CatalogCollectionsContainer = compose(
    connect(mapStateToProps),
    Spinner
)(CatalogCollection)

export default CatalogCollectionsContainer
