import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Route from "../src/pages/login/Route"

import Home from "../src/pages/home/Home.js";
import Login from "../src/pages/login/Login.js"
import Cadastro from "../src/pages/cadastro/Cadastro"
import App from "../src/pages/app/App"
import Senha from "../src/pages/senha/Senha"
import User from "../src/pages/user/User"
import Oferta from "../src/pages/oferta/Oferta"
import Reserva from "../src/pages/reserva/Reserva"
import Termos from "../src/pages/termos/Termos"
import Ajuda from "../src/pages/ajuda/Ajuda"
import Perfil from "../src/pages/perfil/Perfil"
import Privacidade from "../src/pages/privacidade/Privacidade"




function Paginas() {
  return(
    <BrowserRouter>
      <Switch>
        
        <Route path="/login" component={Login} />

        <Route path="/cadastro" component={Cadastro} />

        <Route path="/senha" component={Senha} />

        <Route path="/app" isPrivate component={App} />

        <Route path="/user" isPrivate component={User} />

        <Route path="/oferta" isPrivate component={Oferta} />

        <Route path="/reserva" isPrivate component={Reserva} />

        <Route path="/termos" component={Termos} />

        <Route path="/ajuda" component={Ajuda} />

        <Route path="/perfil" isPrivate component={Perfil} />

        <Route path="/privacidade" component={Privacidade} />

        <Route path="/ordem" isPrivate component={Reserva} />

        <Route exact path="/" component={Home} />

      </Switch>
    </BrowserRouter>
  )
}

export default Paginas;

