import {createSelector} from "reselect";




const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    collections => Object.keys(collections).map(
        key => collections[key] 
    )
)


// this finds the current collection item we are on(hats, women,men etc)
export const selectCollection = collectionUrlParam => 
    createSelector(
        [selectShopCollections],
        collections => collections[collectionUrlParam]
    );
