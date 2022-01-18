import jwt from 'jsonwebtoken';
import { User } from "../models/User";

const verifyJwtToken = (token: string) => {
    try {
        const decoded = jwt.verify(token, 'secret');
        return true;
    } catch (error) {
        return false;
    }
};

const generateJwtToken = (user: User) => {
    const payload = {
        id: user.id,
        username: user.username,
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
        isAdmin: user.isAdmin,
        created: user.created,
        updated: user.updated
    };
    const options = {
        expiresIn: '1d'
    };
    return jwt.sign(payload, 'secret', options);
};

export { verifyJwtToken, generateJwtToken };