module.exports = function (app) {

    var Hello = {

        hello: function (req, res) {
            res.render('hello/hello');
        }
    }
    return Hello;
}