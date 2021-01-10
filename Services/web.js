let async = require('async'),
    queryString = require('querystring'),
    paypal = require('paypal-rest-sdk');


let util = require('../Utilities/util'),
    config = require('../Utilities/config'),
    userDAO = require('../DAO/userDAO');

let signup = (data, callback) => {
    console.log(data);
    async.auto({
        checkUserExistsinDB: (cb) => {
            if (!data.email) {
                cb(null, { "statusCode": util.statusCode.BAD_REQUEST, "statusMessage": util.statusMessage.PARAMS_MISSING })
                return;
            }
            var criteria = {
                email: data.email
            }

            userDAO.getUsers(criteria, (err, dbData) => {
                console.log(dbData);
                if (err) { //console.log(err)
                    cb(null, { "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.DB_ERROR})
                    return;
                }

                if (dbData && dbData.length) {
                    console.log(dbData);
                    cb(null, { "statusCode": util.statusCode.BAD_REQUEST, "statusMessage": util.statusMessage.USER_EXISTS});
                } else {
                    cb(null);
                }
            });
        },
        createUserinDB: ['checkUserExistsinDB', (cb, functionData) => {
            if (functionData && functionData.checkUserExistsinDB) {
                cb(null, functionData.checkUserExistsinDB);
                return;
            }

            let token = util.generateToken();
            let customerData = {
                "first_name": data.name.split(' ')[0],
                "last_name": data.name.substr(data.name.indexOf(" ") + 1),
                "password": util.encryptData(data.password),
                "email": data.email,
                "token": token,
                "created_At": util.getMysqlDate(new Date().toISOString()),
                "status": 1,
                "user_type": 1
            }
            userDAO.createUser(customerData, (err, dbData) => {
                if (err) {
                    console.log(err);
                    cb(null, { "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.DB_ERROR });
                    return;
                }
                cb(null, { "statusCode": util.statusCode.OK, "statusMessage": util.statusMessage.USER_ADDED });

            });
        }]
    }, (err, response) => {
        callback(response.createUserinDB);
    });
}

let login = (data, callback) => {
    async.auto({
        checkUserExistsinDB: (cb) => {
            console.log(data);

            if (!data.email) {
                cb(null, { "statusCode": util.statusCode.BAD_REQUEST, "statusMessage": util.statusMessage.PARAMS_MISSING })
                return;
            }
            var criteria = {
                email: data.email,
                password: util.encryptData(data.password)
            }
            //console.log(criteria);
            
            userDAO.getUsers(criteria, (err, dbData) => {
                if (err) {
                    cb(null, { "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.DB_ERROR })
                }

                if (dbData && dbData.length) {
                    console.log(dbData[0]);
                    cb(null, { "statusCode": util.statusCode.OK, "statusMessage": util.statusMessage.LOGIN_SUCCESS, result: dbData[0] });
                } else {
                    cb(null, { "statusCode": util.statusCode.BAD_REQUEST, "statusMessage": util.statusMessage.INCORRECT_CREDENTIALS });
                }
            });
        }
    }, (err, response) => {
        callback(response.checkUserExistsinDB);
    })
}


let getContent = (data, callback) => {
    async.auto({
        checkUserExistsinDB: (cb) => {
            let criteria = {
                type : data.type
            }
            userDAO.getContent(criteria, (err, dbData) => {
                if (err) {
                    cb(null, { "statusCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.DB_ERROR })
                }

                if (dbData && dbData.length) {
                    console.log(dbData[0]);
                    cb(null, { "statusCode": util.statusCode.OK, "statusMessage": util.statusMessage.LOGIN_SUCCESS, result: dbData[0] });
                } else {
                    cb(null, { "statusCode": util.statusCode.BAD_REQUEST, "statusMessage": util.statusMessage.INCORRECT_CREDENTIALS });
                }
            });
        }
    }, (err, response) => {
        callback(response.checkUserExistsinDB);
    })
}



module.exports = {
    login: login,
    signup:signup,
    getContent:getContent
};
