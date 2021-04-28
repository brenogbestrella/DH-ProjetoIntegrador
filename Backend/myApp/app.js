var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// novas rotas
const indexGeralRouter = require("./routes/indexGeral");
const homeRouter = require("./routes/home");
const cadastroRouter = require("./routes/cadastro");
const usuarioRouter = require("./routes/usuario");
const recuperarSenhaRouter = require("./routes/recuperarSenha");
const loginRouter = require("./routes/login");

var app = express();

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
app.use("/usuario", usuarioRouter);
app.use("/recuperarSenha", recuperarSenhaRouter);
app.use("/login", loginRouter);

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
