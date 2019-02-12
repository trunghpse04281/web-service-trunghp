module.exports = function (app) {
    let accountController = require('./controllers/AccountController');

    // todoList Routes
    app.route('/account/getAll').get(accountController.get);
    // .post(productsCtrl.store);

    app.route('/account/getDetail/:accountId').get(accountController.detail);
    app.route('/account/updateAccount/:accountId').put(accountController.update);
    //     .delete(productsCtrl.delete);
};