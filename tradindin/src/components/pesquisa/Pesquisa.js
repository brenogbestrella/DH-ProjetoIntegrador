import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

import { getMoedas } from "../../pages/oferta/apiMoeda"

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { registerLocale } from "react-datepicker";
import pt_br from "date-fns/locale/pt-BR";


import local from "../../images/local.svg"
import calendario from "../../images/calendario.png";


import "./Pesquisa.css";

function Pesquisa() {

    registerLocale("ptBR", pt_br);

    const [endereco, setEndereco] = useState("");
    const [startDate, setStartDate ] = useState(new Date());
    const [moeda, setMoeda] = useState("");
    const [listaMoedas, setListaMoedas] = useState([]);

    const history = useHistory();

    
    

    useEffect(() => {
        async function loadMoedasList() {
          const moedasBackend = await getMoedas();
          setListaMoedas(moedasBackend);
        }
    
        loadMoedasList()
      },[]);

    async function onClickBuscar(){

        if(!endereco || !startDate || !moeda) return;

        history.push("/app", {
            endereco,
            data: startDate, 
            moeda
        })
    }



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
                            <span>LOCAL DE RETIRADA</span>
                            <input 
                                className="input-endereco"
                                type="text"
                                name="endereco-retirada"
                                id="endereco-retirada"
                                placeholder="Insira o endereço de retirada do dinheiro"
                                value={endereco}
                                onChange={(e) => setEndereco(e.target.value)}
                            />
                        </div>
                        <div className="local_data">
                            <img src={calendario} alt="Calendário" />
                            <p>
                            <DatePicker
                                locale="ptBR" 
                                selected={startDate} 
                                onChange={(date) => 
                                setStartDate(date)} 
                                dateFormat="dd/MM/yyyy"
                            />
                            </p>
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
                            <button type="submit" onClick={onClickBuscar}>
                            BUSCAR
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            )}
         export default Pesquisa;