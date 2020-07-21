import CartActionTypes from "./cart.types"


export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
}   
)

export const addItem = user => ({
    type: CartActionTypes.ADD_ITEM,
    payload: user
})

