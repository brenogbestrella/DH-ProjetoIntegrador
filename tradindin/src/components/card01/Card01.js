import React, { useState } from "react";
import { useHistory  } from 'react-router-dom';
import api from "../../Services/api";
import image_01 from "../../images/image_01.png";

import "./Card01.css";

function Card01(props) {

    const [ data, setData] = useState("");
    const [ quantidade, setQuantidade ] = useState("");
    const [ endereco, setEndereco ] = useState("");
    const [ oferta, setOferta ] = useState("");
    const history = useHistory();

    async function handleOnClick (e) {
        e.preventDefault();

        await api.post("/ordens", {
            fk_idOferta: oferta,
            quantidade: quantidade,    
            data: data,
            endereco: endereco,
        })
        
        history.push("/reserva")
    }

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
        <button className="botao-editar-oferta3" onClick={handleOnClick}> RESERVE AGORA! </button>
        </div>
    </div>
    )}
export default Card01;

        