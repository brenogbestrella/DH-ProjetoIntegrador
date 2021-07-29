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
        
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/cadastro">
          <Cadastro />
        </Route>

        <Route path="/senha">
          <Senha />
        </Route>

        <Route path="/app" isPrivate>
          <App />
        </Route>

        <Route path="/user" isPrivate>
          <User />
        </Route>

        <Route path="/oferta" isPrivate>
          <Oferta />
        </Route>

        <Route path="/reserva" isPrivate>
          <Reserva />
        </Route>

        <Route path="/termos">
          <Termos />
        </Route>

        <Route path="/ajuda">
          <Ajuda />
        </Route>

        <Route path="/perfil" isPrivate>
          <Perfil />
        </Route>

        <Route path="/privacidade">
          <Privacidade />
        </Route>

        <Route path="/ordem" isPrivate>
          <Reserva />
        </Route> 

        <Route exact path="/">
          <Home />
        </Route>

      </Switch>
    </BrowserRouter>
  )
}

export default Paginas;

