import React from "react";
import {Link} from 'react-router-dom';
import image_01 from "../../images/image_01.png";

import "./Card01.css";
import logo_trad1 from "../../images/logo_trad1.png"

function Card01() {
    return (
        <div className="app-dife_01">
            <div className="app-div-01">
                <img className="app-icone" src={image_01} alt="Ícone" />
            </div>
        <div className="app-div-02">
            <p className="app-nome">Felipe Marcelino</p>
            <p className="app-lugar">Lugar: Brasil | São Paulo</p>
            <p className="app-data">Data Máxima de Retirada: 25/09/2021</p>
            <p className="app-moeda">Moedas de Troca: R$ | $</p>
            <p className="app-oferta">Oferta: R$ 5.000,00</p>
        </div>
        <div className="app-div-03">
            <Link className="app-botao-div2">FAZER OFERTA!</Link>
        </div>
    </div>
    )}
export default Card01;

        