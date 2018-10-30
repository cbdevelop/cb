'use strict';

const _ = require('underscore');
const dbService = require('../include/database');
const appConfig = require('../include/appconfig');
const utils = require('../include/utilities');
const moment = require('moment-timezone');


module.exports = () => {

    global.app.get('/v1/test', (req, res, next) => {
        res.status(200).json('API-WORKING-FINE')
    });

    global.app.post('/v1/address', (req, res, next) => {
        var postObj = req.body;
        if (postObj && postObj.hasOwnProperty('fullName') && postObj.hasOwnProperty('phoneNumber') && postObj.hasOwnProperty('address') && postObj.hasOwnProperty('landmark') && postObj.hasOwnProperty('city') && postObj.hasOwnProperty('state') && postObj.hasOwnProperty('pincode')) {
            var fullName = utils.isNameValid(postObj.fullName);
            if (['', undefined, 'undefined', null, 'null'].indexOf(postObj) == -1 && fullName && utils.isPhoneNumberValid(postObj.phoneNumber) && utils.isAddressValid(postObj.address) && utils.isLandmarkValid(postObj.landmark) && utils.isTextValid(postObj.city) && utils.isTextValid(postObj.state) && utils.isPinCodeValid(postObj.pincode)) {
                dbService.findDocs('address', { fullName: fullName, phoneNumber: postObj.phoneNumber, address: postObj.address, landmark: postObj.landmark, city: postObj.city, state: postObj.state, pincode: postObj.pincode, addressVerified: true, status: true }).then(async(addressArray) => {
                    if (addressArray && addressArray instanceof Array && addressArray.length > 0) {
                        res.status(302).send({ message: 'error', messageText: 'Address already existed!' });
                    } else {
                        // *********************************************************************
                        var payload = {
                            uid: await utils.getNextSequenceValue('address'),
                            fullName: fullName,
                            phoneNumber: postObj.phoneNumber,
                            address: postObj.address,
                            landmark: postObj.landmark,
                            city: postObj.city,
                            state: postObj.state,
                            pincode: postObj.pincode,
                            addressVerified: false,
                            createdTime: moment().toDate('YYYY-MM-DD HH:mm:ss'),
                            status: true
                        }
                        var insertAddress = await utils.insertDocInDb('address', payload);
                        if (insertAddress) {
                            res.status(200).send({ message: 'success', messageText: 'Address added successfully!' });
                        } else {
                            res.status(503).send({ message: 'error', messageText: 'Adding address is failed!, Please try after some time.' });
                        }
                        // *********************************************************************
                    }
                }, (error) => {
                    res.status(500).send({ message: 'error', messageText: appConfig.errorMessages.somethingWentWrong });
                });
            } else {
                res.status(400).send({ message: 'error', messageText: appConfig.errorMessages.badRequest });
            }
        } else {
            res.status(400).send({ message: 'error', messageText: appConfig.errorMessages.badRequest });
        }
    }, (error) => {
        res.status(500).send({ message: 'error', messageText: appConfig.errorMessages.somethingWentWrong });
    });
};