"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserById = exports.getUserById = exports.insertUser = exports.getAsyncAllUsers = exports.createDatabase = void 0;
var sqlite3_1 = __importDefault(require("sqlite3"));
var sqlite_1 = require("sqlite");
//create database if not exists
function createDatabase() {
    return __awaiter(this, void 0, void 0, function () {
        var db, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 7]);
                    return [4 /*yield*/, (0, sqlite_1.open)({
                            filename: './database/db.sqlite',
                            driver: sqlite3_1.default.Database
                        })];
                case 1:
                    db = _a.sent();
                    return [4 /*yield*/, db.run("\n            CREATE TABLE IF NOT EXISTS users (\n                id INTEGER PRIMARY KEY AUTOINCREMENT,\n                username TEXT,\n                password TEXT,\n                email TEXT,\n                firstname TEXT,\n                lastname TEXT,\n                isAdmin INTEGER,\n                created DATETIME,\n                updated DATETIME\n            );\n        ")];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, db.run("\n            CREATE TABLE IF NOT EXISTS posts (\n                id INTEGER PRIMARY KEY AUTOINCREMENT,\n                title TEXT,\n                content TEXT,\n                author INTEGER,\n                date DATETIME,\n                FOREIGN KEY(author) REFERENCES users(id)\n            );\n        ")];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, db.run("\n            CREATE TABLE IF NOT EXISTS comments (\n                id INTEGER PRIMARY KEY AUTOINCREMENT,\n                content TEXT,\n                author INTEGER,\n                post INTEGER,\n                date DATETIME,\n                FOREIGN KEY(author) REFERENCES users(id),\n                FOREIGN KEY(post) REFERENCES posts(id)\n            );\n        ")];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, db.close()];
                case 5:
                    _a.sent();
                    console.log("created database");
                    return [3 /*break*/, 7];
                case 6:
                    err_1 = _a.sent();
                    console.log(err_1);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
exports.createDatabase = createDatabase;
// conect to database
function connect() {
    return __awaiter(this, void 0, void 0, function () {
        var db;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, sqlite_1.open)({
                        filename: './database/db.sqlite',
                        driver: sqlite3_1.default.Database
                    })];
                case 1:
                    db = _a.sent();
                    return [2 /*return*/, db];
            }
        });
    });
}
// get all users
function getAsyncAllUsers() {
    return __awaiter(this, void 0, void 0, function () {
        var db, rows, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, connect()];
                case 1:
                    db = _a.sent();
                    return [4 /*yield*/, db.all("SELECT * FROM users")];
                case 2:
                    rows = _a.sent();
                    console.log(rows);
                    return [4 /*yield*/, db.close()];
                case 3:
                    _a.sent();
                    return [2 /*return*/, rows];
                case 4:
                    err_2 = _a.sent();
                    console.log("error in getAsyncAllUsers");
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.getAsyncAllUsers = getAsyncAllUsers;
// insert user
function insertUser(user) {
    return __awaiter(this, void 0, void 0, function () {
        var db, rows, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, connect()];
                case 1:
                    db = _a.sent();
                    return [4 /*yield*/, db.all("\n            INSERT INTO users (username, password, email, firstname, lastname, isAdmin, created, updated)\n            VALUES (?, ?, ?, ?, ?, ?, date('now'), null)\n        ", [user.username, user.password, user.email, user.firstname, user.lastname, user.isAdmin])];
                case 2:
                    rows = _a.sent();
                    return [4 /*yield*/, db.close()];
                case 3:
                    _a.sent();
                    return [2 /*return*/, rows];
                case 4:
                    err_3 = _a.sent();
                    console.log("error in insertUser", err_3);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.insertUser = insertUser;
// get user by id
function getUserById(id) {
    return __awaiter(this, void 0, void 0, function () {
        var db, rows, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, connect()];
                case 1:
                    db = _a.sent();
                    return [4 /*yield*/, db.all("\n            SELECT * FROM users WHERE id = ?\n        ", [id])];
                case 2:
                    rows = _a.sent();
                    return [4 /*yield*/, db.close()];
                case 3:
                    _a.sent();
                    return [2 /*return*/, rows];
                case 4:
                    err_4 = _a.sent();
                    console.log("error in getUserById", err_4);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.getUserById = getUserById;
// delete user by id 
function deleteUserById(id) {
    return __awaiter(this, void 0, void 0, function () {
        var db, rows, err_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, connect()];
                case 1:
                    db = _a.sent();
                    return [4 /*yield*/, db.all("\n            DELETE FROM users WHERE id = ?\n        ", [id])];
                case 2:
                    rows = _a.sent();
                    return [4 /*yield*/, db.close()];
                case 3:
                    _a.sent();
                    return [2 /*return*/, rows];
                case 4:
                    err_5 = _a.sent();
                    console.log("error in deleteUserById", err_5);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.deleteUserById = deleteUserById;
