import React from "react";
import {Link} from 'react-router-dom';
import logo from "../../images/logo.png"
import linkedin from "../../images/linkedin.svg"
import github_big_logo from "../../images/github_big_logo.svg";
import instagram from "../../images/instagram.svg";
import facebook from "../../images/facebook_app_symbol.svg";
import "./Footer2.css";

function Footer2() {
    return (

<footer className="container-footer">
{/* CAIXA FOTO DE PERFIL */}

{/* CAIXA DA ESQUERDA */}

<div className="item config">
    <div className="logo config">
    <figure>
        <img
        className="logo-footer"
        src={logo}
        alt="Logo da Pagina"
        />
    </figure>
    </div>
    <p className="texto-footer">
    Fullstack Node JS student mais nao sei por onde começar ainda mais hj!
    Odio ut sem nulla pharetra diam sit amet nisl suscipit.
    </p>
    <nav className="redes config">
    <ul className="linha-footer-logo">
        <li>
        <Link>
            <img src={linkedin} alt="Linkedin" />
        </Link>
        </li>
        <li>
        <Link>
            <img src={github_big_logo} alt="Github" />
        </Link>
        </li>
        <li>
        <Link>
            <img src={instagram} alt="instagram" />
        </Link>
        </li>
        <li>
        <Link>
            <img src={facebook} alt="Facebook" />
        </Link>
        </li>
    </ul>
    </nav>
</div>

{/* CAIXA DO CENTRO */}
<div className="item itemcentro">
    <nav className="conteudo">
    <h4>CONTACT US</h4>
    <ul>
        <li>
        <Link>
            grupo5@digitalhouse.com
        </Link>
        </li>
        <li>
        <Link> 
            (00) 99999-9999
        </Link>
        </li>
        <li>
        <Link>
            330 Franklin Road, São Paulo 135A, Lugar Centro, CEP
            055-65010
        </Link>
        </li>
    </ul>
    </nav>
</div>
{/* CAIXA DA DIREITA */}
<div className="item dividirmeio">
    <div className="titulo">
    <h4>LINKS IMPORTANTES</h4>
    </div>
    <div className="primeiro">
    <nav className="conteudo">
        <ul>
        <li>
            <Link>Link 1</Link>
        </li>
        <li>
            <Link>Link 2</Link>
        </li>
        <li>
            <Link>Link 3</Link>
        </li>
        <li>
            <Link>Link 4</Link>
        </li>
        </ul>
    </nav>
    </div>
    <div className="segundo">
    <nav className="conteudo">
        <ul>
        <li>
            <Link>AJUDA</Link>
        </li>
        <li>
            <Link>TERMO DE USO</Link>
        </li>
        <li>
            <Link>POLÍTICA DE PRIVACIDADE</Link>
        </li>
        <li>
            <Link>ACEITE</Link>
        </li>
        </ul>
    </nav>
    </div>
</div>

{/* CAIXA DE BAIXO */}
<div className="caixa-baixo">
    <h5>
    Copyright © 2021. Todos os direitos reservados ao GRUPO 5 da Digital
    House.
    </h5>
</div>
</footer>

)}
export default Footer2;
