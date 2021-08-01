import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom';
import api from "../../Services/api";
import "./Reserva.css";
import Card02 from "../../components/card02/Card02";
import Card03 from "../../components/card03/Card03";
import oferta from "../../images/oferta.png";
import Footer2 from "../../components/footer2/Footer2"
import Card04 from "../../components/card04/Card04";

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
                 Você já leu sobre nossa política de privacidade? <strong>Clique aqui!</strong>
              </p>
            </div>

        </div>
        <div>
        <p className="transacoes-texto">  SUAS ÚLTIMAS TRANSAÇÕES!</p>
        <Card04/>    <Card04/>
        {listaOrdens.map((ordem, i) =>
          (
            <Card02 ordem={ordem} key={i} />
        ))}

        {listaOfertas.map((oferta, i) =>
          (
            <Card03 oferta={oferta} key={i} />
        ))}
     </div>

     <div>
        <p className="transacoes-texto">  SUAS ÚLTIMAS TRANSAÇÕES!</p>
        <Card04/>    <Card04/>
        {listaOrdens.map((ordem, i) =>
          (
            <Card02 ordem={ordem} key={i} />
        ))}

        {listaOfertas.map((oferta, i) =>
          (
            <Card03 oferta={oferta} key={i} />
        ))}
     </div>
    </div>
    <Footer2 />
</div>

</body>

</div>

  );
}

export default Reserva;