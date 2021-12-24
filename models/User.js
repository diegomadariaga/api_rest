"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(id, username, password, email, firstname, lastname, isAdmin, created, updated) {
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
    Object.defineProperty(User.prototype, "setId", {
        set: function (id) {
            this.id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setUsername", {
        set: function (username) {
            this.username = username;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setPassword", {
        set: function (password) {
            this.password = password;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setEmail", {
        set: function (email) {
            this.email = email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setFirstname", {
        set: function (firstname) {
            this.firstname = firstname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setLastname", {
        set: function (lastname) {
            this.lastname = lastname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setIsAdmin", {
        set: function (isAdmin) {
            this.isAdmin = isAdmin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setCreated", {
        set: function (created) {
            this.created = created;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setUpdated", {
        set: function (updated) {
            this.updated = updated;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getId", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getUsername", {
        get: function () {
            return this.username;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getPassword", {
        get: function () {
            return this.password;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getEmail", {
        get: function () {
            return this.email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getFirstname", {
        get: function () {
            return this.firstname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getLastname", {
        get: function () {
            return this.lastname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getIsAdmin", {
        get: function () {
            return this.isAdmin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getCreated", {
        get: function () {
            return this.created;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getUpdated", {
        get: function () {
            return this.updated;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
exports.User = User;
