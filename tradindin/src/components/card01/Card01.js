import React from "react";
import {Link} from 'react-router-dom';
import image_01 from "../../images/image_01.png";

import "./Card01.css";

function Card01(props) {
    return (
        <div className="app-dife_01">
            <div className="app-div-01">
                <img className="app-icone" src={image_01} alt="Ícone" />
            </div>
        <div className="app-div-02">
            <p className="app-nome">{props.oferta.usuario?.nome}</p>
            <p className="app-lugar">{props.oferta?.endereco}</p>
            <p className="app-data">{props.oferta?.data}</p>
            <p className="app-moeda">{props.oferta.moeda?.nome}</p>
            <p className="app-oferta">{props.oferta.moeda?.simbolo} {props.oferta?.quantidade}</p>
        </div>
        <div className="app-div-03">
        <Link to={{ pathname: `https://api.whatsapp.com/send?phone=${props.oferta.usuario?.telefone}` }} target="_blank" className="app-botao-div2">FAZER OFERTA!</Link>
        </div>
    </div>
    )}
export default Card01;

        