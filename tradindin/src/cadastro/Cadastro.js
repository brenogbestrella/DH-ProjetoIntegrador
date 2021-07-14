import "../cadastro/Cadastro.css";
import LogoAqui_2 from "../images/LogoAqui_2.png";
import user from "../images/user.svg";
import cadeado from "../images/cadeado.svg";
import o_email from "../images/o_email.svg";
import identidade from "../images/identidade.png";
import Header from "../components/header/Header"


function Cadastro() {
  return (
    <div className="Cadastro">
 <Header />
        <body>
            <main className="pagina-cadastro">
            <div className="card-cadastro">
                <form className="form2">
                <img
                    className="logo-cadastro"
                    src={LogoAqui_2}
                    alt="TraDinDin"
                />
                {/* NOME */}
                <p>
                    <label for="nome"><img src={user} alt="" /></label>
                    <input
                    type="text"
                    name="nome"
                    id="nome"
                    placeholder="Nome"
                    />
                </p>
               
                {/* Email */}
                <p>
                    <label for="email"><img src={o_email} alt="" /></label>
                    <input type="email" name="email" id="email" placeholder="Email" />
                </p>

                 {/* senha */}
                 <p>
                    <label for="senha"><img src={cadeado} alt="" /></label>
                    <input
                    type="password"
                    name="senha"
                    id="senha"
                    placeholder="Senha"
                    />
                </p>

                {/* CPF */}
                <p>
                    <label for="documento"><img src={identidade} alt="" /></label>
                    <input
                    type="text"
                    name="documento"
                    id="documento"
                    placeholder="Documento"
                    />
                </p>

                <div className="radio_elemento_3">
                    <input
                    type="radio"
                    name="acao"
                    id="comprar"
                    value="comprar"
                    checked
                    />
                    <label for="comprar">Pessoa Física</label>
                    <input type="radio" name="acao" id="vender" value="vender" />
                    <label for="vender">Pessoa Jurídica</label>
                </div>

                <input className="botao-submit" type="submit" value="Registrar" />

                <button className="voltar">Voltar a tela inicial</button>
                </form>
            </div>
            </main>
        </body>
  </div>
  );
}

export default Cadastro;