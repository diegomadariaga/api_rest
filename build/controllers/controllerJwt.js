"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJWT = exports.verifyJwtToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyJwtToken = (token) => {
    if (token) {
        try {
            const result = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY);
            console.log("result", result);
            return result;
        }
        catch (error) {
            return false;
        }
    }
    else {
        return false;
    }
};
exports.verifyJwtToken = verifyJwtToken;
const getJWT = (req, res) => {
    const id = req.body.id;
    const password = req.body.password;
    if (id && password) {
        const payload = {
            id,
            password
        };
        const token = jsonwebtoken_1.default.sign(payload, process.env.SECRET_KEY, {
            expiresIn: '1h'
        });
        res.status(200).send(token);
    }
    else {
        res.status(404).send('id or password is not defined');
    }
};
exports.getJWT = getJWT;
