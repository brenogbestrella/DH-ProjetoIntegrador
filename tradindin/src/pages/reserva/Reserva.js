import {Link} from 'react-router-dom';
import "./Reserva.css";
import Header2 from "../../components/header2/Header2";
import Card02 from "../../components/card02/Card02";
import oferta from "../../images/oferta.png";


function Reserva() {
  return (
    <div className="Reserva">

<Header2 />

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
        <p className="transacoes-texto">  SUAS ÚLTIMAS TRANSAÇÕES!</p>
        <Card02 />
        <Card02 />
        <Card02 />
        <Card02 />
        <Card02 />
    </div>

</div>

</body>

</div>

  );
}

export default Reserva;