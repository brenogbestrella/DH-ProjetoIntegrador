import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom';
import api from "../../Services/api";
import "./Reserva.css";
import Card02 from "../../components/card02/Card02";
import Card03 from "../../components/card03/Card03";
import oferta from "../../images/oferta.png";
import Footer2 from "../../components/footer2/Footer2"

function Reserva() {

  const [listaOrdens, setListaOrdens] = useState([]);
  const [listaOfertas, setListaOfertas] = useState([]);

  useEffect(() => {
    async function loadOrdens() {
      const { data } = await api.get('/ordens');
  
      setListaOrdens(data);
    }
    async function loadOfertas() {
      const { data } = await api.get('/ofertas/minhasofertas');
  
      setListaOfertas(data);
    }
    loadOrdens();
    loadOfertas();

  },[]);

  

  

  return (
    <div className="Reserva">

<body> 
<div className="chamada_reserva">
      <div className="chamada_oferta_reserva">

        <div className="linha">

            <span className="chamada_oferta_reserva-t1">Histórico</span>
            <p className="chamada_oferta_reserva-t2">Encontre aqui suas transações aceitas</p>

        </div>

      </div>
     


      <div className="reserva-card02">
        <div className="elementos-oferta-img">
            <div className="elementos-oferta-img01"><img className="oferta-img" src={oferta} alt="Ícone" /></div>
            <div className="elementos-oferta-img02">
                <p className="elementos-oferta-img02-texto">TA AFIM DE FAZER UMA NOVA OFERTA?</p>
                <p><Link className="reserva-botao-div2">PLANEJE SUA NOVA TRANSAÇÃO</Link></p>
            </div>

            <div className="elementos-oferta-img03">
              <p className="reserva-botao-div-mensagem">
                 A facilidade e a comodidade de fazer negócio, com apenas alguns cliques.
                 Pesquisar preços e encontrar a troca perfeita para você ficou mais fácil.
                 Você já leu sobre nossa política de privacidade? <strong><Link className="text-text-reserva" to="/privacidade"> Clique aqui!</Link></strong>
              </p>
            </div>

        </div>
        <div className="bloco-total">
    
            <div className="bloco-esquerda">
                <p className="transacoes-texto-reserva">SUAS ÚLTIMAS TRANSAÇÕES!</p>
                {listaOrdens.map((ordem, i) =>
                  (
                    <Card02 ordem={ordem} key={i} />
                ))}
          </div>

          <div className="bloco-direita">
                <p className="transacoes-texto-oferta">OFERTAS REGISTRADAS!</p>

                {listaOfertas.map((oferta, i) =>
                  (
                    <Card03 oferta={oferta} key={i} />
                ))}
          </div>

       </div>
    </div>
    <Footer2 />
</div>

</body>

</div>

  );
}

export default Reserva;