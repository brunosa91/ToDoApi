const usuarioController = (app) => {
  app.get("/usuario", (req, res) => {
    res.send("rota GET para entidade usuário");
  });
};

export default usuarioController;
