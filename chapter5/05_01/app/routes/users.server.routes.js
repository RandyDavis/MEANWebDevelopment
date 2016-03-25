/**
 * Created by randy on 3/24/16.
 */
var users = require('../../app/controllers/users.server.controller');

module.exports = function (app) {
    app.route('/users').post(users.create);
}