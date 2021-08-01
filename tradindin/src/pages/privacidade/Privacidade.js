import {Link} from 'react-router-dom';
import "./Privacidade.css";
import help from "../../images/helpimg.png";
import Footer2 from '../../components/footer2/Footer2';


function Privacidade() {
  return (
    <div>

<body> 
<div className="chamada_privacidade">
      <div className="chamada_seguranca_privacidade">

        <div className="linha-privacidade">

            <span className="chamada_seguranca_privacidade-t1">POLÍTICA DE PRIVACIDADE</span>
            <p className="chamada_seguranca_privacidade-t2">Veja as garantias de privacidade do site!</p>

        </div>

      </div>
     


      <div className="privacidade-card02">
        <div className="elementos-seguranca-privacidade-img">
            <div className="elementos-seguranca-privacidade-img01"><img className="seguranca-img-privacidade" src={help} alt="Ícone" /></div>
            <div className="elementos-seguranca-privacidade-img02">
                <p className="elementos-seguranca-privacidade-img02-texto">Opa! Ta precisando de uma ajuda?</p>
                <p><Link to="/ajuda" className="privacidade-botao-div2">CONHEÇA NOSSA PÁGINA FEITA PARA ISTO!</Link></p>
            </div>

            <div className="elementos-seguranca-privacidade-img03">
              <p className="privacidade-botao-div-mensagem">
                Hey você! Ta precisando de uma ajuda? O nosso site tem uma sessão específica apenas para te ajudar nas dúvidas mais comuns de nossos usuários. Quer conferir? 
                <strong><Link className="text-text" to="/ajuda"> Clique aqui para te ajudarmos!</Link></strong>
              </p>
            </div>

        </div>
        <div className="privacidade-uso-texto">

        a. Nossa Plataforma consiste no conjunto de APIs, SDKs, ferramentas, plugins, códigos, tecnologias, conteúdos e serviços que permitem que outras pessoas, inclusive desenvolvedores de aplicativos e operadores de sites, desenvolvam funcionalidades. <br></br> <br></br>
        b. Para usar a Plataforma (inclusive para Tratar quaisquer Dados da Plataforma), você aceita estes Termos da Plataforma (“Termos”), além de todos os outros termos e políticas aplicáveis. <br></br><br></br>
        c. Estes Termos entram em vigor a partir da data em que você os aceitar ou começar a usar ou acessar a Plataforma, e continuarão em vigor até que você pare de acessar e usar a Plataforma, a menos que sejam encerrados previamente conforme descrito abaixo. Se você aceitar estes Termos ou acessar ou usar a Plataforma em nome de uma pessoa jurídica, você declara e garante que tem autoridade para vincular a pessoa jurídica a estes Termos e concorda em nome da pessoa jurídica a ser vinculado por eles (para efeitos de clareza, todas as outras referências a “você” nestes Termos referem-se a essa pessoa jurídica). 
        d. Nossa Plataforma consiste no conjunto de APIs, SDKs, ferramentas, plugins, códigos, tecnologias, conteúdos e serviços que permitem que outras pessoas, inclusive desenvolvedores de aplicativos e operadores de sites, desenvolvam funcionalidades. <br></br> <br></br>
        e. Para usar a Plataforma (inclusive para Tratar quaisquer Dados da Plataforma), você aceita estes Termos da Plataforma (“Termos”), além de todos os outros termos e políticas aplicáveis. <br></br><br></br>
        f. Estes Termos entram em vigor a partir da data em que você os aceitar ou começar a usar ou acessar a Plataforma, e continuarão em vigor até que você pare de acessar e usar a Plataforma, a menos que sejam encerrados previamente conforme descrito abaixo. Se você aceitar estes Termos ou acessar ou usar a Plataforma em nome de uma pessoa jurídica, você declara e garante que tem autoridade para vincular a pessoa jurídica a estes Termos e concorda em nome da pessoa jurídica a ser vinculado por eles (para efeitos de clareza, todas as outras referências a “você” nestes Termos referem-se a essa pessoa jurídica). 
        </div>
    </div>
    <Footer2 />
</div>

</body>

</div>

  );
}

export default Privacidade;