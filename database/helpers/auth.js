// JSON Web Tokens, cookies
const jwt = require('jsonwebtoken');

const jwtKey = process.env.JWT_SECRET || 'WunderList has a secret secret!';

function auth(req, res, next) {
    const token = req.get('Authorization');
    if (token) {
        jwt.verify(token, jwtKey, (error, decoded) => {
            if (error) {
                return res.status(401).json(error);
            }
            req.decoded = decoded;
            next();
        })
    } else {
        return res.status(401).json({
            error: "No token provided, set on Authorization header"
        })
    }
}

function genToken(user) {
    const payload = {
        subject: user.id,
        username: user.username
    };
    const options = {
        expiresIn: '1h'
    };
    return jwt.sign(payload, jwtKey, options)
}

module.exports = {
    auth,
    genToken
};