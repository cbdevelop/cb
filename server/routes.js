const express = require('express');
const router = express.Router();

router.get('/test', (req, res, next) => {
    res.status(200).json("welcome");
});

/* Payapal API */

// paypal config
var config = {
    "port": 5000,
    "api": {
        "host": "api.sandbox.paypal.com",
        "port": "",
        "client_id": "AZdO5AqE7VTHwV7SPMFFSgwCHu77ougqCo7KyePTPNDb0YYelWFvKxba95fkuU-SHOi6EGj2l7qcoA8H", // your paypal application client id
        "client_secret": "EBFp9-2Fn9bNXN1n2OA3rXmEmtCV-CTLLyKBgpeBXtgEWBM3mBi8kmOJw61qyoTI2Lwv7Xwm2W-MQ7zQ" // your paypal application secret id
    }
}

paypal.configure(config.api);


router.get('payment/success', function(req, res) {
    res.status(201).json("Payment transfered successfully.");
});

router.get('payment/cancel', function(req, res) {
    res.status(500).json("Payment canceled successfully.");
});

router.post('/paynow', function(req, res) {
    var payment = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "localhost:4200/payment/success",
            "cancel_url": "localhost:4200/payment/cancel"
        },
        "transactions": [{
            "amount": {
                "total": 1,
                "currency": 'INR'
            },
            "description": 'caterbinge Purchase'
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
});

/* Payapal APIs End */

module.exports = router;