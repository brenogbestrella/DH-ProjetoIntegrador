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
            Agora você pode focar na troca de moeda
            com a facilidade de um clicar de botão,
            sem estresse ou complicações.
            </p>
            <p>
            Com a Tradindin você poderá pesquisar as melhores ofertas de moedas estrangeiras, e efetuar suas trocas de forma simples e direta, conversando diretamente com a outra ponta da equação.
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
            <h2>Como realizar a troca de moedas?</h2>
            <p>
            A plataforma conecta as pessoas que estão oferecendo um tipo de moeda com aquelas que estão em busca de comprar essas mesmas moedas. Após o aceite da oferta, abre-se um canal de comunicação diretamente entre os dois interessados, via número de telefone.
            </p>
            </div>
            <div className="perguntas">
            <h2>Eu consigo cadastrar ofertas para troca de moedas?</h2>
            <p>
            A plataforma permite o cadastro de diversas ofertas para a troca de moedas. Para isso, basta acessar o menu na opção "Cadastrar Oferta" e preencher o formulário. Após a publicação da oferta, a mesma estará disponível para os demais usuários da plataforma. 
            </p>
            </div>
            <div className="perguntas">
            <h2>É possível acessar as ofertas após ter feito reserva?</h2>
            <p>
            Após o aceite de uma oferta, cria-se uma ordem de compra que pode ser acessada através do menu "Ordens de Compra". Todas as ofertas aceitas pelo usuário estarão presentes nesse menu, juntamente com as ofertas cadastradas pelo próprio usuário.            
            </p>
            </div>
            <div className="perguntas">
            <h2>É possível eu atualizar os meus dados ou desativar a minha conta?</h2>
            <p>
            Ao final da sua experiência com a plataforma, caso você deseje, você pode desativar a sua conta. Basta ir ao menu "Pefil", onde você encontrará o "Perfil de Usuário" com os seus dados. Lá você poderá editar as informações do seu cadastro, assim como deletar a sua conta na plataforma.
            </p>
            </div>
        </div>
        </main>

        <Footer2 />
  </div>
  );
};

export default Home;