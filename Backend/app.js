const createError = require("http-errors");
const express = require("express");
const path = require("path");

const bcrypt = require("bcryptjs");

const cookieParser = require("cookie-parser");
const logger = require("morgan");

// novas rotas
const indexGeralRouter = require("./routes/indexGeral");
const homeRouter = require("./routes/home");
const cadastroRouter = require("./routes/cadastro");
const usuarioRouter = require("./routes/usuario");
const recuperarSenhaRouter = require("./routes/recuperarSenha");
const loginRouter = require("./routes/login");
const db = require("./database/models");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// rotas aqui
app.use("/", indexGeralRouter);
app.use("/home", homeRouter);
app.use("/cadastro", cadastroRouter);
app.use("/usuarios", usuarioRouter);
app.use("/recuperarSenha", recuperarSenhaRouter);
app.use("/login", loginRouter);

//bcrypt

// app.post("/cadastro", async (req, res) => {
//   try {
//     const { nome, email, senha, documento, tipo } = req.body;
//     const hash = await bcrypt.hash(senha, 10);
//     await db("usuario").insert({
//       email: email,
//       hash: hash,
//       nome: nome,
//       documento: documento,
//       tipo: tipo,
//     });
//     res.status(200).json("Tarefa realizada.");
//   } catch (err) {
//     res.status(500).send("Algo deu errado, tente novamente.");
//   }
// });

// app.post("/login", async (req, res) => {
//   try {
//     const { email, senha } = req.body;
//     const usuario = await db("usuario").first("*").where({ email: email });
//     if (usuario) {
//       const senhaValida = await bcrypt.compare(senha, usuario.hash);
//       if (senhaValida) {
//         res.status(200).json("E-mail e senha corretos.");
//       } else {
//         res.json("Senha incorreta, tente novamente.");
//       }
//     } else {
//       res.status(404).json("Usuário não encontrado.");
//     }
//   } catch (err) {
//     res.status(500).send("Algo deu errado, tente novamente.");
//   }
// });

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
