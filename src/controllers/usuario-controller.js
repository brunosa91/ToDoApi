const usuarioController = (app) => {
  app.get("/usuario", (req, res) => {
    /* 
            alguma funcao que busque/leia coisas
        */

    //Resposta com o retorno daquilo que eu busquei
    res.send("rota GET para entidade usuário");
    res.json({
      usuarios: [],
    });
  });

  app.post("/usuario", (req, res) => {
    const body = req.body;
    /* 
            alguma funcao que insira coisas
        */

    // Resposta com o retorno do processo
    console.log(body);
    res.json({
      msg: "Tarefa inserida com sucesso",
      usuario: body,
    });
  });
};

export default usuarioController;
