import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionFetching } from '../../redux/shop/shop-selectors'

import WithSpinner from '../../components/withSpinner/WithSpinner'
import CatalogOverview from '../../components/catalogOverview/CatalogOverview'

const mapStateToProps = createStructuredSelector({ isLoading: selectCollectionFetching })

const CatalogOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CatalogOverview)

export default CatalogOverviewContainer
