import React from "react";
import {Link, useHistory} from 'react-router-dom';
import "./Home.css";
import logo_1 from "../../images/logo_dh.png"
import logo_2 from "../../images/logo_2.png"
import logo_3 from "../../images/logo_3.png"
import logo_4 from "../../images/logo_4.png"
import logo_5 from "../../images/logo_5.png"
import banner_principal3 from "../../images/banner_principal3.png"
import graph from "../../images/graph.png";
import icone_01 from "../../images/icone_01.png";
import icone_02 from "../../images/icone_02.png";
import icone_03 from "../../images/icone_03.png";
import celular from "../../images/celular.png"
import Pesquisa from "../../components/pesquisa/Pesquisa";
import Footer2 from "../../components/footer2/Footer2";


function Home() {

    const history = useHistory();


    async function onClickBuscar(endereco, data, moeda){

        if(!endereco || !data || !moeda) return;

        history.push("/app", {
            endereco,
            data, 
            moeda
        })
    }

  return (
    <div className="Home">

        {/* BANNER */}
        <main className="banner_principal">
        <img
            className="banner_principal_imagem"
            src={banner_principal3}
            alt="Imagem – Pessoa usando o computador"
        />
        <h1>
            A melhor forma de trocar
            <p><span className="rosa"> seu dinheiro</span> está aqui</p>
        </h1>
        <h2>Plataforma ideal para quem quer comprar ou vender dinheiro.</h2>
        <Pesquisa onClickBuscar={onClickBuscar}/>
        </main>
        <div className="linha_divisao">
        <img src={graph} alt="Linha divisória" />
        </div>
        {/* DIVISÃO */}
        <div className="container-divisao">
        <h3>
            Construído para pessoas que precisam vender aquele dinheiro que sobrou
            de uma viagem, ou para quem precisa fazer a melhor cotação e encontrar
            uma casa de câmbio.
        </h3>

        <p className="chamada1">Saiba tudo sobre o Tradindin</p>

        <div className="diferenciais">
            <div className="dife_01">
            <img className="icone_dif" src={icone_01} alt="Ícone" />
            <p>Comprar dinheiro</p>
            <span>
                Compre dinheiros de outros usuários, em qualquer moeda, quando e onde quiser!
            </span>
            
            </div>
            <div className="dife_01">
            <img className="icone_dif" src={icone_03} alt="Ícone" />
            <p>Saia do convêncional</p>
            <span>
            A forma mais tradicional é trocar dinheiro e trocando o real pela moeda desejada em uma casa de câmbio. Trazemos uma nova opção para você!
            </span>
            </div>
            <div className="dife_01">
            <img className="icone_dif" src={icone_02} alt="Ícone" />
            <p>Ofertar dinheiro</p>
            <span>
                Crie uma oferta sobre o valor que você deseja vender e receba ofertas de troca de outros usuários! 
            </span>
            </div>
           
        </div>
        <br /><br />
        </div>

        <main>
         <div className="sobre-nos">
            <div className="celular">
            <img src={celular} alt="celular-descritivo" />
            </div>
            <div className="sobre-nos-texto">
            <h3>Sobre nós</h3>
            <h1>Inovadora, tecnológica e de rápida resolução!</h1>
            <p>
            Agora você pode focar na sua rentabilidade com a
            segurança de operar em uma plataforma completa e
            com o suporte de um time de analistas altamente capacitado.
            </p>
            <p>
            O RLP (Retail Liquidity Provider), que em português significa Provedor de Liquidez para o Varejo, é um serviço desenvolvido pelo mercado, em conjunto com a B3, que permite que as corretoras proporcionem ao cliente maior liquidez nas operações de minicontratos e a garantia de que o preço será sempre melhor ou igual ao book de ofertas.
            </p>

            <Link className="botao-action" to="/termos">TERMOS DE USO</Link>
            </div>
        </div>
        <div className="solucoes">
            <h2>Empresas que usam nossa solução</h2>
            <div className="logo-empresas">
            <img src={logo_1} alt="logo-dh" />
            <img src={logo_2} alt="logo-dh" />
            <img src={logo_3} alt="logo-dh" />
            <img src={logo_4} alt="logo-dh" />
            <img src={logo_5} alt="logo-dh" />
            </div>
        </div>

        <div className="perguntas-frequentes">
            <h1>Perguntas frequentes</h1>
            <p>
            Olá Trader! Sabemos que entender o conceito de um serviço ou site pode ser uma tarefa que leva alguns minutos. Por este motivo selecionamos as perguntas mais recêntes para sanar suas possíveis dúvidas! 
            </p>
        </div>
        <div className="perguntas-box">
            <div className="perguntas">
            <h2>Como ter a visão de Heatmap das minhas listas?</h2>
            <p>
            O Heatmap te proporciona uma visão consolidada de todas as ações que compõem a lista! Elas são representadas por tons verdes ou vermelhos, que significam a intensidade de alta ou queda do papel, respectivamente. Há também a cor azul, que representa uma variação igual a zero.
            </p>
            </div>
            <div className="perguntas">
            <h2>Como enviar ordens limitadas no Multibroker?</h2>
            <p>
            Ordem limitada é uma ferramenta que o mercado oferece que tem o intuído de estabelecer o preço de entrada/saída de um ativo. Diferentemente da “ordem à mercado” em que a ordem é executada com o preço vigente do ativo, na ordem limitada a negociação só será executada se o ativo atingir o preço que o investidor pré determinou. 
            </p>
            </div>
            <div className="perguntas">
            <h2>É possível enviar ordem através do site?</h2>
            <p>
            Você pode enviar ordem de duas formas: Escolhendo o preço deslizando a barra azul(i) ou inserindo manualmente no canto superior esquerdo (ii). Defina a quantidade (iii) e clique no botão comprar(iv). Caso a negociações for venda, clique na seta dupla ao lado (v).            
            </p>
            </div>
            <div className="perguntas">
            <h2>O que é a performance na execução?</h2>
            <p>
            Durante toda a variação de preço do ativo na negociação do pregão, daremos atenção a 3 preços: preço de máxima (maior valor alcançado pelo papel no período), preço de mínima (menor valor alcançado pelo papel no período) e valor de fechamento (último valor negociado no pregão).
            </p>
            </div>
        </div>
        </main>

        <Footer2 />
  </div>
  );
};

export default Home;