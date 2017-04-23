/**
 * Created by Innovapath on 4/21/2017.
 */
var mysql = require('mysql'),
    config = require('../config/tsconfig.json');
// var async = require('async');
'use strict';

var connection = mysql.createConnection({
    host     : config.dev.mysql.host,
    port     : config.dev.mysql.port,
    user     : config.dev.mysql.username,
    password : config.dev.mysql.password,
    database : config.dev.mysql.database
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }else{
        console.log("Connected to dB");
    }
});

module.exports = connection;

