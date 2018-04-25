var express = require('./config/express');
var app = express();

var finalRoute = require('./app/routes/route')(app);

var port = process.app.PORT || 3000;

app.listen(port, function(){
    console.log('Final Rodando');
});