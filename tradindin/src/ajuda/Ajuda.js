import {Link} from 'react-router-dom';
import "./Ajuda.css";
import Header2 from "../components/header2/Header2";
import Card02 from "../components/card02/Card02";
import ajuda from "../images/ajuda.png";
import Footer2 from '../components/footer2/Footer2';
import Faq from '../components/faq/Faq';


function Ajuda() {
  return (
    <div>

<Header2 />

<body> 
<div className="chamada_ajuda">
      <div className="chamada_seguranca_ajuda">

        <div className="linha-ajuda">

            <span className="chamada_seguranca_ajuda-t1">Ajuda</span>
            <p className="chamada_seguranca_ajuda-t2">Separamos aqui as dúvidas mais frequêntes de nossos usuários!</p>

        </div>

      </div>
     


      <div className="ajuda-card02">
        <div className="elementos-seguranca-img">
            <div className="elementos-seguranca-img01"><img className="seguranca-img" src={ajuda} alt="Ícone" /></div>
            <div className="elementos-seguranca-img02">
                <p className="elementos-seguranca-img02-texto">Já viu nosso Termo de Uso?</p>
                <p><Link className="ajuda-botao-div2">CONHEÇA O TERMO AQUI!</Link></p>
            </div>

            <div className="elementos-seguranca-img03">
              <p className="ajuda-botao-div-mensagem">
                Hey você! Ta precisando de uma ajuda? O nosso site tem uma sessão específica apenas para te ajudar nas dúvidas mais comuns de nossos usuários. Quer conferir? 
                <strong> Clique aqui para te ajudarmos!</strong>
              </p>
            </div>

        </div>
{/* COMEÇANDO */}



<div className="faq-ajuda">
  
<Faq />

</div>




{/* TERMINANDO */}
    </div>
    <Footer2 />
</div>

</body>

</div>

  );
}

export default Ajuda;