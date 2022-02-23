const tarefaController = (app) => {
  app.get("/tarefa", (req, res) => {
    res.send("rota GET para entidade tarefa");
  });
};

export default tarefaController;
