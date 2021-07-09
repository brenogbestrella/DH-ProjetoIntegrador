import "./App.css";
import logo from "../images/logo_trad1.png";

function App() {
  return (
    <div className="Home">
      <header>
        
      </header>
      <body>
        <h1>Sua Pesquisa</h1>
        <div className="filtro">
          <div id="pesquisa">
            <input
              className="styled-input"
              type="search"
              results="5"
              placeholder="Pesquise a moeda"
              name="s"
            />
          </div>
          <div id="botoes-filtro">
            <button className="btn active" onclick="filterSelection('all')">
              TODAS
            </button>
            <button className="btn" onclick="filterSelection('usd')">
              USD
            </button>
            <button className="btn" onclick="filterSelection('CAD')">
              CAD
            </button>
            <button className="btn" onclick="filterSelection('eur')">
              EUR
            </button>
            <button className="btn" onclick="filterSelection('lbr')">
              LBR
            </button>
            <button className="btn" onclick="filterSelection('yen')">
              YEN
            </button>
          </div>
          <form>
            <label id="pergunta-intencao">Filtro de Seleção</label>
            <label className="radio-inline">
              <input type="radio" name="optradio" checked /> Compra
            </label>
            <label className="radio-inline">
              <input type="radio" name="optradio" /> Venda
            </label>
          </form>
        </div>
        <div className="melhores-ofertas">
          <h2>Melhores Ofertas</h2>
          <div className="oferta">
            <button className="botao-oferta" onclick="filterSelection('offer1')">
              Oferta #1
            </button>
            <button className="botao-oferta" onclick="filterSelection('offer2')">
              Oferta #2
            </button>
            <button className="botao-oferta" onclick="filterSelection('offer3')">
              Oferta #3
            </button>
            <button className="botao-oferta" onclick="filterSelection('offer4')">
              Oferta #4
            </button>
            <button className="botao-oferta" onclick="filterSelection('offer5')">
              Oferta #5
            </button>
            <button className="botao-oferta" onclick="filterSelection('offer6')">
              Oferta #6
            </button>
          </div>
        </div>
        <div className="cambio">
          <h2>Casas de Câmbio</h2>
          <div className="casas-cambio">
            <button className="botao-cambio" onclick="filterSelection('offer1')">
              Casa de Câmbio #1
            </button>
            <button className="botao-cambio" onclick="filterSelection('offer2')">
              Casa de Câmbio #2
            </button>
            <button className="botao-cambio" onclick="filterSelection('offer3')">
              Casa de Câmbio #3
            </button>
            <button className="botao-cambio" onclick="filterSelection('offer4')">
              Casa de Câmbio #4
            </button>
            <button className="botao-cambio" onclick="filterSelection('offer5')">
              Casa de Câmbio #5
            </button>
            <button className="botao-cambio" onclick="filterSelection('offer6')">
              Casa de Câmbio #6
            </button>
            <button className="botao-cambio" onclick="filterSelection('offer7')">
              Casa de Câmbio #7
            </button>
            <button className="botao-cambio" onclick="filterSelection('offer8')">
              Casa de Câmbio #8
            </button>
            <button className="botao-cambio" onclick="filterSelection('offer9')">
              Casa de Câmbio #9
            </button>
            <button className="botao-cambio" onclick="filterSelection('offer10')">
              Casa de Câmbio #10
            </button>
            <button className="botao-cambio" onclick="filterSelection('offer11')">
              Casa de Câmbio #11
            </button>
            <button className="botao-cambio" onclick="filterSelection('offer12')">
              Casa de Câmbio #12
            </button>
          </div>
        </div>
        <div className="historico">
          <h2>Histórico de Transações</h2>
          <div className="historico-transacao">
            <button
              className="botao-historico"
              onclick="filterSelection('transhist1')"
            >
              HistTrans #1
            </button>
            <button
              className="botao-historico"
              onclick="filterSelection('transhist2')"
            >
              HistTrans #2
            </button>
            <button
              className="botao-historico"
              onclick="filterSelection('transhist3')"
            >
              HistTrans #3
            </button>
            <button
              className="botao-historico"
              onclick="filterSelection('transhist4')"
            >
              HistTrans #4
            </button>
            <button
              className="botao-historico"
              onclick="filterSelection('transhist5')"
            >
              HistTrans #5
            </button>
            <button
              className="botao-historico"
              onclick="filterSelection('transhist6')"
            >
              HistTrans #6
            </button>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
