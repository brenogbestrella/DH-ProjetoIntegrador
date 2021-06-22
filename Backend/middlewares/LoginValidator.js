const jwt = require("jsonwebtoken");
const secret = "ivensjunior"

function verifyJWT(req, res, next) {
  const token = req.headers["x-acess-token"]; //ou authorization
  jwt.verify(token, secret, (err, decoded) => {
    if(err) return res.status(401).end();

    req.id = decoded.id;
    next();
  })
};

module.exports = validator;