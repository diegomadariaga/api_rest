"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertUser = exports.getAsyncAllUsers = exports.createDatabase = void 0;
const sqlite3_1 = __importDefault(require("sqlite3"));
const sqlite_1 = require("sqlite");
//create database if not exists
async function createDatabase() {
    try {
        const db = await (0, sqlite_1.open)({
            filename: './database/db.sqlite',
            driver: sqlite3_1.default.Database
        });
        await db.run(`
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT,
                password TEXT,
                email TEXT,
                firstname TEXT,
                lastname TEXT,
                isAdmin INTEGER,
                created DATETIME,
                updated DATETIME
            );
        `);
        await db.run(`
            CREATE TABLE IF NOT EXISTS posts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT,
                content TEXT,
                author INTEGER,
                date DATETIME,
                FOREIGN KEY(author) REFERENCES users(id)
            );
        `);
        await db.run(`
            CREATE TABLE IF NOT EXISTS comments (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                content TEXT,
                author INTEGER,
                post INTEGER,
                date DATETIME,
                FOREIGN KEY(author) REFERENCES users(id),
                FOREIGN KEY(post) REFERENCES posts(id)
            );
        `);
        await db.close();
        console.log("created database");
    }
    catch (err) {
        console.log(err);
    }
}
exports.createDatabase = createDatabase;
// conect to database
async function connect() {
    const db = await (0, sqlite_1.open)({
        filename: './database/db.sqlite',
        driver: sqlite3_1.default.Database
    });
    return db;
}
// get all users
async function getAsyncAllUsers() {
    try {
        const db = await connect();
        const rows = await db.all(`SELECT * FROM users`);
        console.log(rows);
        await db.close();
        return rows;
    }
    catch (err) {
        console.log("error in getAsyncAllUsers");
    }
}
exports.getAsyncAllUsers = getAsyncAllUsers;
// insert user
async function insertUser(user) {
    try {
        const db = await connect();
        const rows = await db.all(`
            INSERT INTO users (username, password, email, firstname, lastname, isAdmin, created, updated)
            VALUES (?, ?, ?, ?, ?, ?, date('now'), null)
        `, [user.username, user.password, user.email, user.firstname, user.lastname, user.isAdmin]);
        await db.close();
        return rows;
    }
    catch (err) {
        console.log("error in insertUser", err);
    }
}
exports.insertUser = insertUser;
