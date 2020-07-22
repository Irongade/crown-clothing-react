import CartActionTypes from "./cart.types"


export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
}   
)

export const addItem = user => ({
    type: CartActionTypes.ADD_ITEM,
    payload: user
})

export const removeCartItem = user => ({
    type: CartActionTypes.REMOVE_CART_ITEM,
    payload: user
})

export const removeItem = user => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: user
})