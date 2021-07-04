import "../cadastro/Cadastro.css";
import LogoAqui_2 from "../images/LogoAqui_2.png";
import user from "../images/user.svg";
import cadeado from "../images/cadeado.svg";
import o_email from "../images/o_email.svg";




function Cadastro() {
  return (
    <div className="Cadastro">
        <header>

        </header>
        <body>
            <main className="pagina-cadastro">
            <div className="card-cadastro">
                <form className="form">
                <img
                    className="logo-cadastro"
                    src={LogoAqui_2}
                    alt="TraDinDin"
                />
                {/* USUÁRIO */}
                <p>
                    <label for="usuario"><img src={user} alt="" /></label>
                    <input
                    type="text"
                    name="usuario"
                    id="usuario"
                    placeholder="Usuário"
                    />
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
                {/* Email */}
                <p>
                    <label for="email"><img src={o_email} alt="" /></label>
                    <input type="email" name="email" id="email" placeholder="Email" />
                </p>

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