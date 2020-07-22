// this function is responsible for checking if item exists and also 
// increments how many times the item had been selected

export const addItemToCart = (cartItems, cartItemToAdd) => {
// use find() to get if item exists, and return true or false to existingCartItem
    const existingCartItem = cartItems.find(cartItem => 
        cartItem.id === cartItemToAdd.id
        );

    // if it exists, spread out the items , and increment quantity
        // if it doesnt exists just return the item (wont happen cause if statement fails)
        if (existingCartItem) {
            return cartItems.map(cartItem => 
                cartItem.id === cartItemToAdd.id
                 ? { ...cartItem, quantity: cartItem.quantity + 1}
                 : cartItem
                )

        }

        // this function then returns either a new item with quantity set to 1

    return [ ...cartItems, {...cartItemToAdd, quantity: 1 }]    
}

// this is just for the reducing pointers in the checkoutpage
// and also for deleting the last quantity 
export const removeItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => 
        cartItem.id === cartItemToRemove.id
        );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => 
            cartItem.id !== cartItemToRemove.id
            )
    }
    
    if (existingCartItem) {
        return cartItems.map(cartItem => 
            (cartItem.id === cartItemToRemove.id) ?
             {
                ...cartItem,
                quantity: cartItem.quantity - 1 
             } :
             cartItem   
        )
    }
}