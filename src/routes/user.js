'use strict';

module.exports = (app) => {
    const ctrl = app.controllers.user;

    app.get('/api/user', ctrl.getUsers);
};