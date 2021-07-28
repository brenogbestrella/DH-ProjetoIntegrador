import React, { useState, useEffect } from "react"
import {useHistory} from 'react-router-dom'
import api from "../Services/api";

import "./App.css";
import Header2 from "../components/header2/Header2";
import Pesquisa from "../components/pesquisa/Pesquisa";
import Card01 from "../components/card01/Card01";
import wave from "../images/wave.png";

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
      const { data } = await api.get('/getofertas', {
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
    <div className="Home">

<Header2 />

<body> 

    <div className="onda"><img className="onda-imagem" src={wave} alt="Ícone" /></div>

    <div className="app-coluna"> 

        <div className="app-pesquisa"> < Pesquisa/></div>
        <div className="texto1"><p>Confira as ofertas mais recentes!</p></div>

        <div className="app-diferenciais">
        
            < Card01/>
            < Card01/>
            < Card01/>
            < Card01/>
            < Card01/>
            < Card01/>
            < Card01/>
            < Card01/>
            < Card01/>
            < Card01/>
            < Card01/>
              
        </div>

    </div>
        
</body>
</div>

  );
}

export default App;