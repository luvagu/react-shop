import { createSelector } from 'reselect'
import memoize from 'lodash.memoize'

const selectShop = (state) => state.shop

export const selectShopCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
)

export const selectCatalogCollectionOverview = createSelector(
    [selectShopCollections],
    (collections) => Object.values(collections)
)

export const selectCatalogCollection = memoize((collectionUrlParam) => createSelector(
    [selectShopCollections],
    (collections) => collections[collectionUrlParam]
))