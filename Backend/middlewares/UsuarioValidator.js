const yup = require("yup");

function validator(req, res, next) {
  const schema = yup.object().shape({
    nome: yup.string().required(),
    sobrenome: yup.string().required(),
    endereco: yup.string().required(),
    documento: yup.string().required(),
  });

  if (!schema.isValidSync(req.body)) {
    return res.status(400).json({ error: "Invalid data" });
  }

  next();
}

module.exports = validator;
