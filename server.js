var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mrogan = require('morgan');
var path = require('path');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));