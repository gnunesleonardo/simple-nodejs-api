'use strict';

const HttpStatus = require('http-status');

const handleSingleUser = (data) => data ? {status: HttpStatus.OK, json: data} : {status: HttpStatus.OK, json: {message: 'user not found'}};

const handleAllUsers = (data) => data ? {status: HttpStatus.OK, json: data} : {status: HttpStatus.INTERNAL_SERVER_ERROR, json: {message: 'user not found'}};

module.exports = (app) => {
    const service = app.services.user;

    return {
        getUsers: ({ query }, res) => {
            let { id } = query;

            if(id){
                let user = service.getUserById(id);
                var { status, json } = handleSingleUser(user);
            } else {
                let users = service.getAllUsers();
                var { status, json } = handleAllUsers(users);
            }
            res.status(status).json(json);
        },
    };
}