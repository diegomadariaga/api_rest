"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, username, password, email, firstname, lastname, isAdmin, created, updated) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
        this.isAdmin = isAdmin;
        this.created = created;
        this.updated = updated;
    }
    set setId(id) {
        this.id = id;
    }
    set setUsername(username) {
        this.username = username;
    }
    set setPassword(password) {
        this.password = password;
    }
    set setEmail(email) {
        this.email = email;
    }
    set setFirstname(firstname) {
        this.firstname = firstname;
    }
    set setLastname(lastname) {
        this.lastname = lastname;
    }
    set setIsAdmin(isAdmin) {
        this.isAdmin = isAdmin;
    }
    set setCreated(created) {
        this.created = created;
    }
    set setUpdated(updated) {
        this.updated = updated;
    }
    get getId() {
        return this.id;
    }
    get getUsername() {
        return this.username;
    }
    get getPassword() {
        return this.password;
    }
    get getEmail() {
        return this.email;
    }
    get getFirstname() {
        return this.firstname;
    }
    get getLastname() {
        return this.lastname;
    }
    get getIsAdmin() {
        return this.isAdmin;
    }
    get getCreated() {
        return this.created;
    }
    get getUpdated() {
        return this.updated;
    }
}
exports.User = User;
