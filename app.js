"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var routes_users_1 = __importDefault(require("./routes/routes_users"));
var app = (0, express_1.default)();
dotenv_1.default.config();
// configurar el puerto
app.set("port", process.env.PORT || 3000);
// use middleware body-parser para recibir jsons
app.use(express_1.default.json());
// use middleware url-encoded para formularios con archivos
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", function (req, res) {
    res.send("Hola mundo");
});
app.use("/user", routes_users_1.default);
app.listen(app.get("port"), function () {
    console.log(" server on http://localhost:" + app.get("port"));
});
