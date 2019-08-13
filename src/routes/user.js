'use strict';

module.exports = (app) => {
    const ctrl = app.controllers.user;

    app.get('/api/users', ctrl.getAllUsers);
    app.get('/api/user/:id', ctrl.getUserById);
};