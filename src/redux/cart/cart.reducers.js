import CartActionTypes from "./cart.types"
import {addItemToCart, removeItem} from "./cart.utils"


const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

// cart reducer that listens for cases and passes it to root reducer
const CartReducer = (state = INITIAL_STATE, action) => {
    
    switch (action.type) {
        // case when we want to see our cart dropdown
        case CartActionTypes.TOGGLE_CART_HIDDEN :
            return {
                ...state,
                hidden: !state.hidden
            }
            // case when we want to add selected item to cart
            // we want to return an array of cart items
            // also we use a utils.js file to perform operations like check if the item already exist
            // and get the quantity of the same item in the array
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            } 
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItem(state.cartItems,action.payload)
            }    
        case CartActionTypes.REMOVE_CART_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => 
                    cartItem.id !== action.payload.id)
            }     
        default:
            return state    
    }
}

export default CartReducer;
