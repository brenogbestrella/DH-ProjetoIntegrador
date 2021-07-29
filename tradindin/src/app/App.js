import React, { useState, useEffect } from "react"
import {useHistory} from 'react-router-dom'
import api from "../Services/api";

import "./App.css";
import Header2 from "../components/header2/Header2";
import Pesquisa from "../components/pesquisa/Pesquisa";
import Card01 from "../components/card01/Card01";
import Footer2 from "../components/footer2/Footer2";

import {Link} from 'react-router-dom';
import image_01 from "../images/image_01.png";

function App() {

  const [endereco, setEndereco] = useState("");
  const [data, setData ] = useState("");
  const [moeda, setMoeda] = useState("");
  const [listaOfertas, setListaOfertas] = useState([]);

  const history = useHistory();

  useEffect(() => {    
    setEndereco(history.location.state?.endereco);
    setData(history.location.state?.data);
    setMoeda(history.location.state?.moeda);         

    async function loadOfertas() {
      const { data } = await api.get('/ofertas', {
        params: {
          cidade: history.location.state?.data,
          data: history.location.state?.cidade,
          moeda: history.location.state?.moeda
        }
      });

      setListaOfertas(data);
    }

    loadOfertas();
  }, [history]);


  return (
<body> 

    <div className="Home">

<Header2 />


    <div className="onda"><spam className="onda-imagem" src="null" alt="Ícone"></spam> </div>

    <div className="app-coluna">    
     <div className="app-coluna2"> 

        <div className="app-pesquisa"> < Pesquisa/></div>
        <div className="texto1"><p>Confira as ofertas mais recentes!</p></div>

        <div className="app-diferenciais">
        
          {listaOfertas.map(oferta =>
          (
            < Card01 oferta={oferta} />
          ))}
      <div className="app-dife_01">
            <div className="app-div-01">
                <img className="app-icone" src={image_01} alt="Ícone" />
            </div>
                                                              <div className="app-div-02">
                                                                  <p className="app-nome">Felipe Marcelino</p>
                                                                  <p className="app-lugar">teste</p>
                                                                  <p className="app-data">Data Máxima de Retirada: 25/09/2021</p>
                                                                  <p className="app-moeda">Moedas de Troca: R$ | $</p>
                                                                  <p className="app-oferta">Oferta: R$ 5.000,00</p>
                                                              </div>
                                                              <div className="app-div-03">
                                                            
                                                                  <Link to={{ pathname: "https://api.whatsapp.com/send?phone=5547996988383%E2%80%9D" }} target="_blank" className="app-botao-div2">FAZER OFERTA</Link>

                                                              </div>
                                                          </div>

                                                          <div className="app-dife_01">
                                                                  <div className="app-div-01">
                                                                      <img className="app-icone" src={image_01} alt="Ícone" />
                                                                  </div>
                                                              <div className="app-div-02">
                                                                  <p className="app-nome">Felipe Marcelino</p>
                                                                  <p className="app-lugar">teste</p>
                                                                  <p className="app-data">Data Máxima de Retirada: 25/09/2021</p>
                                                                  <p className="app-moeda">Moedas de Troca: R$ | $</p>
                                                                  <p className="app-oferta">Oferta: R$ 5.000,00</p>
                                                              </div>
                                                              <div className="app-div-03">
                                                                  <Link className="app-botao-div2">FAZER OFERTA!</Link>
                                                              </div>
                                                          </div>

                                                          <div className="app-dife_01">
                                                                  <div className="app-div-01">
                                                                      <img className="app-icone" src={image_01} alt="Ícone" />
                                                                  </div>
                                                              <div className="app-div-02">
                                                                  <p className="app-nome">Felipe Marcelino</p>
                                                                  <p className="app-lugar">teste</p>
                                                                  <p className="app-data">Data Máxima de Retirada: 25/09/2021</p>
                                                                  <p className="app-moeda">Moedas de Troca: R$ | $</p>
                                                                  <p className="app-oferta">Oferta: R$ 5.000,00</p>
                                                              </div>
                                                              <div className="app-div-03">
                                                                  <Link className="app-botao-div2">FAZER OFERTA!</Link>
                                                              </div>
                                                          </div>

                                                          <div className="app-dife_01">
                                                                  <div className="app-div-01">
                                                                      <img className="app-icone" src={image_01} alt="Ícone" />
                                                                  </div>
                                                              <div className="app-div-02">
                                                                  <p className="app-nome">Felipe Marcelino</p>
                                                                  <p className="app-lugar">teste</p>
                                                                  <p className="app-data">Data Máxima de Retirada: 25/09/2021</p>
                                                                  <p className="app-moeda">Moedas de Troca: R$ | $</p>
                                                                  <p className="app-oferta">Oferta: R$ 5.000,00</p>
                                                              </div>
                                                              <div className="app-div-03">
                                                                  <Link className="app-botao-div2">FAZER OFERTA!</Link>
                                                              </div>
                                                          </div>

                                                          <div className="app-dife_01">
                                                                  <div className="app-div-01">
                                                                      <img className="app-icone" src={image_01} alt="Ícone" />
                                                                  </div>
                                                              <div className="app-div-02">
                                                                  <p className="app-nome">Felipe Marcelino</p>
                                                                  <p className="app-lugar">teste</p>
                                                                  <p className="app-data">Data Máxima de Retirada: 25/09/2021</p>
                                                                  <p className="app-moeda">Moedas de Troca: R$ | $</p>
                                                                  <p className="app-oferta">Oferta: R$ 5.000,00</p>
                                                              </div>
                                                              <div className="app-div-03">
                                                                  <Link className="app-botao-div2">FAZER OFERTA!</Link>
                                                              </div>
                                                          </div>




        </div>

    </div>
    
</div>
</div>

<Footer2 />
</body>
  );
}

export default App;