import React, { useState, useEffect } from "react"
import {Link, useHistory } from 'react-router-dom'
import api from "../../Services/api";

import "./App.css";

import Pesquisa from "../../components/pesquisa/Pesquisa";
import Card01 from "../../components/card01/Card01";
import Footer2 from "../../components/footer2/Footer2";
import image_02 from "../../images/image_02.png";
import image_03 from "../../images/image_03.png";
import image_04 from "../../images/image_04.png";

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
                                    Ofertas patrocinadas!  
                            </div>

                            <div className="app-dife_01">
                                  <div className="app-div-01">
                                            <img className="app-icone" src={image_04} alt="Ícone" />
                                  </div>
                                  <div className="app-div-02">
                                      <p className="app-nome">Felipe Marcelino</p>
                                      <p className="app-lugar">Lugar: Rodovia dos Bandeirantes, km 72, Vinhedo/Sp - Brasil</p>
                                      <p className="app-data">Data Máxima de Retirada: 25/09/2021</p>
                                      <p className="app-moeda">Moeda: Dólar</p>
                                      <p className="app-oferta">Quantidade Disponível: $ 5.000,00</p>
                                  </div>
                                  <div className="app-div-03">
                                      <Link to={{ pathname: `https://api.whatsapp.com/send?phone=5511999026616` }} target="_blank" className="app-botao-div2">RESERVAR!</Link>
                                  </div>
                            </div>

                            <div className="app-dife_01">
                                  <div className="app-div-01">
                                            <img className="app-icone" src={image_03} alt="Ícone" />
                                  </div>
                                  <div className="app-div-02">
                                      <p className="app-nome">Ivens Junior</p>
                                      <p className="app-lugar">Lugar: Rua Inácio Francisco de Souza, 1597 - Penha/sc - Brasil</p>
                                      <p className="app-data">Data Máxima de Retirada: 28 /09/2021</p>
                                      <p className="app-moeda">Moeda: Real</p>
                                      <p className="app-oferta">Quantidade Disponível: 10.000,00</p>
                                  </div>
                                  <div className="app-div-03">
                                      <Link to={{ pathname: `https://api.whatsapp.com/send?phone=5511999026616` }} target="_blank" className="app-botao-div2">RESERVAR!</Link>
                                  </div>
                            </div>

                            <div className="app-dife_01">
                                  <div className="app-div-01">
                                            <img className="app-icone" src={image_02} alt="Ícone" />
                                  </div>
                                  <div className="app-div-02">
                                      <p className="app-nome">Breno Estrella</p>
                                      <p className="app-lugar">Lugar: Av. Pedro Álvares Cabral - Vila Mariana, São Paulo - SP – Brasil</p>
                                      <p className="app-data">Data Máxima de Retirada: 18/10/2021</p>
                                      <p className="app-moeda">Moeda: Euro</p>
                                      <p className="app-oferta">Quantidade Disponível: 2.500,00</p>
                                  </div>
                                  <div className="app-div-03">
                                      <Link to={{ pathname: `https://api.whatsapp.com/send?phone=5511999026616` }} target="_blank" className="app-botao-div2">RESERVAR!</Link>
                                  </div>
                            </div>


                            <div className="texto5">                    
                                    Confira ofertas pesquisadas!  
                            </div>
                            {listaOfertas.map((oferta, i) =>
                            (
                                <Card01 oferta={oferta} key={i} />
                            ))}

                              <p className="fim-pesquisa">Faça uma nova pesquisa para aparecer novas ofertas =) </p>
                    </div>

                    
                </div>
            </div>
        </div>

    <Footer2 />
</body>
);
}

export default App;