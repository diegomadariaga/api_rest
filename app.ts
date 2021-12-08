import express, { Request, Response } from "express";
import dotenv from "dotenv";

const app: express.Application = express();

dotenv.config();
// configurar el puerto
app.set("port", process.env.PORT || 3000);

// use middleware body-parser para recibir jsons
app.use(express.json());
// use middleware url-encoded para formularios con archivos
app.use(express.urlencoded({ extended: true }));

const notas = [
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

app.get("/", (req: Request, res: Response) => {
    res.send("Hola mundo");
});

app.get("/notas", (req: Request, res: Response) => {
    res.json(notas);
});

app.get("/notas/:id", (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            throw new Error("El id debe ser un numero");
        }

        const nota = notas.find(function (n) {
            return n.id === id;
        });

        if (nota) {
            res.json(nota);
        } else {
            res.status(404).json({
                mensaje: "Nota no encontrada"
            });
        }
    } catch (error) {
        res.status(500).send("Error interno " + error);
    }
});

app.post("/notas", (req: Request, res: Response) => {
    try {
        const nota = req.body;
        if (!nota.titulo || !nota.descripcion) {
            throw new Error("El titulo y la descripcion son obligatorios");
        }
        const id = notas.reduce(function (prev, current) {
            return (prev.id > current.id) ? prev : current;
        });
        nota.id = id.id + 1;
        nota.creado = new Date();
        nota.actualizado = new Date();
        notas.push(nota);
        res.json(nota);
    } catch (error) {
        res.status(500).send("Error interno " + error);
    }
    console.log(notas);
});

app.delete("/notas/:id", (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            throw new Error("El id debe ser un numero");
        }
        const nota = notas.find(function (n) {
            return n.id === id;
        });
        if (nota) {
            notas.splice(notas.indexOf(nota), 1);
            res.json(nota);
        } else {
            res.status(404).json({
                mensaje: "Nota no encontrada"
            });
        }
    } catch (error) {
        res.status(500).send("Error interno " + error);
    }
});

app.listen(app.get("port"), () => {
    console.log(` server on http://localhost:${app.get("port")}`);
});
