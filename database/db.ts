import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { User } from '../models/User';

//create database if not exists
async function createDatabase() {
    try {
        const db = await open({
            filename: './database/db.sqlite',
            driver: sqlite3.Database
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

// conect to database
async function connect() {
    const db = await open({
        filename: './database/db.sqlite',
        driver: sqlite3.Database
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
    } catch (err) {
        console.log("error in getAsyncAllUsers");
    }
} 

// insert user
async function insertUser(user: User) {
    try {
        const db = await connect();
        const rows = await db.all(`
            INSERT INTO users (username, password, email, firstname, lastname, isAdmin, created, updated)
            VALUES (?, ?, ?, ?, ?, ?, date('now'), null)
        `, [user.username, user.password, user.email, user.firstname, user.lastname, user.isAdmin]);
        await db.close();
        return rows;
    } catch (err) {
        console.log("error in insertUser", err);
    }
}
// get user by id
async function getUserById(id: number){
    try {
        const db = await connect();
        const rows = await db.all(`
            SELECT * FROM users WHERE id = ?
        `, [id]);
        await db.close();
        return rows;
    } catch (err) {
        console.log("error in getUserById", err);
    }
}
// delete user by id 
async function deleteUserById(id: number){
    try {
        const db = await connect();
        const rows = await db.all(`
            DELETE FROM users WHERE id = ?
        `, [id]);
        await db.close();
        return rows;
    } catch (err) {
        console.log("error in deleteUserById", err);
    }
}
// update user by id
async function updateUserById(id: number, user: User){
    try {
        const db = await connect();
        const rows = await db.all(`
            UPDATE users SET username = ?, password = ?, email = ?, firstname = ?, lastname = ?, isAdmin = ?, updated = date('now') WHERE id = ?
        `, [user.username, user.password, user.email, user.firstname, user.lastname, user.isAdmin, id]);
        await db.close();
        return rows;
    } catch (err) {
        console.log("error in updateUserById", err);
    }
}

// export functions
export { createDatabase, getAsyncAllUsers , insertUser, getUserById, deleteUserById};


