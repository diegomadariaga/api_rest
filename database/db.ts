import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// conect to database
async function connect() {
    const db = await open({
        filename: './database/Northwind-simple.sqlite',
        driver: sqlite3.cached.Database
    });
    return db;
}
// get all Orders
async function getRows(sql:string) {
    const db = await connect();
    try {
        const rows: any[] = await db.all(sql);
        console.log(rows);
        return rows;
    } catch (err) { 
        console.log(err);
    }
}
// aqui faltan cosas




//getRows('SELECT * FROM categories');
getRows('INSERT INTO categories (CategoryName, Description) VALUES ("test-node","description")');

