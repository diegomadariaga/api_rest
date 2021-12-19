import {Request,Response} from 'express';
import { getAsyncAllUsers , insertUser} from '../database/db';
import { User } from '../models/User'; 

const getAllUsers = async (_req:Request, res:Response) => {
    const users = await getAsyncAllUsers();
    if (users) {
        res.json(users);
    } else {
        res.status(404).json({ message: 'No users found' });
    }
}
const createUser = async (req:Request, res:Response) => {
    const params = req.body;
    const newUser: User = new User(params.id, params.username, params.password, params.email, params.firstname, params.lastname, params.isAdmin, params.created, params.updated);
    const result = await insertUser(newUser);
    if (result) {
        res.json(result);
    } else {
        res.status(404).json({ message: 'the user could not be created' });
    }
}

export { getAllUsers, createUser };