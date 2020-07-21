// we use selectors for cases where we dont want the particular selector to be rerendered anytime state is updated 
// unless it absolutely has to (when it concerns it), for better performance
import {createSelector} from "reselect";

export const selectCart = state => state.cart;

// the input selectors must be sequential to the order the selectors was written
export const selectCartItems = createSelector(
    [selectCart], (cart) => cart.cartItems
);


//picking specific selectors to be passed into other components
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQty, cartItem) => accumulatedQty + cartItem.quantity,0)
)