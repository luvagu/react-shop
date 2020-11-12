const express = require('express')
const cors = require('cors')
const path = require('path')

if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    })
}

app.post('/payment', (req, res) => {
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'usd'
    }

    stripe.charges.create(body, (stripeErr, stripeRes) => {
        if (err) {
            res.status(500).send({ error: stripeErr })
        } else {
            res.status(200).send({ success: stripeRes })
        }
    })
})

app.listen(port, (err) => {
    if (err) throw err
    console.log('Server running on port ' + port)
})
