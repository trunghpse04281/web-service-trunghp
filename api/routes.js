module.exports = function (app) {
    let accountController = require('./controllers/AccountController');
    let categoryController = require('./controllers/CategoryController');
    let productController = require('./controllers/ProductController');

    // todoList Routes
    app.route('/account/getAll').get(accountController.getAllUser);
    // app.route('/account/login/:user_name/:password').get(accountController.login);
    app.route('/account/login').post(accountController.login);
    app.route('/account/register').post(accountController.register);
    app.route('/account/checkDuplicateUserName').post(accountController.checkDuplicateUserName);

    app.route('/category/getAll').get(categoryController.getAllCategory);

    app.route('/product/getAll/:begin/:end').get(productController.getAllProduct);
    app.route('/product/getByCat').post(productController.getProductByCategory);
    app.route('/product/insert').post(productController.insertProduct);
    app.route('/product/updateImgProduct').post(productController.updateImageProduct);
    app.route('/product/getProductByUser').post(productController.getProductByUser);
    app.route('/product/getProductByName').post(productController.getProductByName);
};