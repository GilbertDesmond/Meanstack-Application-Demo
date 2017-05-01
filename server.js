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

var app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use('/', mainRouter);
app.use('/api', apiRouter);
mongoose.connect(DB, function(err){
    
    if (err) {
        return err;
    }

    else{
        console.log('Successfully connected to the' + DB);
    }
});

app.set('views', __dirname + '/client/views' );
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'client')));

app.listen(port, function() {
    console.log("Listening on port 8000" + port);
});



