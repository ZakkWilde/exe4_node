var express = require('express');
var app = express();
var consign = require('consign');

module.exports = function () {
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    consign({
            cwd: 'app',
            extensions: ['.js', '.json', '.node'],
            verbose: false
        })
        .include('routes')
        .then('infra')
        .into(app);

    return app;
}