/**
 * Created by randy on 3/21/16.
 */
module.exports = function (app) {
    var index = require('../controllers/index.server.controller');
    app.get('/', index.render);
};