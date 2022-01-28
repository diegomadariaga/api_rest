import express, { Request, Response } from "express";
import dotenv from "dotenv";
import routerUser from "./routes/routes_users";

const app: express.Application = express();

dotenv.config();
// configurar el puerto
app.set("port", process.env.PORT || 3001);

// use middleware body-parser para recibir jsons
app.use(express.json());
// use middleware url-encoded para formularios con archivos
app.use(express.urlencoded({ extended: false }));


app.get("/", (req: Request, res: Response) => {
    res.send("Hola mundo");
});
app.use("/user", routerUser);

app.listen(app.get("port"), () => {
    console.log(` server on http://localhost:${app.get("port")}`);
});


