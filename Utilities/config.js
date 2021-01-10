let environment = require('./environment').environment;
let serverURLs = require("./cred").serverURLs;

let config = {
    "DB_URL": {
        "host": `${serverURLs.MYSQL_HOST}`,
        "user": `${serverURLs.MYSQL_USER}`,
        "password": `${serverURLs.MYSQL_PASSWORD}`,
        "database": `${serverURLs.MYSQL_DATABASE}`
    },
    "EMAIL_CONFIG": {
        "host": `${serverURLs.EMAIL_HOST}`,
        "port": `${serverURLs.EMAIL_PORT}`,
        "secure": `${serverURLs.EMAIL_SECURE}`,
        "auth": {
            "user": `${serverURLs.EMAIL_USER}`,
            "pass": `${serverURLs.EMAIL_PASS}`,
        }
    },
    "NODE_SERVER_PORT": {
        "port": `${serverURLs.NODE_SERVER_PORT}`
    },
    "NODE_SERVER_URL": {
        "url": `${serverURLs.NODE_SERVER}`
    }
};


module.exports = {
    config: config
};
