/**
 * Created by randy on 3/21/16.
 */
exports.render = function (req, res) {
    res.render('index', {
        title: 'Hello World!'
    });
};