import React, { useState, useEffect } from "react";

import { getMoedas } from "../../pages/oferta/apiMoeda"


import local from "../../images/local.svg"
import calendario from "../../images/calendario.png";


import "./Pesquisa.css";

function Pesquisa(props) {


    const [endereco, setEndereco] = useState("");
    const [data, setData ] = useState("");
    const [moeda, setMoeda] = useState("");
    const [listaMoedas, setListaMoedas] = useState([]);

    
    

    useEffect(() => {
        async function loadMoedasList() {
          const moedasBackend = await getMoedas();
          setListaMoedas(moedasBackend);
        }
    
        loadMoedasList()
      },[]);

   



    return (
        <div className="pesquisa">
                    <div className="pesquisa_moldura">
                    <div className="elementos0">
                        <div className="elementos1">
                            <div>
                                <span>FAÇA UMA BUSCA AGORA MESMO!</span>
                            </div>
                        </div>

                        <div className="elementos2">
                        <div className="local_partida">
                            <img src={local} alt="Local" />
                        
                            <input 
                                className="input-endereco"
                                type="text"
                                name="endereco-retirada"
                                id="endereco-retirada"
                                placeholder="Insira o endereço"
                                value={endereco}
                                onChange={(e) => setEndereco(e.target.value)}
                            />
                        </div>
                        <div className="local_data">
                            <img src={calendario} alt="Calendário" />
                            <input 
                                className="input-endereco"
                                type="date"
                                name="data-retirada"
                                id="data retirada"
                                placeholder="DD/MM/AAAA"
                                value={data}
                                onChange={(e) => setData(e.target.value)} />
                        </div>
                        <div className="local_moeda">
                            <p>MOEDA</p>

                            <select name="moeda" id="moeda" onChange={(e) => setMoeda(e.target.value)}>
                                    {listaMoedas.map(({ nome, id_moeda }) => (
                                    <option
                                        key={id_moeda}
                                        value={id_moeda}
                                    >
                                            {nome}
                                    </option>
                                    ))}
                            </select>
                        </div>
                        <div className="local_buscar">
                            <button type="submit" onClick={() => props.onClickBuscar(endereco, data, moeda)}>
                            BUSCAR
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            )}
         export default Pesquisa;