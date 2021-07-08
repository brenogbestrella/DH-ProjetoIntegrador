import React from "react";
import ReactDOM from "react-dom";
import Home from "./home/Home.js";
import Login from "./login/Login.js"
import Cadastro from "./cadastro/Cadastro"
import App from "./app/App"
import Senha from "./senha/Senha"
import User from "./user/User"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const Routing = () => {
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/senha" component={Senha} />
        <Route path="/app" component={App} />
        <Route path="/user" component={User} />
      </Switch>
    </Router>
  )
}



ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
