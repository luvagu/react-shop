import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCatalogSection } from '../../redux/catalog/catalog-selectors'

import CategoryItem from '../catalogMenuItem/CatalogMenuItem'

import './CatalogMenu.scss'

function Catalog({ sections }) {
    return (
      <div className="catalog-container">
          {sections.map(({ id, ...sectionKeys }) => (
              <CategoryItem key={id} {...sectionKeys} />
          ))}
      </div>
    )
}

const mapStateToProps = createStructuredSelector({ sections: selectCatalogSection })

export default connect(mapStateToProps)(Catalog)