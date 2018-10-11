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

    global.app.post('/v1/register', (req, res, next) => {
        var postObj = req.body;
        if (postObj && postObj.hasOwnProperty('fullName') && postObj.hasOwnProperty('age') && postObj.hasOwnProperty('gender') && postObj.hasOwnProperty('phoneNumber') && postObj.hasOwnProperty('email') && postObj.hasOwnProperty('state') && postObj.hasOwnProperty('city') && postObj.hasOwnProperty('expertiseIn') && postObj.hasOwnProperty('experienceInOutdoor') && postObj.hasOwnProperty('aboutYourSelf')) {
            var fullName = utils.isNameValid(postObj.fullName);
            if (['', undefined, 'undefined', null, 'null'].indexOf(postObj) == -1 && fullName && utils.isNumberValid(postObj.age) && (postObj.gender == 'MALE' || postObj.gender == 'FEMALE') && utils.isPhoneNumberValid(postObj.phoneNumber) && utils.isEmailValid(postObj.email) && utils.isTextValid(postObj.state) && utils.isTextValid(postObj.city) && utils.isTextValid(postObj.expertiseIn) && (postObj.experienceInOutdoor == 'YES' || postObj.experienceInOutdoor == 'NO') && utils.isTextAreaValid(postObj.aboutYourSelf)) {
                dbService.findDocs('chefs', { email: postObj.email, phoneNumber: postObj.phoneNumber, chefVerified: true, status: true }).then(async(chefArray) => {
                    if (chefArray && chefArray instanceof Array && chefArray.length > 0) {
                        res.status(302).send({ message: 'error', messageText: 'User already registered!' });
                    } else {
                        // *********************************************************************
                        var payload = {
                            uid: await utils.getNextSequenceValue('chefs'),
                            fullName: fullName,
                            phoneNumber: postObj.phoneNumber,
                            age: postObj.age,
                            gender: postObj.gender,
                            email: postObj.email,
                            state: postObj.state,
                            city: postObj.city,
                            expertiseIn: postObj.expertiseIn,
                            experienceInOutdoor: postObj.experienceInOutdoor,
                            aboutYourSelf: postObj.aboutYourSelf,
                            chefVerified: false,
                            createdTime: moment().toDate('YYYY-MM-DD HH:mm:ss'),
                            status: true
                        }
                        var insertChef = await utils.insertDocInDb('chefs', payload);
                        if (insertChef) {
                            res.status(200).send({ message: 'success', messageText: 'Registration successful!' });
                        } else {
                            res.status(503).send({ message: 'error', messageText: 'Registration failed!, Please try after some time.' });
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