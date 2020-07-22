import React from "react";
import CustomButton from "../custom-button/custom-button"
import {connect} from "react-redux";
import {addItem} from "../../redux/cart/cart.action"

import "./collection-item.scss"

// this function renders how the item we are iterating will be displayed
// item is the current item preview collection is iterating on
// addItem is the dispatch action function

const CollectionItem = ({item, addItem}) => {
 // destructuring properties of user that would be used in rendering  
    const { imageUrl, name, price} = item
    return (
    <div className="collection-item">
        <div className="image"
            style={{backgroundImage: `url(${imageUrl})`}}
        >
        </div>
        <div className ="collection-footer">
            <span className="name"> {name} </span>
            <span className="price"> {`$${price}`} </span>
        </div>
{/* addItem dispatch function is attached to button, so onClick fires it */}
        <CustomButton inverted onClick = {()=> addItem(item)} >ADD TO CART</CustomButton>
    </div>
)}

// this is the redux function that listens for any dispatch action function and passes it to connect
//connect takes it and passes it to the appropriate reducer
// addItem is a the cart action function that gets the details of the current item that is then passed to cart reducer
const mapDispatchToProp = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProp)(CollectionItem)