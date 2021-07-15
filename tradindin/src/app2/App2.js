import "./App2.css";
import logo from "../images/logo_trad1.png";
import Header from "../components/header/Header";
import Pesquisa from "../components/pesquisa/Pesquisa";
import image_01 from "../images/image_01.png";
import image_02 from "../images/image_02.png";
import image_03 from "../images/image_03.png";

function App2() {
  return (
    <div className="Home">

<Header />

<body> 
<div className="app-coluna"> 

    <div className="app-pesquisa"> < Pesquisa/></div>

    <div className="app-diferenciais">
        
            <div className="app-dife_01">
                <div className="app-div-01">
                    <img className="app-icone" src={image_01} alt="Ícone" />
                </div>
                <div className="app-div-02">
                    <p className="app-nome">Felipe Marcelino</p>
                    <p className="app-lugar">Lugar: Brasil | São Paulo</p>
                    <p className="app-data">Data Máxima de Retirada: 25/09/2021</p>
                    <p className="app-moeda">Moedas de Troca: R$ | $</p>
                    <p className="app-oferta">Oferta: R$ 5.000,00</p>
                </div>
                <div className="app-div-03">
                    <a href="#" className="app-botao-div2">FAZER OFERTA!</a>
                </div>
            </div>


            <div className="app-dife_01">
                <div className="app-div-01">
                    <img className="app-icone" src={image_02} alt="Ícone" />
                </div>
                <div className="app-div-02">
                    <p className="app-nome">Breno Estrella</p>
                    <p className="app-lugar">Lugar: Brasil | Rio de Janeiro</p>
                    <p className="app-data">Data Máxima de Retirada: 20/03/2022</p>
                    <p className="app-moeda">Moedas de Troca: R$ | $</p>
                    <p className="app-oferta">Oferta: R$ 55.000,00</p>
                </div>
                <div className="app-div-03">
                    <a href="#" className="app-botao-div2">FAZER OFERTA!</a>
                </div>
            </div>
            
            <div className="app-dife_01">
                <div className="app-div-01">
                    <img className="app-icone" src={image_03} alt="Ícone" />
                </div>
                <div className="app-div-02">
                    <p className="app-nome">Ivens Diego Müller</p>
                    <p className="app-lugar">Lugar: Estados Unidos | Nova Iorque</p>
                    <p className="app-data">Data Máxima de Retirada: 15/12/2021</p>
                    <p className="app-moeda">Moedas de Troca: R$ | $</p>
                    <p className="app-oferta">Oferta: $ 2.900,00</p>
                </div>
                <div className="app-div-03">
                    <a href="#" className="app-botao-div2">FAZER OFERTA!</a>
                </div>
            </div>
    </div>

    <div className="app-diferenciais2">
        
            <div className="app-dife_01">
                <div className="app-div-01">
                    <img className="app-icone" src={image_01} alt="Ícone" />
                </div>
                <div className="app-div-02">
                    <p className="app-nome">Felipe Marcelino</p>
                    <p className="app-lugar">Lugar: Brasil | São Paulo</p>
                    <p className="app-data">Data Máxima de Retirada: 25/09/2021</p>
                    <p className="app-moeda">Moedas de Troca: R$ | $</p>
                    <p className="app-oferta">Oferta: R$ 5.000,00</p>
                </div>
                <div className="app-div-03">
                    <a href="#" className="app-botao-div2">FAZER OFERTA!</a>
                </div>
            </div>


            <div className="app-dife_01">
                <div className="app-div-01">
                    <img className="app-icone" src={image_02} alt="Ícone" />
                </div>
                <div className="app-div-02">
                    <p className="app-nome">Breno Estrella</p>
                    <p className="app-lugar">Lugar: Brasil | Rio de Janeiro</p>
                    <p className="app-data">Data Máxima de Retirada: 20/03/2022</p>
                    <p className="app-moeda">Moedas de Troca: R$ | $</p>
                    <p className="app-oferta">Oferta: R$ 55.000,00</p>
                </div>
                <div className="app-div-03">
                    <a href="#" className="app-botao-div2">FAZER OFERTA!</a>
                </div>
            </div>
            
            <div className="app-dife_01">
                <div className="app-div-01">
                    <img className="app-icone" src={image_03} alt="Ícone" />
                </div>
                <div className="app-div-02">
                    <p className="app-nome">Ivens Diego Müller</p>
                    <p className="app-lugar">Lugar: Estados Unidos | Nova Iorque</p>
                    <p className="app-data">Data Máxima de Retirada: 15/12/2021</p>
                    <p className="app-moeda">Moedas de Troca: R$ | $</p>
                    <p className="app-oferta">Oferta: $ 2.900,00</p>
                </div>
                <div className="app-div-03">
                    <a href="#" className="app-botao-div2">FAZER OFERTA!</a>
                </div>
            </div>
    </div>

</div>
    
</body>
</div>

  );
}

export default App2;