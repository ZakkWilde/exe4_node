module.exports = function(app){

    controller = app.controller.hello; 
    
    app.get('/hello', controller.hello)

}

// module.exports = function (app) {
//     app.get('/hello', function (req, res) {
//         res.render('hello/hello', {
//             resultsHTML: res
//         });
//     });
// }