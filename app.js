var express = require('./config/express');
var app = express();

var finalRoute = require('./app/routes/route')(app);

app.listen(3000, function(){
    console.log('Final Rodando');
});