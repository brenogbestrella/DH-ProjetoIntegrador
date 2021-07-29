const yup = require("yup");

function validator(req, res, next) {
  const schema = yup.object().shape({
    nome: yup.string().required(),
    email: yup.string().required(),
    senha: yup.string().required(),
    documento: yup.string().required(),
    telefone: yup.integer().required(),
    tipo: yup.boolean().required(),
  });

  if (!schema.isValidSync(req.body)) {
    return res
      .status(400)
      .json({
        error: "Dados Inválidos. Por favor, preencha conforme solicitado.",
      });
  }

  next();
}

module.exports = validator;
