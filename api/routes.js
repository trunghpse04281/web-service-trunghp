module.exports = function (app) {
    let accountController = require('./controllers/AccountController');

    // todoList Routes
    app.route('/account/getAll').get(accountController.get);
    // app.route('/account/login/:user_name/:password').get(accountController.login);
    app.route('/account/login').post(accountController.login);
};