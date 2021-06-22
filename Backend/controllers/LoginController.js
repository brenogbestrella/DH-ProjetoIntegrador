const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = "ivensjunior"

const controller = {
  login: async (req, res) => {
    try {
        const { email, senha } = req.body;
        const usuario = await db("usuario").first("*").where({ email: email });
        if (usuario) {
          const senhaValida = await bcrypt.compare(senha, usuario.hash);
          if (senhaValida) {
            const token = jwt.sign({id}, secret, {expiresIn: 3000})
            res.status(200).json({auth: true, token});
          } else {
            res.json("Senha incorreta, tente novamente.");
          }
        } else {
          res.status(404).json("Usuário não encontrado.");
        }
      } catch (err) {
        res.status(500).send("Algo deu errado, tente novamente.");
      }
  }
};
module.exports = controller;