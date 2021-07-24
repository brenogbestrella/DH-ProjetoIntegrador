import "../senha/Senha.css";
import o_email from "../images/o_email.svg"
import LogoAqui_2 from "../images/LogoAqui_2.png";
import Header from "../components/header/Header"
import Footer2 from "../components/footer2/Footer2"

function Senha() {
  return (
    <div className="Senha">

        <body>
        <Header />
            <main className="pagina-recuperar-senha">
                <div className="card-recuperar-senha">
                    <form className="form">
                    <img
                        className="logo-recuperar-senha"
                        src={LogoAqui_2}
                        alt="TraDinDin"
                    />

                    {/* Email */}
                    <p className="p-recuperar-senha">
                        <label for="email">
                            <img
                            className="buttom-recuperar-senha"
                            src={o_email}
                            alt="" 
                            />
                        </label>
                        <input className="input-senha"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email Cadastrado"
                        />
                    </p>

                    <input className="botao-submit-senha" type="submit" value="Recuperar Senha" />

                    <button className="voltar-senha">Voltar a tela inicial</button>
                    </form>
                </div>
                <Footer2 />
            </main>
        </body>
  </div>
  );
}

export default Senha;