'use strict';

const HttpStatus = require('http-status');

const users = [
    { name: 'Daft Punk' },
    { name: 'Porter Robinson' },
    { name: 'Virtual Self' },
    { name: 'Madeon' },
];

module.exports = (app) => {
    return {
        getAllUsers: (req, res) => {
            res.status(HttpStatus.OK).json(users);
        },

        getUserById: ({ params }, res) => {
            let { id } = params;
            if (users[id]){
                res.status(HttpStatus.OK).json(users[id])
            } else {
                res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                    message: 'User not found'
                });
            }
        }
    };
}