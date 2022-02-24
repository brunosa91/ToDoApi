const tarefaController = (app) => {
  app.get("/tarefa", (req, res) => {
    res.send("rota GET para entidade tarefa");
    res.json({
      Tarefas: [],
    });
  });
  app.post("/tarefa", (req, res) => {
    res.json({
      msg: "Tarefa inserida com sucesso",
    });
  });
};

export default tarefaController;
