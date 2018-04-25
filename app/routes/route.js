module.exports = function (app) {
    app.get('/hello', function (req, res) {
        res.render('hello/hello', {
            resultsHTML: res
        });
    });
}