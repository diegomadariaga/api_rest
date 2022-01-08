"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_users_1 = __importDefault(require("./routes/routes_users"));
const app = (0, express_1.default)();
dotenv_1.default.config();
// configurar el puerto
app.set("port", process.env.PORT || 3001);
// use middleware body-parser para recibir jsons
app.use(express_1.default.json());
// use middleware url-encoded para formularios con archivos
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("Hola mundo");
});
app.use("/user", routes_users_1.default);
app.listen(app.get("port"), () => {
    console.log(` server on http://localhost:${app.get("port")}`);
});
