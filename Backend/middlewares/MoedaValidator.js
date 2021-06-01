const yup = require("yup");

function validator(req, res, next) {
  const schema = yup.object().shape({
    nome: yup.string().required(),
    simbolo: yup.string().required()
    
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
