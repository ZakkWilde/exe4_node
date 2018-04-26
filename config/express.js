var express = require('express');
var app = express();
var consign = require('consign');

module.exports = function () {
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    var ui5router = require('../app/ui5/ui5router');

    app.use('/', ui5router.getRouter(express));

    consign({
            cwd: 'app',
            extensions: ['.js', '.json', '.node'],
            verbose: false
        })
        .include('controller')
        .then('routes')
        .into(app);

    return app;
}