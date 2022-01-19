import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const verifyJwtToken =  (token: string) => {
    if (token) {
        try {
            const result = jwt.verify(token, process.env.SECRET_KEY);
            console.log("result",result);
            return result;
        } catch (error) {
            return false;
        }
    } else {
        return false;
    }
};

const getJWT = (req: Request, res: Response) => {
    const id = req.body.id;
    const password = req.body.password;
    if (id && password) {
        const payload = {
            id,
            password
        }
        const token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: '1h'
        });
        res.status(200).send(token);
    } else {
        res.status(404).send('id or password is not defined');
    }
}


export { verifyJwtToken, getJWT };