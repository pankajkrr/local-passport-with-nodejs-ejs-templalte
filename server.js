/*
 * @Author: Suraj Roy
 * @Date:   20 April 2016
 * @Source : https://jsonworld.com/
 * @Topic : Local passport in nodejs with ejs template...
 */        
    
    // code to required basic package of the application
    let app = require('express')(),
        express = require('express'),
        server = require('http').Server(app),
        mustache = require('mustache')
        bodyParser = require('body-parser');

    require('./Utilities/dbConfig');

    let webRoute = require('./Routes/web'),
        util = require('./Utilities/util'),
        config = require("./Utilities/config").config;
    
    // code for extracting the entire body portion of an incoming request stream
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    
    app.use(express.static(__dirname + '/views'));
    app.set('view engine', 'ejs');

    // middleware of the application. This function is executed every time the app receives a request...
    app.use(function(err, req, res, next) {
        return res.send({ "errorCode": util.statusCode.FOUR_ZERO_ZERO, "errorMessage": util.statusMessage.SOMETHING_WENT_WRONG });
    });
    
    // routing
    app.use('/', webRoute);

    // code to create http server...
    server.listen(config.NODE_SERVER_PORT.port,function(){
    	console.log('Server running on port '+config.NODE_SERVER_PORT.port);
    });
