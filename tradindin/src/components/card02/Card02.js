import React from "react";
import {Link} from 'react-router-dom';
import image_01 from "../../images/image_01.png";

import "./Card02.css";
import logo_trad1 from "../../images/logo_trad1.png"

function Card02() {
    return (
        <div className="card2-app-dife_01">
            <div className="app-div-01">
                <img className="app-icone" src={image_01} alt="Ícone" />
            </div>
        <div className="app-div-02">
            <p className="card2-app-nome">Trocou com: Felipe Marcelinos</p>
            <p className="card2-app-recebeu">Recebeu: R$ 1.000,00</p>
            <p className="card2-app-enviou">Enviou: $ 195,00</p>

        </div>
        <div className="app-div-03">
            <Link className="app-botao-div2">ENTRAR EM CONTATO!</Link>
        </div>
    </div>
    )}
export default Card02;

        