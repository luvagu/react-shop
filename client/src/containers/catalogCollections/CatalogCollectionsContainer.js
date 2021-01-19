import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionLoaded } from '../../redux/shop/shop-selectors'

import WithSpinner from '../../components/withSpinner/WithSpinner'
import CatalogCollection from '../../pages/catalogCollection/CatalogCollection'

const mapStateToProps = createStructuredSelector({ isLoading: (state) => !selectCollectionLoaded(state) })

const CatalogCollectionsContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CatalogCollection)

export default CatalogCollectionsContainer
