const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_EXPIRES_IN } = process.env;

function generateToken(user) {
    const payload = {
        id: user.id,
        email: user.email,
    };

    return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

module.exports = { generateToken };
