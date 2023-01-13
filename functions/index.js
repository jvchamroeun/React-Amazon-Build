const functions = require("firebase-functions");
const express = require("express");
const cors = require('cors');
const { response } = require("express");
const { RepeatOneSharp } = require("@mui/icons-material");
const stripe = require("stripe")('sk_test_51MPaZYK9hdeR8AbJijdS0571lyI6O51z0oMrNdJhbtx4z4Dn8CUoCmLVlCCwRT9nfgyfr3X20qR7zLGoil89uHQG00T9l3jpiy')

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('Hello'));
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('Payment request recieved for the amount of >>> ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    response.status(201).send({
        clientSec: paymentIntent.client_secret,
    })
})

exports.api = functions.https.onRequest(app);