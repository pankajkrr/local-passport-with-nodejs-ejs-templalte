let config = require("./config").config,
    mustache = require('mustache'),
    bodyParser = require('body-parser'),
    MD5 = require("md5");
var querystring = require('querystring');


let encryptData = (stringToCrypt) => {
    return MD5(stringToCrypt);
};

// Define Error Codes
let statusCode = {
    ZERO: 0,
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    SIX: 6,
    SEVEEN: 7,
    EIGHT: 8,
    NINE: 9,
    TEN: 10,
    OK: 200,
    FOUR_ZERO_FOUR: 404,
    INTERNAL_SERVER_ERROR:400,
    FOUR_ZERO_ZERO: 400,   
    BAD_REQUEST: 404,
    FIVE_ZERO_ZERO: 500
};

// Define Error Messages
let statusMessage = {
    PARAMS_MISSING: 'Mandatory Fields Missing',
    DB_ERROR: 'database related error occured', // data base related error...
    INTERNAL_SERVER_ERROR: 'Internal server error.', //500
    USER_ADDED: "User created successfully.",
    STATUS_UPDATED: "Status updated successfully.",
    LOGIN_SUCCESS: "Login Successfull.",
    USER_EXISTS: "User already exists for provided email.",
    INCORRECT_CREDENTIALS: "Incorrect email or password.",
    INCORRECT_EMAIL :"Please enter correct email.",
    INVALID_REQUEST :"Invalid Request.",
    INVALID_TOKEN : "User Authentication Failed. Please login again."
};

let getMysqlDate = (rawDate) => {
    let date = new Date(rawDate);
    return date.getUTCFullYear() + '-' +
        ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
        ('00' + date.getUTCDate()).slice(-2);
}


let generateToken =() => {
    return Date.now()+Math.floor(Math.random()*99999)+1000;
}

module.exports = {
    statusCode: statusCode,
    statusMessage: statusMessage,
    getMysqlDate: getMysqlDate,
    encryptData: encryptData,
     generateToken : generateToken
}
