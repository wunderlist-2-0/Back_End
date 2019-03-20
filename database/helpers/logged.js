const database = require('../database/dbConfig');

function logged(req, res, next) {
    const user = database('todos').where('userId', req.body.id);
    if (user) {
        next()
    }
}

module.exports = {
    logged
};

// middleware to verify the user that is logged in and only shows
// check to see user
//