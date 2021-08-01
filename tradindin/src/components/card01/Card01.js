import React, { useState, useEffect  } from "react";
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

    useEffect(() => {
        setData(props.oferta.data);
        setEndereco(props.oferta.endereco);
        setQuantidade(props.oferta.quantidade)
        setOferta(props.oferta.id_oferta)

      },[props.oferta.data, props.oferta.endereco, props.oferta.quantidade, props.oferta.id_oferta]);

    async function handleCriarOrdem (e) {
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
            <p className="app-lugar">Lugar: {props.oferta?.endereco}</p>
            <p className="app-data">Data de Retirada: {props.oferta?.data}</p>
            <p className="app-moeda">Moeda: {props.oferta.moeda?.nome}</p>
            <p className="app-oferta">Quantidade Disponível: {props.oferta.moeda?.simbolo} {props.oferta?.quantidade}</p>
        </div>
        <div className="app-div-03">
        <button className="app-botao-div2" onClick={handleCriarOrdem}>RESERVAR!</button>
        </div>
    </div>
    )}
export default Card01;

        