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
            <img className="icone_dif" src={icone_02} alt="Ícone" />
            <p>Ofertar dinheiro</p>
            <span>
                Crie uma oferta sobre o valor que você deseja vender!
            </span>
            </div>
            <div className="dife_01">
            <img className="icone_dif" src={icone_03} alt="Ícone" />
            <p>Saia do convêncional</p>
            <span>
            A forma mais tradicional é trocar dinheiro e trocando o real pela moeda desejada em uma casa de câmbio. Trazemos uma nova opção para você!
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
            <h1>Uma chamada descritiva para Plataforma de Cryptocoins</h1>
            <p>
                Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius.
                Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Leite
                de capivaris, leite de mula manquis sem cabeça. Copo furadis é
                disculpa de bebadis, arcu quam euismod magna. In elementis mé pra
                quem é amistosis quis leo.
            </p>
            <p>
                Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam
                vulputate dapibus. Casamentiss faiz malandris se pirulitá. Manduma
                pindureta quium dia nois paga. Sapien in monti palavris qui num
                significa nadis i pareci latim.
            </p>

            <Link className="botao-action">Call to Action</Link>
            {/* <a className="botao-action"> Call to Action</a> */}
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
            <h2>How Does a Hello World?</h2>
            <p>
                Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo
                pose. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis,
                aguis e fermentis. Sapien in monti palavris qui num significa nadis
                i pareci latim. Diuretics paradis num copo é motivis de denguis.
            </p>
            </div>
            <div className="perguntas">
            <h2>How Does a Hello World?</h2>
            <p>
                Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo
                pose. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis,
                aguis e fermentis. Sapien in monti palavris qui num significa nadis
                i pareci latim. Diuretics paradis num copo é motivis de denguis.
            </p>
            </div>
            <div className="perguntas">
            <h2>How Does a Hello World?</h2>
            <p>
                Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo
                pose. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis,
                aguis e fermentis. Sapien in monti palavris qui num significa nadis
                i pareci latim. Diuretics paradis num copo é motivis de denguis.
            </p>
            </div>
            <div className="perguntas">
            <h2>How Does a Hello World?</h2>
            <p>
                Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo
                pose. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis,
                aguis e fermentis. Sapien in monti palavris qui num significa nadis
                i pareci latim. Diuretics paradis num copo é motivis de denguiss.
            </p>
            </div>
        </div>
        </main>

        <Footer2 />
  </div>
  );
};

export default Home;