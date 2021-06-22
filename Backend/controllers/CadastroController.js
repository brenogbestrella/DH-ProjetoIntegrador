const bcrypt = require("bcryptjs");

const controller = {
  cadastro: async (req, res) => {
    try {
      const { nome, email, senha, documento, tipo } = req.body;
      const hash = await bcrypt.hash(senha, 10);
      await db("usuario").insert({
        email: email,
        hash: hash,
        nome: nome,
        documento: documento,
        tipo: tipo,
      });
      res.status(200).json("Tarefa realizada.");
    } catch (err) {
      res.status(500).send("Algo deu errado, tente novamente.");
    }
  };
};

module.exports = controller;