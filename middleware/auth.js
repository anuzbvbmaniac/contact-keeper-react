const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (request, response, next) {
    // Get Token from Header
    const token = request.header('x-auth-token');

    // Check if token doesn't exists
    if (!token) return response.status(401).json({msg: 'Token not found, Authorization Denied.'}); // 401 == Unauthorized

    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        request.user = decoded.user;

        next();
    } catch (err) {
        console.log(err.message);
        response.status(401).json({ msg: 'Token invalid. Please check your token' });
    }

}
