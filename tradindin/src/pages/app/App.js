import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import api from "../../Services/api";

import "./App.css";

import Pesquisa from "../../components/pesquisa/Pesquisa";
import Card01 from "../../components/card01/Card01";
import Footer2 from "../../components/footer2/Footer2";



function App() {

  const [listaOfertas, setListaOfertas] = useState([]);

  const history = useHistory();

  useEffect(() => {  

    

    loadOfertas(history.location.state?.endereco, history.location.state?.data, history.location.state?.moeda);
  }, [history]);

  async function loadOfertas(endereco, dataOferta, moeda) {
    const { data } = await api.get('/ofertas', {
      params: {
        endereco: endereco,
        data: dataOferta,
        moeda: moeda,
      }
    });

    setListaOfertas(data);
  } 

  async function onClickBuscar(endereco, data, moeda) {
    loadOfertas(endereco, data, moeda)
  }


  return (
    <body> 
        <div className="Home">
                <div className="onda"><spam className="onda-imagem" src="null" alt="Ícone"></spam> </div>
               
                          
                        
                    <div className="app-coluna">    
                        <div className="app-coluna2"> 

                            <div className="app-pesquisa"> 
                                <Pesquisa onClickBuscar={onClickBuscar}/> 
                            </div>
                            
                    <div className="app-diferenciais">
                            <div className="texto5">                    
                                    Confira as ofertas mais recentes!  
                            </div>
                            {listaOfertas.map(oferta =>
                            (
                                <Card01 oferta={oferta} />
                            ))}
                    </div>

                    
                </div>
            </div>
        </div>

    <Footer2 />
</body>
);
}

export default App;