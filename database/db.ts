import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

//create database if not exists
async function createDatabase() {
    try{
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
                isAdmin INTEGER
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
    catch(err) {
        console.log(err);
    }
}

// conect to database
async function connect() {
    const db = await open({
        filename: './database/db.sqlite',
        driver: sqlite3.cached.Database
    });
    return db;
}

// get all users
async function getAsyncAllUsers(): Promise<any[] | undefined> {
    try {
        const rows = await executeSql("SELECT * FROM users");
        return rows;
    } catch (err) {
        console.log("error in getAsyncAllUsers");
    }
}
async function executeSql(sql:string) {
    const db = await connect();
    try {
        const rows: any[] = await db.all(sql);
        console.log(rows);
        return rows;
    } catch (err) { 
        console.log(err);
        throw err;
    }
}

// export functions
export { createDatabase, getAsyncAllUsers };

