import "../oferta/Oferta.css";

function Oferta() {
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
                                    <input id="quantidade" name="quantidade" required="required" type="number" placeholder="     Mínimo 50 | Máximo 10.000"/> 

                                        
                                    
                                </div>

                        <div className="estilo_formulario_moeda"> 
                            <label for="endereco">Endereço</label>
                            <input id="endereco" name="endereco" required="required" type="text" placeholder="Exemplo: Brasil – SP – Cotia"/> 
                        </div>
                        
                        <div className="estilo_formulario_moeda"> 
                            <label for="data">Data</label>
                            <input id="data" name="data" required="required" type="text" placeholder="Exemplo: 26/04/2025"/>
                        </div>
                        
                        <div className="estilo_formulario_check" >
                                <h7>Moedas que aceita trocar:</h7>
                                <p>
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                    <label for="vehicle1"> Real</label>
                                    <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
                                    <label for="vehicle2"> Euro</label>
                                <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                                    <label for="vehicle3"> Dólar Americano</label>
                                    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                                    <label for="vehicle3"> Peso Argentino</label>
                                </p>
                        </div>


                        <div> 
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