// middleware to check which user is logged in

function logged(req, res, next) {
    if (req.decoded.subject) {
        next();
    } else {
        res.status(403).json({
            error: "User not logged in"
        })
    }
}

module.exports = {
    logged
};