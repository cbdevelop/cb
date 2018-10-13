const _ = require('underscore');
const dbService = require('../include/database');
const appConfig = require('../include/appconfig');
const utils = require('../include/utilities');
const moment = require('moment-timezone');

module.exports = () => {
    global.app.post('/v1/userregister', (req, res, next) => {
        var postObj = req.body;
        
        if (postObj && postObj.hasOwnProperty('fullName') &&  postObj.hasOwnProperty('phoneNumber') && postObj.hasOwnProperty('email') && postObj.hasOwnProperty('password')) {
            var fullName = utils.isNameValid(postObj.fullName);
           
            if (['', undefined, 'undefined', null, 'null'].indexOf(postObj) == -1 && fullName && utils.isPhoneNumberValid(postObj.phoneNumber) && utils.isEmailValid(postObj.email) &&  utils.isPasswordValid(postObj.password)) {
                dbService.findDocs('users', {
                    email: postObj.email,
                    // phoneNumber: postObj.phoneNumber,
                    // userVerified: true,
                    status: true
                }).then(async (userArray) => {
                    if (userArray && userArray instanceof Array && userArray.length > 0) {
                        res.status(302).send({
                            status:1,
                            message: 'error',
                            messageText: 'User already registered!'
                        });
                    } else {
                        // *********************************************************************
                        var payload = {
                            uid: await utils.getNextSequenceValue('users'),
                            fullName: fullName,
                            phoneNumber: postObj.phoneNumber,                      
                            email: postObj.email,
                            password: postObj.password,
                            userVerified: false,
                            createdTime: moment().toDate('YYYY-MM-DD HH:mm:ss'),
                            status: true
                        }
                        var insertUser = await utils.insertDocInDb('users', payload);
                        if (insertUser) {
                            res.status(200).send({
                                status:1,
                                message: 'success',
                                messageText: 'Registration successful!'
                            });
                        } else {
                            res.status(503).send({
                                status:1,
                                message: 'error',
                                messageText: 'Registration failed!, Please try after some time.'
                            });
                        }
                        // *********************************************************************
                    }
                }, (error) => {
                    res.status(500).send({
                        status:0,
                        message: 'error',
                        messageText: appConfig.errorMessages.somethingWentWrong
                    });
                });
            } else {

                if(!utils.isPasswordValid('password')){
                    
                    res.status(400).send({
                        status:0,
                        message: 'error',
                        messageText: appConfig.errorMessages.invalidPassword
                    });
                }else {
                    res.status(400).send({
                        status:0,
                        message: 'error',
                        messageText: appConfig.errorMessages.badRequest
                    });
                }
                
            }
        } else {
            res.status(400).send({
                status:0,
                message: 'error',
                messageText: appConfig.errorMessages.badRequest
            });
        }
    }, (error) => {
        res.status(500).send({
            status:0,
            message: 'error',
            messageText: appConfig.errorMessages.somethingWentWrong
        });
    });
};