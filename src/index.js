import express from "express";

import usuarioController from "./controllers/usuario-controller.js";
import tarefaController from "./controllers/tarefa-controller.js";

const app = express();
const porta = 3000;

usuarioController(app);
tarefaController(app);

app.listen(porta, () => {
  console.log(`servidor aberto na http://localhost:${porta}/`);
});
