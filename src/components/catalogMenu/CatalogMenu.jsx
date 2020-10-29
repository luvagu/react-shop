import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCatalogSection } from '../../redux/catalog/catalog-selectors'

import CatalogMenuItem from '../catalogMenuItem/CatalogMenuItem'

import './CatalogMenu.scss'

function CatalogMenu({ categories }) {
    return (
      <div className="catalog-container">
          {categories.map(({ id, ...sectionKeys }) => (
              <CatalogMenuItem key={id} {...sectionKeys} />
          ))}
      </div>
    )
}

const mapStateToProps = createStructuredSelector({ categories: selectCatalogSection })

export default connect(mapStateToProps)(CatalogMenu)