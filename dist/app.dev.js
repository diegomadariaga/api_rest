"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
}; // configurar el puerto


app.set("port", process.env.PORT || 3000); // use middleware body-parser para recibir jsons

app.use(express_1["default"].json()); // use middleware url-encoded para formularios con archivos

app.use(express_1["default"].urlencoded({
  extended: true
}));
app.get("/", function (req, res) {
  res.send("Hola mundo");
});
app.use("/user", routes_users_1["default"]);
app.listen(app.get("port"), function () {
  console.log(" server on http://localhost:".concat(app.get("port")));
});