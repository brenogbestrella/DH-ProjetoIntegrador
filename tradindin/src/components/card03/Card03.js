import React from "react";
import image_01 from "../../images/image_01.png";

import "./Card03.css";

function Card03(props) {
    return (
        <div className="card3-app-dife_01">
            <div className="app-div-01">
                <img className="app-icone" src={image_01} alt="Ícone" />
            </div>
        <div className="app-div-02">
            <p className="card3-app-nome">#{props.oferta.id_oferta}</p>
            <p className="app-lugar">Lugar: {props.oferta?.endereco}</p>
            <p className="app-data">Data de Retirada: {props.oferta?.data}</p>
            <p className="app-moeda">Moeda: {props.oferta.moeda?.nome}</p>
            <p className="app-oferta">Quantidade Disponível: {props.oferta.moeda?.simbolo} {props.oferta?.quantidade}</p>

        </div>
        <div className="app-div-03">
        {/* <Link to={{ pathname: `https://api.whatsapp.com/send?phone=${props.oferta.usuario.telefone}` }} target="_blank" className="app-botao-div2">ENTRAR EM CONTATO!</Link> */}
        </div>
    </div>
    )}
export default Card03;

        