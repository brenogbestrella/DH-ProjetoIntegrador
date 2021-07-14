import React from "react";
import {Link} from 'react-router-dom';

import local from "../../images/local.svg"
import calendario from "../../images/calendario.png";
import graph from "../../images/graph.png";
import icone_01 from "../../images/icone_01.png";
import icone_02 from "../../images/icone_02.png";
import icone_03 from "../../images/icone_03.png";

import "./Pesquisa.css";

function Pesquisa() {
    return (

<div className="pesquisa">
            <div className="pesquisa_moldura">
            <div className="elementos0">
                <div className="elementos1">
                <div>
                    <span>FAÇA UMA BUSCA AGORA MESMO!</span>
                </div>
                <div className="radio_elemento_1">
                    <input
                    type="radio"
                    name="acao"
                    id="comprar"
                    value="comprar"
                    checked
                    />
                    <label for="comprar">COMPRAR</label>
                    <input type="radio" name="acao" id="vender" value="vender" />
                    <label for="vender">VENDER</label>
                </div>
                </div>

                <div className="elementos2">
                <div className="local_partida">
                    <img src={local} alt="Local" />
                    <p>
                    <span>LOCAL DE RETIRADA</span>
                    <textarea>
                        Insira o local que pretende retirar o dinheiro.
                    </textarea>
                    </p>
                </div>

                <div className="local_data">
                    <img src={calendario} alt="Calendário" />
                    <p>
                    <span>DATA</span>
                    <textarea>
                        Insira a data que pretende retirar o dinheiro.
                    </textarea>
                    </p>
                </div>

                <div className="local_moeda">
                    <p>MOEDA</p>
                    <select name="moeda" id="moeda">
                    <option value="SELECIONAR">SELECIONAR</option>
                    <option value="saab">Real</option>
                    <option value="opel">Euro</option>
                    <option value="audi">Dólar Americano</option>
                    <option value="audi">Peso Argentino</option>
                    </select>
                </div>

                <div className="local_buscar">
                    <button type="submit" onclick="window.location.href='/page2'">
                    BUSCAR
                    </button>
                </div>
                </div>
            </div>
            </div>
        </div>
    )}
         export default Pesquisa;