import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCatalogSection } from '../../redux/catalog/catalog-selectors'

import CatalogMenuItem from '../catalogMenuItem/CatalogMenuItem'

import './CatalogMenu.scss'

function CatalogMenu({ sections }) {
    return (
      <div className="catalog-container">
          {sections.map(({ id, ...sectionKeys }) => (
              <CatalogMenuItem key={id} {...sectionKeys} />
          ))}
      </div>
    )
}

const mapStateToProps = createStructuredSelector({ sections: selectCatalogSection })

export default connect(mapStateToProps)(CatalogMenu)