const _ = require('underscore');
const dbService = require('../include/database');
const appConfig = require('../include/appconfig');
const utils = require('../include/utilities');
const moment = require('moment-timezone');

const paypal = require('paypal-rest-sdk');
const cors = require('cors');
app.use(cors());

app.locals.baseurl = 'http://localhost:4200';

var config = {
    "port": 4200,
    "api": {
        "host": "api.sandbox.paypal.com",
        "port": "",
        "client_id": "AZdO5AqE7VTHwV7SPMFFSgwCHu77ougqCo7KyePTPNDb0YYelWFvKxba95fkuU-SHOi6EGj2l7qcoA8H",
        "client_secret": "EBFp9-2Fn9bNXN1n2OA3rXmEmtCV-CTLLyKBgpeBXtgEWBM3mBi8kmOJw61qyoTI2Lwv7Xwm2W-MQ7zQ",
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        }
    }
}

paypal.configure(config.api);

module.exports = () => {

    global.app.post('/v1/paynow', (req, res, next) => {
        console.log('paypal called');
        var payment = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls": {
                "return_url": app.locals.baseurl + "payment/success",
                "cancel_url": app.locals.baseurl + "payment/cancel"
            },
            "transactions": [{
                "amount": {
                    "total": 10,
                    "currency": "USD"
                },
                "description": "Test Payment"
            }]
        };

        paypal.payment.create(payment, function(error, payment) {
            if (error) {
                console.log(error);
            } else {
                if (payment.payer.payment_method === 'paypal') {
                    req.paymentId = payment.id;
                    var redirectUrl;
                    console.log(payment);
                    for (var i = 0; i < payment.links.length; i++) {
                        var link = payment.links[i];
                        if (link.method === 'REDIRECT') {
                            redirectUrl = link.href;
                        }
                    }
                    res.redirect(redirectUrl);
                }
            }
        });

    }, (error) => {
        res.status(500).send({
            message: 'error',
            messageText: appConfig.errorMessages.somethingWentWrong
        });
    });
};