import "../senha/Senha.css";
import o_email from "../images/o_email.svg"
import LogoAqui_2 from "../images/LogoAqui_2.png";


function Senha() {
  return (
    <div className="Senha">
        <header>

        </header>
        <body>
            <main className="pagina-recuperar-senha">
                <div className="card-recuperar-senha">
                    <form className="form">
                    <img
                        className="logo-recuperar-senha"
                        src={LogoAqui_2}
                        alt="TraDinDin"
                    />

                    {/* Email */}
                    <p>
                        <label for="email">
                            <img
                            className="buttom-recuperar-senha"
                            src={o_email}
                            alt="" 
                            />
                        </label>
                        <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email Cadastrado"
                        />
                    </p>

                    <input className="botao-submit" type="submit" value="Recuperar Senha" />

                    <button className="voltar">Voltar a tela inicial</button>
                    </form>
                </div>
            </main>
        </body>
  </div>
  );
}

export default Senha;