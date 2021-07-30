import React from "react";
import { Link, useHistory } from 'react-router-dom';

import "./Header2.css";
import logo_trad1 from "../../images/logo_trad1.png"

function Header2() {

    const history = useHistory();

    function handleLogout() {
        localStorage.clear();
        history.push("/")
    }

    return (
      <div className="Header-base">
          <header>
              <div className="separa-menu-base2">
                  <img className="logo_menu-base2" src={logo_trad1} alt="TraDinDin" />
  
                  <nav id="menu-header-base2">
                  <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/oferta">CADASTRAR OFERTA</Link></li>
                        <li><Link to="/ordem">ORDENS DE COMPRA</Link></li>
                        <li><Link to="/perfil">PERFIL</Link></li>
                        <li><Link className="botao-logout-trade" to="/app">TRADE</Link></li>
                        <li><button 
                                type="button" 
                                className="botao-logout-header" 
                                onClick={handleLogout}>
                                SAIR
                            </button>
                        </li>
                  </ul>
                  </nav>
              </div>
          </header>
          </div>
    )}

export default Header2;

        