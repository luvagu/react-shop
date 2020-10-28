import { createStore } from 'redux'
import { createSelector } from 'reselect'

const selectCatalog = (state) => state.catalog

export const selectCatalogSection = createSelector(
    [selectCatalog],
    (catalog) => catalog.sections
)