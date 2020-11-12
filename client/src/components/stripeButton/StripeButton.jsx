import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

function StripeButton({ ammount }) {
    const amountForStripe = Math.round(ammount * 100)
    const stripeTestKey = 'pk_test_519LE50LWDjvp29Bflo1RmTfOE9ZAIoLgOR5FPq0yujNgchqvkTm7xEg4GQZjOMKywqrThByBboSffzMlRQbim1nN00thJDBzDg'

    const onToken = (token) => {
        axios({
            url: 'http://localhost:5000/payment',
            method: 'post',
            data: {
                amount: amountForStripe,
                token: token
            }
        })
        .then(res => alert('Payment successful'))
        .catch(err => {
            console.log('Payment Error: ', err)
            alert('There was an issue with your payment. Please be sure to use the provided test credit card details')
        })
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='React Shop'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/R3M.svg'
            description={`Your total is $${ammount}`}
            amount={amountForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={stripeTestKey}
        />
    )
}

export default StripeButton
