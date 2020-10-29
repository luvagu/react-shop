import React from 'react'
import StripeCheckout from 'react-stripe-checkout'


function StripeButton({ ammount }) {
    const priceForStripe = Math.round(ammount * 100)
    const stripeTestKey = 'pk_test_519LE50LWDjvp29Bflo1RmTfOE9ZAIoLgOR5FPq0yujNgchqvkTm7xEg4GQZjOMKywqrThByBboSffzMlRQbim1nN00thJDBzDg'
    console.log('priceForStripe', priceForStripe)

    const onToken = (token) => {
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='React Shop'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/R3M.svg'
            description={`Your total is $${ammount}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={stripeTestKey}
        />
    )
}

export default StripeButton
