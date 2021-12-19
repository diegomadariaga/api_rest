"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getAllUsers = void 0;
const db_1 = require("../database/db");
const User_1 = require("../models/User");
const getAllUsers = async (_req, res) => {
    const users = await (0, db_1.getAsyncAllUsers)();
    if (users) {
        res.json(users);
    }
    else {
        res.status(404).json({ message: 'No users found' });
    }
};
exports.getAllUsers = getAllUsers;
const createUser = async (req, res) => {
    const params = req.body;
    const newUser = new User_1.User(params.id, params.username, params.password, params.email, params.firstname, params.lastname, params.isAdmin, params.created, params.updated);
    const result = await (0, db_1.insertUser)(newUser);
    if (result) {
        res.json(result);
    }
    else {
        res.status(404).json({ message: 'the user could not be created' });
    }
};
exports.createUser = createUser;
