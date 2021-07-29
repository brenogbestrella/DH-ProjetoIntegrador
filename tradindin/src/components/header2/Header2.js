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
              <div className="separa-menu-base">
                  <img className="logo_menu-base" src={logo_trad1} alt="TraDinDin" />
  
                  <nav id="menu-header-base">
                  <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/oferta">Cadastrar Oferta</Link></li>
                        <li><Link to="/ordem">Ordens de Compra</Link></li>
                        <li><Link to="/ajuda">Ajuda</Link></li>
                        <li><Link to="/contato">Contato</Link></li>
                        <li><button 
                                type="button" 
                                className="botao-logout" 
                                onClick={handleLogout}>
                                Sair
                            </button>
                        </li>
                  </ul>
                  </nav>
              </div>
          </header>
          </div>
    )}
          export default Header2;

        