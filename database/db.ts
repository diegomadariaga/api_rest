import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// conect to database
async function connect() {
    const db = await open({
        filename: './database/Northwind-simple.sqlite',
        driver: sqlite3.Database
    });
    return db;
}
// get all Orders
async function getOrders() {
    const db = await connect();
    const result = await db.all('SELECT * FROM orders');
    console.log(result);
    return result;
}
getOrders();

