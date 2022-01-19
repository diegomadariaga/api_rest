"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptPassword = exports.deleteUser = exports.getUser = exports.createUser = exports.getAllUsers = void 0;
const db_1 = require("../database/db");
const User_1 = require("../models/User");
const crypto_1 = __importDefault(require("crypto"));
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
const getUser = async (req, res) => {
    const id = Number(req.params.id);
    //verify if id is a number
    if (isNaN(id) || id < 0) {
        res.status(404).json({ message: 'id is not a positive number' });
    }
    else {
        const user = await (0, db_1.getUserById)(id);
        if (user) {
            res.json(user);
        }
        else {
            res.status(404).json({ message: 'user not found' });
        }
    }
};
exports.getUser = getUser;
const deleteUser = async (req, res) => {
    const id = Number(req.params.id);
    //verify if id is a number
    if (isNaN(id) || id < 0) {
        res.status(404).json({ message: 'id is not a positive number' });
    }
    else {
        const user = await (0, db_1.deleteUserById)(id);
        if (user && user.length > 0) {
            res.json({ message: 'user deleted' });
        }
        else {
            res.status(404).json({ message: 'user not found' });
        }
    }
};
exports.deleteUser = deleteUser;
// encriptar password sha256
const encryptPassword = (password) => {
    const hash = crypto_1.default.createHash('sha256');
    hash.update(password);
    return hash.digest('hex');
};
exports.encryptPassword = encryptPassword;
