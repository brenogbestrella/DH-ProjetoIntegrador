import { useState } from "react"

import "../oferta/Oferta.css";

function Oferta() {
    // const [ moeda, setMoeda ] = useState("")
    const [ quantidade, setQuantidade ] = useState("")
    const [ endereco, setEndereco ] = useState("")
    const [ data, setData ] = useState("")

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
                                    <select name="moeda" id="moeda">
                                    <option value="SELECIONAR">Escolher</option>
                                    <option value="saab">Real</option>
                                    <option value="opel">Euro</option>
                                    <option value="audi">Dólar Americano</option>
                                    <option value="audi">Peso Argentino</option>
                                    </select>
                        </div>

                                <div className="estilo_formulario_moeda">
                                    
                                    <label for="quantidade">Quantidade</label>
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
                            <label for="endereco">Endereço</label>
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
                            <label for="data">Data</label>
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
                        {/* <Link to ="/app" className="estilo_formulario_botao" type="submit">Cadastrar Oferta</Link>  */}
                        <button className="estilo_formulario_botao" onclick="filterSelection('transhist1')">
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