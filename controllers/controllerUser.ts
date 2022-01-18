import { Request, Response } from 'express';
import { getAsyncAllUsers, insertUser, getUserById, deleteUserById } from '../database/db';
import { User } from '../models/User';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';

const getAllUsers = async (_req: Request, res: Response) => {
    const users = await getAsyncAllUsers();
    if (users) {
        res.json(users);
    } else {
        res.status(404).json({ message: 'No users found' });
    }
}
const createUser = async (req: Request, res: Response) => {
    const params = req.body;
    const newUser: User = new User(params.id, params.username, params.password, params.email, params.firstname, params.lastname, params.isAdmin, params.created, params.updated);
    const result = await insertUser(newUser);
    if (result) {
        res.json(result);
    } else {
        res.status(404).json({ message: 'the user could not be created' });
    }
}
const getUser = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    //verify if id is a number
    if (isNaN(id) || id < 0) {
        res.status(404).json({ message: 'id is not a positive number' });
    } else {
        const user = await getUserById(id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'user not found' });
        }
    }
}
const deleteUser = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    //verify if id is a number
    if (isNaN(id) || id < 0) {
        res.status(404).json({ message: 'id is not a positive number' });
    } else {
        const user = await deleteUserById(id);
        if (user && user.length > 0) {
            res.json({ message: 'user deleted' });
        } else {
            res.status(404).json({ message: 'user not found' });
        }
    }
}
// encriptar password sha256
const encryptPassword = (password: string) => {
    const hash = crypto.createHash('sha256');
    hash.update(password);
    return hash.digest('hex');
}
// desencriptar password sha256
const decryptPassword = (password: string, hash: string) => {
    const hash2 = crypto.createHash('sha256');
    hash2.update(password);
    return hash2.digest('hex') === hash;
}
const getJWT =  (req: Request, res: Response) => {
    const id = req.body.id;
    const password = req.body.password;
    console.log(id, password);
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


export { getAllUsers, createUser, getUser, deleteUser, encryptPassword, decryptPassword, getJWT };