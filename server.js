var port = 8000 || process.env.port;
var mainRouter = require('./routes/index');
var apiRouter = require('./routes/api');
var DB = "mongodb://localhost/meanstack";
var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var morgan = require('morgan');
var path = require('path');

//Instantiate Express App Module
var app = express();
// Establishing Mongodb connection with "mongodb://localhost/meanstack"
mongoose.connect(DB, function(err){  
    if (err) {
        return err;
    }

    else{
        console.log('Successfully connected to the' + DB);
    }
});
//View Engine
app.set('views', __dirname + '/client/views' );
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use(morgan('dev'));
app.use('/', mainRouter);
app.use('/api', apiRouter);

app.listen(port, function() {
    console.log("Listening on port 8000" + port);
});



