import React from "react";
import {Link} from 'react-router-dom';
import image_01 from "../../images/image_01.png";

import "./Card02.css";

function Card02(props) {
    return (
        <div className="card2-app-dife_01">
            <div className="app-div-01">
                <img className="app-icone" src={image_01} alt="Ícone" />
            </div>
        <div className="app-div-02">
            <p className="card2-app-nome">{props.ordem.oferta.usuario.nome}</p>
            <p className="app-lugar">Lugar: {props.ordem.endereco}</p>
            <p className="app-data">Data de Retirada: {props.ordem.oferta.data}</p>
            <p className="app-moeda">Moeda:{props.ordem.oferta.moeda?.nome}</p>
            <p className="app-oferta">Quantidade Disponível: {props.ordem.oferta.moeda?.simbolo} {props.ordem.quantidade}</p>

        </div>
        <div className="app-div-03">
        <Link to={{ pathname: `https://api.whatsapp.com/send?phone=${props.ordem.usuario.telefone}` }} target="_blank" className="app-botao-div2">ENTRAR EM CONTATO!</Link>
        </div>
    </div>
    )}
export default Card02;

        