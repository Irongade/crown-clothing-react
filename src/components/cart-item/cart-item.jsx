import React from "react";

import "./cart-item.scss";


const CartItem = ({item: {imageUrl, name, price, quantity}}) => (
    <div className="cart-item">
        <div className="img">
            <img src={imageUrl} alt="item"/>
        </div>
        <div className="item-details">
            <span className="name"> {name} </span>
            <span className="price"> {quantity} x {price} </span>
        </div>
    </div>
)


export default CartItem;