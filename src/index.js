import express from "express";

const app = express();
const porta = 3000;

app.get("/usuario", (req, res) => {
  res.send("rota GET para entidade usuário");
});

app.get("/tarefa", (req, res) => {
  res.send("rota GET para entidade tarefa");
});

app.listen(porta, () => {
  console.log(`servidor aberto na http://localhost:${porta}/`);
});
