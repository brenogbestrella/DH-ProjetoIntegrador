import React from "react";
import {Link} from 'react-router-dom';

import "./Header.css";
import logo_trad1 from "../../images/logo_trad1.png"

function Header() {
    return (
      <div className="Header-base1">
          <header>
            <div className="tabela-menu">
            <Link className="div-a-logo" to="/">  <img className="logo_menu-base1" src={logo_trad1} alt="TraDinDin"/> </Link>
                    <div className="menu-header-base1">
                            <nav id="menu-header-base">
                                <ul className="ul-header-base1">
                                    <li><Link to="/privacidade">POLÍTICA DE PRIVACIDADE</Link></li>
                                    <li><Link to="/ajuda">AJUDA</Link></li>
                                    <li><Link to="/termos">TERMO DE USO</Link></li>
                                    <li><Link to="/contato">CONTATO</Link></li>
                                   <li className="botao-login-trade"><Link to="/login">LOGIN</Link></li>
                                </ul>
                            </nav>
                    </div>
            </div>
          </header>
          </div>
    )}

export default Header;

        