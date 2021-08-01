import {Link} from 'react-router-dom';
import "./Ajuda.css";
import ajuda from "../../images/ajuda.png";
import Footer2 from '../../components/footer2/Footer2';
import Faq from '../../components/faq/Faq';


function Ajuda() {
  return (
    <div>

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
                <p><Link to="/termos" className="privacidade-botao-div2">CONHEÇA O TERMO AQUI!</Link></p>
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