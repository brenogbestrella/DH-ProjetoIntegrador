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
    A maior plataforma para troca de moedas na América Latina. 
    
    </p>
    <nav className="redes config">
    <ul className="linha-footer-logo">
        <li>
        <Link to={{ pathname: `https://www.linkedin.com/school/digital-house-brasil/` }} target="_blank">
            <img src={linkedin} alt="Linkedin" />
        </Link>
        </li>
        <li>
        <Link to={{ pathname: `https://github.com/brenogbestrella/DH-ProjetoIntegrador` }} target="_blank">
            <img src={github_big_logo} alt="Github" />
        </Link>
        </li>
        <li>
        <Link to={{ pathname: `https://www.instagram.com/digitalhousebrasil/?hl=pt` }} target="_blank">
            <img src={instagram} alt="instagram" />
        </Link>
        </li>
        <li>
        <Link to={{ pathname: `https://www.facebook.com/digitalhousebrasil/` }} target="_blank">
            <img src={facebook} alt="Facebook" />
        </Link>
        </li>
    </ul>
    </nav>
</div>

{/* CAIXA DO CENTRO */}
<div className="item itemcentro">
    <nav className="conteudo">
    <h4>FALE CONOSCO</h4>
    <ul>
        <li>
        <Link>
            grupo5@digitalhouse.com
        </Link>
        </li>
        <li>
        <Link> 
            +55 11 3500-9839
        </Link>
        </li>
        <li>
        <Link>
            330 Franklin Road, São Paulo 135A,<br></br>
            Lugar Centro, CEP 055-65010
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
    <div className="segundo">
    <nav className="conteudo">
        <ul>
        <li>
        <Link to="/privacidade">POLÍTICA DE PRIVACIDADE</Link>
        </li>
        <li>
             <Link to="/termos">TERMO DE USO</Link>
        </li>
        <li>
        <Link to="/ajuda">AJUDA</Link>
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
