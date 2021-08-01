import React, { useState, useEffect  } from "react";
import image_01 from "../../images/image_01.png";
import {Link} from 'react-router-dom';

import "./Card04.css";

function Card04() {
    return (
        <div className="app-dife_01">
        <div className="app-div-01">
                  <img className="app-icone" src={image_01} alt="Ícone" />
        </div>
        <div className="app-div-02">
            <p className="app-nome">Breno Estrella</p>
            <p className="app-lugar">Lugar: Av. Pedro Álvares Cabral - Vila Mariana, São Paulo - SP – Brasil</p>
            <p className="app-data">Data Máxima de Retirada: 18/10/2021</p>
            <p className="app-moeda">Moedas de Troca: €</p>
            <p className="app-oferta">Oferta: R$ 2.500,00</p>
        </div>
        <div className="app-div-03">
            <Link to={{ pathname: `https://api.whatsapp.com/send?phone=5511999026616` }} target="_blank" className="app-botao-div2">FAZER OFERTA!</Link>
        </div>
          </div>
    )}
export default Card04;

        