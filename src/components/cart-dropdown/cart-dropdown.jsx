import React from "react";
import CustomButton from "../custom-button/custom-button"
import CartItem from "../cart-item/cart-item"
import {connect} from "react-redux"
import {selectCartItems} from "../../redux/cart/cart.selectors"

import {withRouter } from "react-router-dom"
// this component is responsible for rendering the cart dropdown that displays every item (hats,shoes etc) we want to add to cart

import "./cart-dropdown.scss"

const CartDropdown = ( {cartItems, history }) => (
    <div className= "cart-dropdown">
        {
            cartItems.length ?
        <div className="cart-items" > 
            { cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}   /> ) }
        </div>
        :
        <span className="empty-message"> Your cart is empty </span>

        }
        <CustomButton onClick= {()=> history.push("/checkout") } > GO TO CHECKOUT </CustomButton>

    </div>
)

// making use of cart selectors and keepin this component up to date on state changes
const mapStateToProps = (state ) => ( {
    cartItems: selectCartItems(state)
}
)

export default withRouter(connect(mapStateToProps)(CartDropdown));