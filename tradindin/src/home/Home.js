import React, { useState } from "react";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { Link } from "react-router-dom";

import "./Home.css";
import logo_trad1 from "../images/logo_trad1.png";
import logo from "../images/logo.png";
import logo_dh from "../images/logo_dh.png";
import banner_principal3 from "../images/banner_principal3.png";
import local from "../images/local.svg";
import calendario from "../images/calendario.png";
import graph from "../images/graph.png";
import icone_01 from "../images/icone_01.png";
import icone_02 from "../images/icone_02.png";
import icone_03 from "../images/icone_03.png";
import celular from "../images/celular.png";
import linkedin from "../images/linkedin.svg";
import github_big_logo from "../images/github_big_logo.svg";
import instagram from "../images/instagram.svg";
import facebook_app_symbol from "../images/facebook_app_symbol.svg";

function Home() {
  const startDate = new Date();

  const [value, onChange] = useState(new Date());

  return (
    <div className="Home">
      <header>
        <div className="separa-menu">
          <img className="logo_menu" src={logo_trad1} alt="TraDinDin" />

          <nav id="menu-header">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contato">Contato</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <body>
        {/* BANNER */}
        <main className="banner_principal">
          <img
            className="banner_principal_imagem"
            src={banner_principal3}
            alt="Imagem – Pessoa usando o computador"
          />
          <h1>
            A melhor forma de trocar
            <p>
              <span className="rosa"> seu dinheiro</span> esta aqui
            </p>
          </h1>
          <h2>Plataforma ideal para quem quer comprar ou vender dinheiro.</h2>

          {/* FORMULÁRIO DE PESQUISA */}
          <div className="pesquisa">
            <div className="pesquisa_moldura">
              <div className="elementos0">
                <div className="elementos1">
                  <div>
                    <span>FAÇA UMA BUSCA AGORA MESMO!</span>
                  </div>
                  <div className="radio_elemento_1">
                    <input
                      type="radio"
                      name="acao"
                      id="comprar"
                      value="comprar"
                      checked
                    />
                    <label for="comprar">COMPRAR</label>
                    <input
                      type="radio"
                      name="acao"
                      id="vender"
                      value="vender"
                    />
                    <label for="vender">VENDER</label>
                  </div>
                </div>

                <div className="elementos2">
                  <div className="local_partida">
                    <img src={local} alt="Local" />
                    <p>
                      <span>LOCAL DE RETIRADA</span>
                      <textarea>
                        Insira o local que pretende retirar o dinheiro.
                      </textarea>
                    </p>
                  </div>

                  <div className="local_data">
                    <img src={calendario} alt="Calendário" />
                    <p>
                      <span>DATA</span>
                      {/* botar o calendar dentro do botao pra chamar e deschamar */}
                      <Calendar
                        minDate={startDate}
                        onChange={onChange}
                        value={value}
                      >
                        Insira a data que pretende retirar o dinheiro.
                      </Calendar>
                    </p>
                  </div>

                  <div className="local_moeda">
                    <p>MOEDA</p>
                    <select name="moeda" id="moeda">
                      <option value="SELECIONAR">SELECIONAR</option>
                      <option value="saab">Real</option>
                      <option value="opel">Euro</option>
                      <option value="audi">Dólar Americano</option>
                      <option value="audi">Peso Argentino</option>
                    </select>
                  </div>

                  <div className="local_buscar">
                    <button
                      type="submit"
                      onclick="window.location.href='/page2'"
                    >
                      BUSCAR
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div className="linha_divisao">
          <img src={graph} alt="Linha divisória" />
        </div>
        {/* DIVISÃO */}
        <div className="container-divisao">
          <h3>
            Construído para pessoas que precisam vender aquele dinheiro que
            sobrou de uma viagem, ou para quem precisa fazer a melhor cotação e
            encontrar uma casa de câmbio.
          </h3>

          <p className="chamada1">Chamada Para Usuários</p>

          <div className="diferenciais">
            <div className="dife_01">
              <img className="icone_dif" src={icone_01} alt="Ícone" />
              <p>Comprar dinheiro</p>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </span>
            </div>
            <div className="dife_01">
              <img className="icone_dif" src={icone_02} alt="Ícone" />
              <p>Comprar dinheiro</p>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </span>
            </div>
            <div className="dife_01">
              <img className="icone_dif" src={icone_03} alt="Ícone" />
              <p>Comprar dinheiro</p>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </span>
            </div>
          </div>
          <br />
          <br />
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
                Mussum Ipsum, cacilds vidis litro abertis. Posuere libero
                varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet
                nisi. Leite de capivaris, leite de mula manquis sem cabeça. Copo
                furadis é disculpa de bebadis, arcu quam euismod magna. In
                elementis mé pra quem é amistosis quis leo.
              </p>
              <p>
                Praesent malesuada urna nisi, quis volutpat erat hendrerit non.
                Nam vulputate dapibus. Casamentiss faiz malandris se pirulitá.
                Manduma pindureta quium dia nois paga. Sapien in monti palavris
                qui num significa nadis i pareci latim.
              </p>

              <a className="botao-action" href="">
                {" "}
                Call to Action
              </a>
            </div>
          </div>
          <div className="solucoes">
            <h2>Empresas que usam nossa solução</h2>
            <div className="logo-empresas">
              <img src={logo_dh} alt="logo-dh" />
              <img src={logo_dh} alt="logo-dh" />
              <img src={logo_dh} alt="logo-dh" />
              <img src={logo_dh} alt="logo-dh" />
              <img src={logo_dh} alt="logo-dh" />
            </div>
          </div>

          <div className="perguntas-frequentes">
            <h1>Perguntas frequentes</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="perguntas-box">
            <div className="perguntas">
              <h2>How Does a Hello World?</h2>
              <p>
                Em pé sem cair, deitado sem dormir, sentado sem cochilar e
                fazendo pose. Suco de cevadiss, é um leite divinis, qui tem
                lupuliz, matis, aguis e fermentis. Sapien in monti palavris qui
                num significa nadis i pareci latim. Diuretics paradis num copo é
                motivis de denguis.
              </p>
            </div>
            <div className="perguntas">
              <h2>How Does a Hello World?</h2>
              <p>
                Em pé sem cair, deitado sem dormir, sentado sem cochilar e
                fazendo pose. Suco de cevadiss, é um leite divinis, qui tem
                lupuliz, matis, aguis e fermentis. Sapien in monti palavris qui
                num significa nadis i pareci latim. Diuretics paradis num copo é
                motivis de denguis.
              </p>
            </div>
            <div className="perguntas">
              <h2>How Does a Hello World?</h2>
              <p>
                Em pé sem cair, deitado sem dormir, sentado sem cochilar e
                fazendo pose. Suco de cevadiss, é um leite divinis, qui tem
                lupuliz, matis, aguis e fermentis. Sapien in monti palavris qui
                num significa nadis i pareci latim. Diuretics paradis num copo é
                motivis de denguis.
              </p>
            </div>
            <div className="perguntas">
              <h2>How Does a Hello World?</h2>
              <p>
                Em pé sem cair, deitado sem dormir, sentado sem cochilar e
                fazendo pose. Suco de cevadiss, é um leite divinis, qui tem
                lupuliz, matis, aguis e fermentis. Sapien in monti palavris qui
                num significa nadis i pareci latim. Diuretics paradis num copo é
                motivis de denguis.
              </p>
            </div>
          </div>
        </main>

        <footer className="container-footer">
          {/* CAIXA FOTO DE PERFIL */}

          {/* CAIXA DA ESQUERDA */}

          <div className="item config">
            <div className="logo config">
              <figure>
                <img className="logo-footer" src={logo} alt="Logo da Pagina" />
              </figure>
            </div>
            <p className="texto-footer">
              Fullstack Node JS student mais nao sei por onde começar ainda mais
              hj! Odio ut sem nulla pharetra diam sit amet nisl suscipit.
            </p>
            <nav className="redes config">
              <ul className="linha-footer-logo">
                <li>
                  <a href="">
                    <img src={linkedin} alt="Linkedin" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={github_big_logo} alt="Github" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={instagram} alt="instagram" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={facebook_app_symbol} alt="Facebook" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* CAIXA DO CENTRO */}
          <div className="item itemcentro">
            <nav className="conteudo">
              <h4>CONTACT US</h4>
              <ul>
                <li>
                  <a href="mailto:grupo5@digitalhouse.com">
                    grupo5@digitalhouse.com
                  </a>
                </li>
                <li>
                  <a href="tel:(00) 99999-9999"> (00) 99999-9999</a>
                </li>
                <li>
                  <a className="endereco-footer" href="">
                    330 Franklin Road, São Paulo 135A, Lugar Centro, CEP
                    055-65010
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          {/* CAIXA DA DIREITA */}
          <div className="item dividirmeio">
            <div className="titulo">
              <h4>LINKS IMPORTANTES</h4>
            </div>
            <div className="primeiro">
              <nav className="conteudo">
                <ul>
                  <li>
                    <a href="">Link 1</a>
                  </li>
                  <li>
                    <a href="">Link 2</a>
                  </li>
                  <li>
                    <a href="">Link 3</a>
                  </li>
                  <li>
                    <a href="">Link 4</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="segundo">
              <nav className="conteudo">
                <ul>
                  <li>
                    <a href="">AJUDA</a>
                  </li>
                  <li>
                    <a href="">TERMO DE USO</a>
                  </li>
                  <li>
                    <a href="">POLÍTICA DE PRIVACIDADE</a>
                  </li>
                  <li>
                    <a href="">ACEITE</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {/* CAIXA DE BAIXO */}
          <div className="caixa-baixo">
            <h5>
              Copyright © 2021. Todos os direitos reservados ao GRUPO 5 da
              Digital House.
            </h5>
          </div>
        </footer>
      </body>
    </div>
  );
}

export default Home;
