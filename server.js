const express = require('express')
const cors = require('cors')
const path = require('path')
const compression = require('compression')
const enforceSSL = require('express-sslify')

if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

if (process.env.NODE_ENV === 'production') {
    app.use(compression())
    app.use(enforceSSL.HTTPS({ trustProtoHeader: true }))
    app.use(express.static(path.join(__dirname, 'client/build')))

    app.get('*', (req, res) => {
        res.send(path.join(__dirname, 'client/build', 'index.html'))
    })
}

// PWA specific
app.get('/service-worker.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'))
})

app.post('/payment', (req, res) => {
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'usd'
    }

    stripe.charges.create(body, (stripeErr, stripeRes) => {
        if (stripeErr) {
            res.status(500).send({ error: stripeErr })
        } else {
            res.status(200).send({ success: stripeRes })
        }
    })
})

app.listen(port, (err) => {
    if (err) throw err
    console.log('Server listening on port ' + port)
})
