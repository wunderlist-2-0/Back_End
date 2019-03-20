// middleware to check which user is logged in

function logged(req, res, next) {
    if (req.decoded.username) {
        next();
    } else {
        res.status(403).json({
            error: "user test"
        })
    }
}

module.exports = {
    logged
};