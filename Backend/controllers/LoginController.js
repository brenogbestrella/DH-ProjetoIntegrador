const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = "ce0a74b56a865f557c204b99f76a94ab"
const db = require("../database/models/index")

const controller = {
  login: async (req, res) => {
    try {
        const { email, senha } = req.body;
        const usuario = await db.Usuario.findOne({where: { email: email }});
        if (usuario) {
          const senhaValida = await bcrypt.compare(senha, usuario.senha_hash);
          if (senhaValida) {
            const token = jwt.sign({id: usuario.id}, secret, {expiresIn: "24h"})
            res.status(200).json({auth: true, token});
          } else {
            res.json("Senha incorreta, tente novamente.");
          }
        } else {
          res.status(404).json("Usuário não encontrado.");
        }
      } catch (err) {
        console.log(err)
        res.status(500).send("Algo deu errado, tente novamente.");
      }
  }
};
module.exports = controller;