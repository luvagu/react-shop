import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCatalogSection } from '../../redux/catalog/catalog-selectors'

import CatalogMenuItem from '../catalogMenuItem/CatalogMenuItem'

import { CatalogContainer } from './CatalogMenuStyles'

const CatalogMenu = ({ categories }) => {
    return (
      <CatalogContainer>
          {categories.map(({ id, ...sectionKeys }) => (
              <CatalogMenuItem key={id} {...sectionKeys} />
          ))}
      </CatalogContainer>
    )
}

const mapStateToProps = createStructuredSelector({ categories: selectCatalogSection })

export default connect(mapStateToProps)(CatalogMenu)