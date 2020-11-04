import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionFetching } from '../../redux/shop/shop-selectors'

import Spinner from '../../components/spinner/Spinner'
import CatalogOverview from '../../components/catalogOverview/CatalogOverview'

const mapStateToProps = createStructuredSelector({ isCollectionFetching: selectCollectionFetching })

const CatalogOverviewContainer = compose(
    connect(mapStateToProps),
    Spinner
)(CatalogOverview)

export default CatalogOverviewContainer