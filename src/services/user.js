'use strict';

const users = [
    { name: 'Daft Punk' },
    { name: 'Virtual Self' },
    { name: 'Madeon' },
    { name: 'Anamanaguchi' }
];

module.exports = (app) => {
    return {
        getAllUsers: () => {
            return users;
        },

        getUserById: (id) => {
            return users[id];
        }
    };
}