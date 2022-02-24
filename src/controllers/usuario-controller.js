const usuarioController = (app) => {
  app.get("/usuario", (req, res) => {
    res.send("rota GET para entidade usuário");
    res.json({
      usuarios: [],
    });
  });

  app.post("/usuario", (req, res) => {
    res.json({
      msg: "Tarefa inserida com sucesso",
    });
  });
};

export default usuarioController;
