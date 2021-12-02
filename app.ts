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

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World! get");
});
// post method
app.post("/", (req: Request, res: Response) => {
    res.send("Hello World! post");
});
// put method
app.put("/", (req: Request, res: Response) => {
    res.send("Hello World! put");
});
// delete method
app.delete("/", (req: Request, res: Response) => {
    res.send("Hello World! delete");
});
// patch method
app.patch("/", (req: Request, res: Response) => {
    res.send("Hello World! patch");
});

app.listen(app.get("port"), () => {
    console.log(` server on http://localhost:${app.get("port")}`);
});
