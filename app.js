"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var app = express_1.default();
dotenv_1.default.config();
// configurar el puerto
app.set("port", process.env.PORT || 3000);
// use middleware body-parser para recibir jsons
app.use(express_1.default.json());
// use middleware url-encoded para formularios con archivos
app.use(express_1.default.urlencoded({ extended: true }));
var notas = [
    {
        id: 1,
        titulo: "Nota 1",
        descripcion: "Descripcion de la nota 1",
        creado: new Date(),
        actualizado: new Date(),
    },
    {
        id: 2,
        titulo: "Nota 2",
        descripcion: "Descripcion de la nota 2",
        creado: new Date(),
        actualizado: new Date(),
    },
    {
        id: 3,
        titulo: "Nota 3",
        descripcion: "Descripcion de la nota 3",
        creado: new Date(),
        actualizado: new Date(),
    },
    {
        id: 4,
        titulo: "Nota 4",
        descripcion: "Descripcion de la nota 4",
        creado: new Date(),
        actualizado: new Date(),
    },
    {
        id: 5,
        titulo: "Nota 5",
        descripcion: "Descripcion de la nota 5",
        creado: new Date(),
        actualizado: new Date(),
    },
];
app.get("/", function (req, res) {
    res.send("Hola mundo");
});
app.get("/notas", function (req, res) {
    res.json(notas);
});
app.get("/notas/:id", function (req, res) {
    try {
        var id_1 = Number(req.params.id);
        if (isNaN(id_1)) {
            throw new Error("El id debe ser un numero");
        }
        var nota = notas.find(function (n) {
            return n.id === id_1;
        });
        if (nota) {
            res.json(nota);
        }
        else {
            res.status(404).json({
                mensaje: "Nota no encontrada"
            });
        }
    }
    catch (error) {
        res.status(500).send("Error interno " + error);
    }
});
app.post("/notas", function (req, res) {
    try {
        var nota = req.body;
        if (!nota.titulo || !nota.descripcion) {
            throw new Error("El titulo y la descripcion son obligatorios");
        }
        var id = notas.reduce(function (prev, current) {
            return (prev.id > current.id) ? prev : current;
        });
        nota.id = id.id + 1;
        nota.creado = new Date();
        nota.actualizado = new Date();
        notas.push(nota);
        res.json(nota);
    }
    catch (error) {
        res.status(500).send("Error interno " + error);
    }
    console.log(notas);
});
app.delete("/notas/:id", function (req, res) {
    try {
        var id_2 = Number(req.params.id);
        if (isNaN(id_2)) {
            throw new Error("El id debe ser un numero");
        }
        var nota = notas.find(function (n) {
            return n.id === id_2;
        });
        if (nota) {
            notas.splice(notas.indexOf(nota), 1);
            res.json(nota);
        }
        else {
            res.status(404).json({
                mensaje: "Nota no encontrada"
            });
        }
    }
    catch (error) {
        res.status(500).send("Error interno " + error);
    }
});
app.listen(app.get("port"), function () {
    console.log(" server on http://localhost:" + app.get("port"));
});
