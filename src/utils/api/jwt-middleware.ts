import { expressjwt } from 'express-jwt';
const util = require('util');

export const jwtMiddleware = (req, res) => {
    console.log(expressjwt);

    const middleware = expressjwt({ secret: 'ma_phrase_secrete', algorithms: ['HS256'] }).unless({
        path: [
            // Public routes that don't require authentication
            '/api/auth/signin'
        ]
    });

    return util.promisify(middleware)(req, res);
}
