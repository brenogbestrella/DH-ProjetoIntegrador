import { useState } from "react"
import { useHistory } from 'react-router-dom'
import api from "../Services/api";

import "../oferta/Oferta.css";

function Oferta() {
    const [ quantidade, setQuantidade ] = useState("");
    const [ endereco, setEndereco ] = useState("");
    const [ data, setData ] = useState("");
    const [ moeda, setMoeda ] = useState("");
    const [listaMoedas, setListaMoedas] = useState([]);
    const history = useHistory();


    //usar axios para trazer método indexall de moedas para o frontend, com useEffect

    async function handleOnClick (e) {
        e.preventDefault();

        if(!moeda || !quantidade || !data || !endereco) return;

        await api.post("/ofertas", {
            fk_idMoeda: moeda,
            quantidade: quantidade,    
            data: data,
            endereco: endereco,
        })

        history.push("/app")
       
    }


  return (
    <div className="Oferta">
        <header>
            
        </header>
        <body>    
            <div className="oferta_oferta">

        <form className="estilo_formulario" method="post" action=""> 

                        <p className="estilo_formulario_titulo">Cadastrar Oferta</p> 
                    
                        <div className="estilo_formulario_moeda">
                                    <p>MOEDA</p>
                                    <select name="moeda" id="moeda" onChange={(e) => setMoeda(e.target.value)}>
                                        {listaMoedas.map(({ label, idMoeda }) => (
                                        <option
                                            key={idMoeda}
                                            value={idMoeda}
                                        >
                                            {label}
                                        </option>
                                        ))}
                                    {/* <option value="SELECIONAR">Escolher</option>
                                    <option value="saab">Real</option>
                                    <option value="opel">Euro</option>
                                    <option value="audi">Dólar Americano</option>
                                    <option value="audi">Peso Argentino</option> */}
                                    </select>
                        </div>

                                <div className="estilo_formulario_moeda">
                                    
                                    <label htmlFor="quantidade">Quantidade</label>
                                    <input 
                                        id="quantidade" 
                                        name="quantidade" 
                                        required="required" 
                                        type="number" 
                                        placeholder="Mínimo 50 | Máximo 10.000"
                                        value={quantidade}
                                        onChange={(e) => setQuantidade(e.target.value)} 
                                    /> 

                                        
                                    
                                </div>

                        <div className="estilo_formulario_moeda"> 
                            <label htmlFor="endereco">Endereço</label>
                            <input 
                                id="endereco" 
                                name="endereco" 
                                required="required" 
                                type="text" 
                                placeholder="Exemplo: Brasil – SP – Cotia"
                                value={endereco}
                                onChange={(e) => setEndereco(e.target.value)}
                            /> 
                        </div>
                        
                        <div className="estilo_formulario_moeda"> 
                            <label htmlFor="data">Data</label>
                            <input 
                                id="data" 
                                name="data" 
                                required="required" 
                                type="text" 
                                placeholder="Exemplo: 26/04/2025"
                                value={data}
                                onChange={(e) => setData(e.target.value)}
                            />
                        </div>
                        
                        {/* <div className="estilo_formulario_check" >
                                <h7>Moedas que aceita trocar:</h7>
                                <p>
                                    <input 
                                        type="checkbox" 
                                        id="real" 
                                        name="real" 
                                        value="Real"
                                        value={troca}
                                        onChange={(e) => setTroca(e.target.value)}
                                    />
                                    <label for="real"> Real</label>
                                    <input 
                                        type="checkbox" 
                                        id="euro" 
                                        name="euro" 
                                        value="Euro"
                                        value={troca}
                                        onChange={(e) => setTroca(e.target.value)}
                                    />
                                    <label for="euro"> Euro</label>
                                    <input 
                                        type="checkbox" 
                                        id="dolar" 
                                        name="dolar" 
                                        value="Dólar"
                                        value={troca}
                                        onChange={(e) => setTroca(e.target.value)}
                                    />
                                    <label for="dolar"> Dólar Americano</label>
                                    <input 
                                        type="checkbox" 
                                        id="peso" 
                                        name="peso" 
                                        value="Peso"
                                        value={troca}
                                        onChange={(e) => setTroca(e.target.value)}
                                    />
                                    <label for="peso"> Peso Argentino</label>
                                </p>
                        </div> */}

                        <div>
                        
                        <button className="estilo_formulario_botao" onClick={handleOnClick}>
                            CADASTRAR OFERTA
                        </button>
                        </div>
                        
        </form>

                
                </div>
        </body>
        <footer></footer>
  </div>
  );
}

export default Oferta;