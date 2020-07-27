import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey ="pk_test_51H9HdEKcf41IBjfj5Xrc69HIKI2UFPkmkI9MJrF8D5fKo5Gl67tuwdxmEBr3zFqp5mlkWMKbzruV7FXOvy03IGd000XIxwpi4v"

    const onToken = token => {
        console.log(token);
        alert("Payment Successful")
    }

    return ( 
        <StripeCheckout
            label = "Pay Now"
            name = " CRWN Clothing Ltd"
            billingAddress
            shippingAddress
            image = "https://svgshare.com/i/CUz.svg"
            description = { `Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel= "Pay Now"
            token= {onToken}
            stripeKey = {publishableKey}
        />
    )
}


export default StripeCheckoutButton;